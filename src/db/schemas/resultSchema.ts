import mongoose, { Document } from 'mongoose';
import { IKeywordSchema } from './kewordSchema';
const { Schema } = mongoose;

export const ResultSchema = new Schema<IResultSchema>({
    _id: Schema.Types.ObjectId,
    host: String,
    externalId: String,
    title: String,
    description: String,
    photos: [String],
    geoLocation: { type: String, required: false },
    dateAdded: Date,
    keyword: { type: Schema.Types.ObjectId, ref: 'Keyword' },
    contact: {
        name: String,
        location: String,
    }
});

export interface IResultSchema extends Document {
    host: String,
    externalId: String,
    title: String,
    description: String,
    photos: [String],
    geoLocation: String,
    keyword: IKeywordSchema,
    dateAdded: Date,
    contact: {
        name: String,
        location: String,
    }
};