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
exports.DefaultHttpResponse = exports.DefaultHttpResponseType = void 0;
const common_1 = require("@nestjs/common");
const date_util_1 = require("../../../core/utils/date.util");
class DefaultHttpResponseType {
}
exports.DefaultHttpResponseType = DefaultHttpResponseType;
let DefaultHttpResponse = class DefaultHttpResponse {
    constructor({ message, statusCode, module, code, additionalMessage, data, pagination, }) {
        this.message = message;
        this.timestamp = (0, date_util_1.ISO8601DateTime)(new Date());
        this.statusCode = statusCode;
        this.module = module;
        this.code = code;
        this.additionalMessage = additionalMessage;
        this.data = data;
        this.pagination = pagination;
    }
};
exports.DefaultHttpResponse = DefaultHttpResponse;
exports.DefaultHttpResponse = DefaultHttpResponse = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [DefaultHttpResponseType])
], DefaultHttpResponse);
//# sourceMappingURL=default.http-response.js.map