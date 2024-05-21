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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const log_service_1 = require("../../core/providers/log/log.service");
const app_type_1 = require("../../core/types/app.type");
const default_http_exception_1 = require("../../shared/custom/http-exception/default.http-exception");
const default_http_response_1 = require("../../shared/custom/http-response/default.http-response");
let ExampleController = class ExampleController {
    constructor(_logService) {
        this._logService = _logService;
    }
    getHello(request, response, note) {
        const host = request.headers?.host;
        if (!host) {
            const failedCode = app_type_1.AppCode.GENERAL_ERROR;
            throw new default_http_exception_1.DefaultHttpException({
                message: failedCode.description,
                code: failedCode.code,
                statusCode: failedCode.status,
                error: {
                    reason: 'no host',
                },
            });
        }
        const data = {
            message: 'Hello, World!',
            host,
            note,
        };
        this._logService.debug('Logging the data', data);
        const successCode = app_type_1.AppCode.OK;
        const result = new default_http_response_1.DefaultHttpResponse({
            code: successCode.code,
            message: successCode.description,
            statusCode: successCode.status,
            data,
        });
        response.status(result.statusCode);
        response.json(result);
        return response;
    }
    getHellor(request, response, note) {
        const host = request.headers?.host;
        if (!host) {
            const failedCode = app_type_1.AppCode.GENERAL_ERROR;
            throw new default_http_exception_1.DefaultHttpException({
                message: failedCode.description,
                code: failedCode.code,
                statusCode: failedCode.status,
                error: {
                    reason: 'no host',
                },
            });
        }
        const data = {
            message: 'Hello, World!',
            host,
            note,
        };
        this._logService.debug('Logging the data', data);
        const successCode = app_type_1.AppCode.OK;
        const result = new default_http_response_1.DefaultHttpResponse({
            code: successCode.code,
            message: successCode.description,
            statusCode: successCode.status,
            data,
        });
        response.status(result.statusCode);
        response.json(result);
        return response;
    }
};
exports.ExampleController = ExampleController;
__decorate([
    (0, common_1.Get)('get-hello'),
    (0, swagger_1.ApiOperation)({
        summary: 'Display Hello',
        description: 'A simple greeting API that returns a friendly "Hello, World!" message when accessed. It serves as a basic example or placeholder for API testing and demonstration purposes',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Response)()),
    __param(2, (0, common_1.Query)('note')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", void 0)
], ExampleController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('halupolis'),
    (0, swagger_1.ApiOperation)({
        summary: 'Display Hello',
        description: 'A simple greeting API that returns a friendly "Hello, World!" message when accessed. It serves as a basic example or placeholder for API testing and demonstration purposes',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Response)()),
    __param(2, (0, common_1.Query)('note')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", void 0)
], ExampleController.prototype, "getHellor", null);
exports.ExampleController = ExampleController = __decorate([
    (0, common_1.Controller)('example'),
    __metadata("design:paramtypes", [log_service_1.LogService])
], ExampleController);
//# sourceMappingURL=example.controller.js.map