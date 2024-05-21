import { Logger } from '@nestjs/common';
import * as winston from 'winston';
interface TransactionI {
    type: 'start' | 'end';
    data: {
        timestamp: string;
        url?: string;
        ip?: string;
        requestBody?: string;
        responseBody?: string;
        responseTime?: number;
    };
}
export declare class LogService extends Logger {
    private _winstonLogger;
    private readonly folderPath;
    constructor(_winstonLogger: winston.Logger);
    registerClassName(moduleName: string): void;
    transaction(params: TransactionI): void;
    log(message: string, optionalParams?: any): void;
    error(message: string, trace?: string): void;
    warn(message: string, optionalParams?: any): void;
    debug(message: string, optionalParams?: any): void;
    verbose(message: string, optionalParams?: any): void;
}
export {};
