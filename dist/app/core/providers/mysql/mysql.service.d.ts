export declare class MySQLService {
    private config;
    private pool;
    private readonly logger;
    constructor();
    query(query: any): Promise<any>;
    private initialiseDb;
}
