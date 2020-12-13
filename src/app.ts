import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import json from 'koa-json';
import koalogger from 'koa-logger';
import router from './server';
import dotenv from 'dotenv';
import { logger } from './logger';
import path from 'path';
import { connectDB } from './db/connect';
import { scheduledTask } from "./cron/runner";
import render from 'koa-ejs';
import serve from 'koa-static';
// Allow for programmatic .env file loading based on $NODE_ENV
dotenv.config({ path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`) })

const app = new Koa();
const port = process.env.PORT || 3000;

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'ejs',
  cache: false,
  debug: true
});

app.use(helmet({
  contentSecurityPolicy: false,
}));
app.use(cors());
app.use(json());
app.use(koalogger());
app.use(bodyParser());
app.use(serve(path.join(__dirname, '..', 'public')));
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  logger.info(`\n\n🚀 App listening on the port ${port}`);
});

connectDB(process.env).then(() => {
  logger.info("✅ Yes! Very mongo");
}).catch(err => {
  logger.error("❌ Ups! No mongo: ", err);
})

scheduledTask.start();
