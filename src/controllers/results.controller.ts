import { Context } from 'koa';
import { itemSchema } from '../db/schemas/resultSchema';
import { getResults } from "../db/models/itemModel";

export default class ResultsController {

    public static async getIndex({ render, request }: Context) {
        const { page, limit } = request.query;
        const results = await getResults(page, limit);

        render('results', { results })
    }
}
