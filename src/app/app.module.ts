import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { appRoutes } from 'app/app.routes';

// import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        // Config modules
        // ConfigModule.forRoot({expandVariables: true}),
        // ThrottlerModule.forRoot({ throttlers: throttlerConfig}),

        // Custom modules
        // HelloModule,
        // DatabaseModule,

        // Router modules0
        RouterModule.register(appRoutes),
    ],
    providers: [
        // CoreService
    ],
})
export class AppModule {}
