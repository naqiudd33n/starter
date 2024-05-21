"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultHttpException = void 0;
const common_1 = require("@nestjs/common");
const date_util_1 = require("../../../core/utils/date.util");
class DefaultHttpException extends common_1.HttpException {
    constructor(stack) {
        const timestamp = (0, date_util_1.ISO8601DateTime)(new Date());
        try {
            if (stack instanceof DefaultHttpException) {
                const error = stack?.getResponse();
                const { module: moduleName, ...response } = error;
                const module = process.env.ENABLE_DEBUGGING !== 'true'
                    ? undefined
                    : moduleName;
                super({ ...response, timestamp, module }, error.statusCode ?? 500);
            }
            else {
                throw new Error(stack);
            }
        }
        catch (error) {
            const { statusCode, code, message, module: moduleName } = stack;
            const module = process.env.ENABLE_DEBUGGING !== 'true'
                ? undefined
                : moduleName;
            const response = {
                statusCode: statusCode ?? common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                code: code ?? 'EE',
                message: message ??
                    (JSON.stringify(stack) !== '{}'
                        ? JSON.stringify(stack)
                        : stack.toString()),
                error: message === stack?.message ? stack?.error ?? {} : stack,
                timestamp,
                module,
            };
            super(response, response.statusCode ?? 500);
        }
    }
}
exports.DefaultHttpException = DefaultHttpException;
//# sourceMappingURL=default.http-exception.js.map