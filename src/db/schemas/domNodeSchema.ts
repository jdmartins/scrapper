import { Document, Schema } from 'mongoose';

export const domNodeSchema = new Schema<IDomNodeSchema>({
    type: { type: String, required: true },
    id: { type: String, required: false },
    class: { type: String, required: false },
    target: { type: String, enum: ['self', 'child', 'parent', 'sibling'] }
});

export interface IDomNodeSchema extends Document {
    type: string // element type e.g. "div"
    id?: string
    class?: string
    target: ElementTarget
}

enum ElementTarget {
    self = 'self',
    child = 'child',
    parent = 'parent',
    sibling = 'sibling'
}