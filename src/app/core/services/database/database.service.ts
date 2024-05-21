import { Injectable } from '@nestjs/common';
import { LogService } from 'app/core/providers/log/log.service';
// import { MsSQLService } from 'app/core/providers/mssql/mssql.service';
import { MySQLService } from 'app/core/providers/mysql/mysql.service';
// import { OracleService } from "app/core/providers/oracle/oracle.service";
// import { PostgresService } from "app/core/providers/postgres/postgres.service";
import { RedisService } from 'app/core/providers/redis/redis.service';
import { readSQLFile } from 'app/core/utils/sql-reader.util';

@Injectable()
export class DatabaseService {
    /**
     * Constructor
     */

    constructor(
        // private _msSQLService: MsSQLService,
        private _mySQLService: MySQLService,
        // private _oracleService: OracleService,
        // private _postgresService: PostgresService,
        private _redisService: RedisService,
        private _logService: LogService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    private readonly msSQLQuery = readSQLFile(__dirname, 'sql/mssql.info.sql');
    private readonly mySQLQuery = readSQLFile(__dirname, 'sql/mysql.info.sql');
    private readonly oracleQuery = readSQLFile(
        __dirname,
        'sql/oracle.info.sql'
    );
    private readonly postgresQuery = readSQLFile(
        __dirname,
        'sql/postgres.info.sql'
    );
    async getTimestamp(request): Promise<any | null> {
        try {
            // -------------------
            // Microsoft SQL
            // -------------------

            // let msSQL;
            // try {
            //     // Custom query
            //     this._logService.debug("Microsoft SQL Query", this.msSQLQuery);
            //     const msSQLResult = await this._msSQLService.query(this.msSQLQuery);
            //     this._logService.debug("Microsoft SQL Results", msSQLResult);
            //     // Get timestamp
            //     const msSQLQuery = "SELECT getdate() AS timestamp";
            //     const [msSQLTimestamp] = await this._msSQLService.query(msSQLQuery);
            //     // Get MsSQL version
            //     const [msSQLInfo] = await this._msSQLService.query(`SELECT @@VERSION`);
            //     // Compose Result
            //     msSQL = {version: msSQLInfo[""], timestamp: msSQLTimestamp.timestamp, result: msSQLResult};
            // } catch (error) {
            //     msSQL = error.message;
            // }

            // -------------------
            // MySQL
            // -------------------

            let mySQL;
            try {
                // Custom query
                this._logService.debug('MySQL Query', this.mySQLQuery);
                const mySQLResult = await this._mySQLService.query(
                    this.mySQLQuery
                );
                this._logService.debug('MySQL Results', mySQLResult);
                // Get timestamp
                const mySQLQuery = 'SELECT now() AS timestamp';
                const [mySQLTimestamp] = await this._mySQLService.query(
                    mySQLQuery
                );
                // Get MySQL version
                const mySQLInfo = await this._mySQLService.query(
                    `SHOW variables like "%version%"`
                );
                const mySQLVersion = mySQLInfo.find(
                    (item) => item['Variable_name'] === 'version'
                );
                // Compose Result
                mySQL = {
                    version: mySQLVersion.Value,
                    timestamp: mySQLTimestamp.timestamp,
                    result: mySQLResult,
                };
            } catch (error) {
                mySQL = error.message;
            }

            // -------------------
            // Oracle
            // -------------------

            // let oracle;
            // try {
            //     // Custom query
            //     this._logService.debug("Oracle Query", this.oracleQuery);
            //     const oracleResult = await this._oracleService.query(this.oracleQuery);
            //     this._logService.debug("Oracle Results", oracleResult);
            //     // Get timestamp
            //     const oracleQuery = "SELECT SYSTIMESTAMP AS TIMESTAMP FROM DUAL";
            //     const [oracleTimestamp] = await this._oracleService.query(oracleQuery);
            //     // Get Oracle version
            //     const oracleInfo = await this._oracleService.query(`SELECT * FROM v$version`);
            //     const oracleVersion = oracleInfo.map(item => item['BANNER']).join(" ");
            //     // Compose Result
            //     oracle = {version: oracleVersion, timestamp: oracleTimestamp['TIMESTAMP'], result: oracleResult};
            // } catch (error) {
            //     oracle = error.message;
            // }

            // -------------------
            // Postgress
            // -------------------

            // let postgres;
            // try {
            //     // Custom query
            //     this._logService.debug("Postgres Query", this.postgresQuery);
            //     const postgresResult = await this._postgresService.query(this.postgresQuery);
            //     this._logService.debug("Postgres Results", postgresResult);
            //     // Get timestamp
            //     const postgresQuery = "SELECT CURRENT_TIMESTAMP AS timestamp";
            //     const [postgresTimestamp] = await this._postgresService.query(postgresQuery);
            //     // Get Postgress version
            //     const [postgresInfo] = await this._postgresService.query(`SELECT version()`);
            //     const postgresVersion = postgresInfo.version;
            //     // Compose Result
            //     postgres = {version: postgresVersion, timestamp: postgresTimestamp.timestamp, result: postgresResult};
            // } catch (error) {
            //     postgres = error.message;
            // }

            // -------------------
            // Redis
            // -------------------

            let redis;
            try {
                // Get timestamp
                this._logService.debug('Redis Cached endpoint', request.url);
                const redisResult = await this._redisService.getOrSetCache(
                    request.url,
                    () => {
                        return {
                            message:
                                'Next response will be cached for 10 second!!',
                            timestamp: new Date(),
                        };
                    }
                );
                // Get Redis version
                const redisInfo = await this._redisService.getInfo();
                // Compose Result
                redis = {
                    version: redisInfo['redis_version'],
                    result: redisResult,
                };
                this._logService.debug('Redis Results', redis);
            } catch (error) {
                redis = error.message;
            }

            return {
                // msSQL,
                mySQL,
                // oracle,
                // postgres,
                redis,
            };
        } catch (error) {
            throw new Error(error);
        }
    }
}
