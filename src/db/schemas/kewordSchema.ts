import { Document, Schema } from 'mongoose';

export const keywordSchema = new Schema<IKeywordSchema>({
    _id: Schema.Types.ObjectId,
    verb: { type: String, required: true },
    match: { type: Number, required: true }
});

export interface IKeywordSchema extends Document {
    verb: String;
    match: Number;
};