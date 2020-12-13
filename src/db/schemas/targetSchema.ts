import { Document, Schema } from 'mongoose';
import { domNodeSchema, IDomNodeSchema } from './domNodeSchema';
import { IKeywordSchema } from './kewordSchema';

export const targetSchema = new Schema<ITargetSchema>({
    _id: Schema.Types.ObjectId,
    url: String,
    search: {
        type: { type: String, enum: ['path', 'query'] },
        key: { String, required: false },
        values: [{ type: Schema.Types.ObjectId, ref: 'Keyword' }]
    },
    pagination: {
        type: { type: String, enum: ['path', 'query'] },
        key: { type: String, required: false },
        value: { type: String, required: true }
    },
    domNodes: {
        list: { type: domNodeSchema, required: true },
        result: { type: domNodeSchema, required: true },
        title: { type: domNodeSchema, required: true },
        price: { type: domNodeSchema, required: false },
        description: { type: domNodeSchema, required: false },
        dateAdded: { type: domNodeSchema, required: false },
        photos: [{ type: domNodeSchema, required: false }],
    }
});

export interface ITargetSchema extends Document {
    url: String,
    search: {
        type: Method,
        key: String
        values: [IKeywordSchema]
    },
    pagination: {
        type: Method,
        key: String,
        value: String,
    },
    domNodes: {
        list: IDomNodeSchema,
        result: IDomNodeSchema,
        title: IDomNodeSchema,
        description: IDomNodeSchema,
        dateAdded: IDomNodeSchema,
        photos: IDomNodeSchema,
    }
};


enum Method {
    query = 'query',
    path = 'path'
}

