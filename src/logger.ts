import * as winston from "winston";
const { printf } = winston.format;


export enum LogLevel {
    error = 'error',
    warn = 'warn',
    info = 'info',
    http = 'http',
    verbose = 'verbose',
    debug = 'debug',
    silly = 'silly'
};

const logFormat = printf(({ level, message }) => `${new Date()} — ${level}: ${message}`);

export const logger = winston.createLogger({
    format: logFormat,
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs.log', dirname: `${process.env.HOME}/scrapper/logs` })
    ]
});