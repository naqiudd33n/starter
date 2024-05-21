import { Module } from '@nestjs/common';
import { LogServiceModule } from 'app/core/providers/log/log.module';
import { ExampleController } from 'app/modules/example/example.controller';

@Module({
    imports: [LogServiceModule],
    controllers: [ExampleController],
})
export class ExampleModule {}
