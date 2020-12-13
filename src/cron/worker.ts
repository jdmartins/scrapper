import { logger } from '../logger';
import { Worker, workerData, isMainThread, parentPort } from 'worker_threads';
import { mbToBytes } from '../utils'
import { getAllTargets } from '../db/models/targetModel';
import { ITargetSchema } from '../db/schemas/targetSchema';
import { cpus } from 'os'


const sabSize = mbToBytes(10);
const sab = new SharedArrayBuffer(sabSize);
const offset = 0;

logger.info('👾 Starting scrapping Cronjob')


export async function cron() {
    if (isMainThread) {
        const threads = new Set();
        const threadCount = cpus().length;
        // retrieve targets
        const targets = await getAllTargets();

        for (const target of targets) {
            const worker = new Worker(__filename, { workerData: { target } })
            threads.add(worker);
            worker.on('error', (err) => { throw err; });
            worker.on('exit', () => {
                threads.delete(worker);
                console.log(`Thread exiting, ${threads.size} running...`);
            })
            worker.on('message', (msg) => {
                // when message is received add data to sharedarraybuffer

            });
        }

    } else {

    }
}