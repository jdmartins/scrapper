import { model } from 'mongoose';
import { itemSchema, IResultSchema } from '../schemas/resultSchema';
const Item = model('item', itemSchema);

async function addItem(item: IResultSchema) {

}

async function getLastEntry() {
    Item.findOne().sort({ field: 'asc', _id: -1 }).limit(1);
}

export async function getResults(page: number, limit = 25) {
    const skip = limit * (page - 1);
    return Item.find().skip(skip).limit(limit);
}