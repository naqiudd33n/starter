import { LogService } from 'app/core/providers/log/log.service';
export declare class ExampleController {
    private _logService;
    constructor(_logService: LogService);
    getHello(request: any, response: any, note: string): any;
    getHellor(request: any, response: any, note: string): any;
}
