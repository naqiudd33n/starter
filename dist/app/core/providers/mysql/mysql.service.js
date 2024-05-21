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
var MySQLService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLService = void 0;
const common_1 = require("@nestjs/common");
const mysql_config_1 = require("../../../config/mysql.config");
const mySQL = require("mysql2/promise");
let MySQLService = MySQLService_1 = class MySQLService {
    constructor() {
        this.logger = new common_1.Logger(MySQLService_1.name);
        this.initialiseDb();
    }
    async query(query) {
        const connection = await this.pool.getConnection();
        try {
            const [rows, fields] = await connection.query(query);
            return rows;
        }
        finally {
            connection.release();
        }
    }
    async initialiseDb() {
        try {
            this.config = (0, mysql_config_1.mysqlConfig)();
            this.pool = mySQL.createPool(this.config);
            this.logger.debug(`MySQL Database successfully initialized`);
        }
        catch (error) {
            this.logger.error(`Failed to initialize MySQL Client: ${error}`);
        }
    }
};
exports.MySQLService = MySQLService;
exports.MySQLService = MySQLService = MySQLService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MySQLService);
//# sourceMappingURL=mysql.service.js.map