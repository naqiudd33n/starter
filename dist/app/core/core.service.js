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
var CoreService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreService = void 0;
const common_1 = require("@nestjs/common");
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
let CoreService = CoreService_1 = class CoreService {
    constructor() {
        this.logger = new common_1.Logger(CoreService_1.name);
    }
    onApplicationBootstrap() {
        this.ensureStorage();
    }
    async ensureStorage() {
        const folderPath = (0, path_1.resolve)('./src/storage/qr-codes');
        if (!(0, fs_extra_1.existsSync)(folderPath)) {
            await (0, fs_extra_1.ensureDir)(folderPath);
        }
    }
};
exports.CoreService = CoreService;
exports.CoreService = CoreService = CoreService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CoreService);
//# sourceMappingURL=core.service.js.map