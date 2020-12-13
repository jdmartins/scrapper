import { model } from 'mongoose';
import { logger } from '../../logger';
import { keywordSchema, IKeywordSchema } from '../schemas/kewordSchema';
const Keyword = model('Keyword', keywordSchema);

async function add(item: IKeywordSchema) {

}
async function update(item: IKeywordSchema) {

}
async function remove(item: IKeywordSchema) {

}

export const getAllKeywords = async () => {
    return Keyword.find();
};

export const addKeywords = async (keywords: IKeywordSchema[]) => {
    try {
        await Keyword.insertMany(keywords);
        console.log('hello')
    } catch (error) {
        logger.error('Error inserting in DB: ', error);
    }
};