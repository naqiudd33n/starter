import { HttpStatus } from '@nestjs/common';
export declare class DefaultHttpResponseType<T = any> {
    code: string;
    message: string;
    statusCode: number;
    module?: string;
    additionalMessage?: any;
    data?: T;
    pagination?: Pagination;
}
export interface Pagination {
    length: number;
    pageSize: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}
export declare class DefaultHttpResponse<T> {
    private readonly message;
    readonly statusCode: HttpStatus;
    private readonly timestamp;
    private readonly module;
    private readonly code;
    private readonly additionalMessage;
    private readonly error;
    private readonly data;
    private readonly pagination;
    constructor({ message, statusCode, module, code, additionalMessage, data, pagination, }: DefaultHttpResponseType);
}
