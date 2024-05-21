/**
 * 
 * Please update this so that we can track the latest version.
 * 
 * Author           : Ahmad Miqdaad (ahmadmiqdaadz[at]gmail.com)
 * Last Contributor : Ahmad Miqdaad (ahmadmiqdaadz[at]gmail.com)
 * Last Updated     : 1 May 2024
 * 
 * **/

import { Injectable, Logger } from '@nestjs/common';
import { mysqlConfig } from 'app/config/mysql.config';
import * as mySQL from 'mysql2/promise';

@Injectable()
export class MySQLService {

    private config: mySQL.ConnectionOptions;
    private pool: mySQL.Pool;
    private readonly logger = new Logger(MySQLService.name);
    
    /**
     * Constructor
     */

    constructor() {
        this.initialiseDb();    
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    async query(query): Promise<any> {
        const connection = await this.pool.getConnection();
        try {
            const [rows, fields] = await connection.query(query);
            return rows;
        } finally {
            connection.release();
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    private async initialiseDb() {
        try {
            this.config = mysqlConfig();
            this.pool = mySQL.createPool(this.config);
            this.logger.debug(`MySQL Database successfully initialized`);
        } catch (error) {
            this.logger.error(`Failed to initialize MySQL Client: ${error}`);
        }
    }
}