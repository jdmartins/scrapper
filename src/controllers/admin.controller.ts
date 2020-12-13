import { Context } from 'koa';
import { getAllTargets } from '../db/models/targetModel';
import { getAllKeywords, addKeywords } from '../db/models/keywordModel';

export default class AdminController {

    public static async getIndex(ctx: Context) {
        // get DB data
        // retrieve targets and keywords
        const targets = await getAllTargets();
        const keywords = await getAllKeywords();
        return ctx.render('admin', { targets, keywords })
    }

    public static async addTarget(ctx: Context) {

    }

    public static async addKeyword(ctx: Context) {
        console.log(ctx);
    }

    public static async addKeywords(ctx: Context) {
        const keywords = JSON.parse(ctx.file.buffer.toString('utf8'));
        addKeywords(keywords);
        return ctx.redirect('/admin');
    }

    public static async updateTarget(ctx: Context) {

    }
}
