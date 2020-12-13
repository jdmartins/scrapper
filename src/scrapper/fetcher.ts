import fetch from 'node-fetch';
import { logger } from '../logger';

export const request = async (url: string) => {
    try {
        const response = await fetch(url)
        // Should get some html text
        return await response.text();
    } catch (error) {
        logger.error(error.response.body)
    }
};