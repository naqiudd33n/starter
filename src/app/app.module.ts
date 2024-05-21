import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { appRoutes } from 'app/app.routes';
import { CoreService } from './core/core.service';
import { ExampleModule } from './modules/example/example.module';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { throttlerConfig } from './config/throttler.config';

@Module({
    imports: [
        // Config modules
        ConfigModule.forRoot({ expandVariables: true }),
        ThrottlerModule.forRoot({ throttlers: throttlerConfig }),

        // Custom modules
        ExampleModule,
        // DatabaseModule,

        // Router modules0
        RouterModule.register(appRoutes),
    ],
    providers: [CoreService],
})
export class AppModule {}
