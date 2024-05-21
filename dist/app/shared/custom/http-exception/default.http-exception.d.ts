import { HttpException, HttpStatus } from '@nestjs/common';
export type DefaultHttpExceptionType = {
    statusCode?: HttpStatus;
    code?: string;
    message: string;
    error?: any;
    timestamp?: string;
    module?: string;
};
export declare class DefaultHttpException extends HttpException {
    readonly statusCode: HttpStatus;
    readonly code: string;
    readonly message: string;
    readonly error?: any;
    readonly timestamp?: string;
    readonly module?: string;
    constructor(stack: DefaultHttpExceptionType);
}
