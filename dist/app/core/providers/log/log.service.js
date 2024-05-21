"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogService = void 0;
const common_1 = require("@nestjs/common");
const date_util_1 = require("../../utils/date.util");
const size_conversion_util_1 = require("../../utils/size-conversion.util");
const path_1 = require("path");
const winston = require("winston");
let LogService = class LogService extends common_1.Logger {
    constructor(_winstonLogger) {
        super();
        this._winstonLogger = _winstonLogger;
        this.folderPath = (0, path_1.resolve)(process.env.FILE_LOG_PATH ?? './src/storage/logs');
        try {
            const todayDate = new Date();
            const fileName = `${(0, date_util_1.ISO8601Date)(todayDate)}-APP.log`;
            const maxSizeBytes = (0, size_conversion_util_1.convertSizeToBytes)(1, 'GB');
            const customFormat = winston.format.printf(({ level, message, timestamp, ...metadata }) => {
                const { type, data } = metadata;
                const { url, ip, timestamp: trxTimestamp, requestBody, responseBody, responseTime, } = data ?? {};
                const datetime = trxTimestamp ?? timestamp;
                if (type === 'start') {
                    return `[${datetime}] - START - ${ip} - ${url} - Request Body : ${requestBody}`;
                }
                if (type === 'end') {
                    return `[${datetime}] - END - Response Body : ${responseBody} -  Response Time: ${responseTime}ms`;
                }
                const formattedMetadata = Object.keys(metadata).length
                    ? ` ${JSON.stringify(metadata)}`
                    : '';
                return `[${datetime}] - ${level.toUpperCase()} - Message: ${message} - Additional Data: ${formattedMetadata}`;
            });
            this._winstonLogger = winston.createLogger({
                silent: process.env.FILE_LOGGING === 'false' ?? true,
                level: 'debug',
                format: winston.format.combine(winston.format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss.SSS',
                }), customFormat),
                transports: [
                    new winston.transports.File({
                        filename: (0, path_1.join)(this.folderPath, fileName),
                        maxsize: maxSizeBytes,
                    }),
                ],
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }
    registerClassName(moduleName) {
        this.context = moduleName;
    }
    transaction(params) {
        const { type, data } = params;
        this._winstonLogger.info(null, { type, data });
    }
    log(message, optionalParams) {
        if (optionalParams === undefined) {
            super.log(message);
        }
        else {
            optionalParams =
                typeof optionalParams === 'string'
                    ? { message, optionalParams }
                    : { optionalParams };
            super.log(message, optionalParams);
        }
        this._winstonLogger.info(message, optionalParams);
    }
    error(message, trace) {
        super.error(message, trace);
        this._winstonLogger.error(message, { trace });
    }
    warn(message, optionalParams) {
        if (optionalParams === undefined) {
            super.warn(message);
        }
        else {
            optionalParams =
                typeof optionalParams === 'string'
                    ? { message, optionalParams }
                    : { optionalParams };
            super.warn(message, optionalParams);
        }
        this._winstonLogger.warn(message, optionalParams);
    }
    debug(message, optionalParams) {
        if (optionalParams === undefined) {
            super.debug(message);
        }
        else {
            optionalParams =
                typeof optionalParams === 'string'
                    ? { message, optionalParams }
                    : { optionalParams };
            super.debug(message, optionalParams);
        }
        this._winstonLogger.debug(message, optionalParams);
    }
    verbose(message, optionalParams) {
        if (optionalParams === undefined) {
            super.verbose(message);
        }
        else {
            optionalParams =
                typeof optionalParams === 'string'
                    ? { message, optionalParams }
                    : { optionalParams };
            super.verbose(message, optionalParams);
        }
        this._winstonLogger.verbose(message, optionalParams);
    }
};
exports.LogService = LogService;
exports.LogService = LogService = __decorate([
    (0, common_1.Injectable)({
        scope: common_1.Scope.TRANSIENT,
    }),
    __metadata("design:paramtypes", [winston.Logger])
], LogService);
//# sourceMappingURL=log.service.js.map