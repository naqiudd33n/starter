import { OnApplicationBootstrap } from '@nestjs/common';
export declare class CoreService implements OnApplicationBootstrap {
    private readonly logger;
    constructor();
    onApplicationBootstrap(): void;
    private ensureStorage;
}
