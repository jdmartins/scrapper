import { schedule } from 'node-cron';
import { cronWorker } from "./worker";

// Run cron every 2 hours
export const scheduledTask = schedule('0 */2 * * *', cronWorker, { timezone: 'Europe/Bucharest' });



