"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mysqlConfig = void 0;
const mysqlConfig = () => ({
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT) || 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 10,
});
exports.mysqlConfig = mysqlConfig;
//# sourceMappingURL=mysql.config.js.map