"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app/app.module");
const fs_extra_1 = require("fs-extra");
async function bootstrapApplication() {
    if (!(0, fs_extra_1.existsSync)('.env')) {
        const error = 'The .env file is missing. Please make sure it exists.';
        common_1.Logger.error(error, 'MainApplication');
        throw new Error(error);
    }
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const SERVER_PORT = process.env.SERVER_PORT || 3000;
    const SERVER_ADDRESS = process.env.SERVER_ADDRESS || '127.0.0.1';
    if (process.env.SERVER_CONTEXT) {
        app.setGlobalPrefix(process.env.SERVER_CONTEXT);
    }
    app.enableCors();
    if (process.env.ENABLE_DEBUGGING !== 'true') {
        app.useLogger(false);
    }
    if (process.env.SWAGGER_ENABLED === 'true') {
        const config = new swagger_1.DocumentBuilder()
            .setTitle(process.env.SWAGGER_TITLE)
            .setDescription(process.env.SWAGGER_DESCRIPTION)
            .setVersion(process.env.SWAGGER_VERSION)
            .addSecurity('oauth2', { type: 'http', scheme: 'bearer' })
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        const context = process.env.SERVER_CONTEXT
            ? process.env.SERVER_CONTEXT + '/swagger'
            : 'swagger';
        swagger_1.SwaggerModule.setup(context, app, document);
        common_1.Logger.log(`Swagger configured on http://localhost:3000/${context}`, 'MainApplication');
    }
    await app.listen(SERVER_PORT, SERVER_ADDRESS, () => {
        common_1.Logger.log(`NestJS app is running on http://${SERVER_ADDRESS}:${SERVER_PORT}`, 'MainApplication');
    });
}
bootstrapApplication().catch(() => {
    process.exit(1);
});
//# sourceMappingURL=main.js.map