import mongoose from 'mongoose';

const connectionString = (env) => env.NODE_ENV === 'production' ?
  `mongodb+srv://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}/${env.DB_NAME}?retryWrites=true&w=majority` :
  `mongodb://${env.DB_HOST}/${env.DB_NAME}`;

export const connectDB = env => mongoose.connect(connectionString(env), { useNewUrlParser: true, useUnifiedTopology: true });
