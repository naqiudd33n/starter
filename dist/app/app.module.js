"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_routes_1 = require("./app.routes");
const core_service_1 = require("./core/core.service");
const example_module_1 = require("./modules/example/example.module");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const throttler_config_1 = require("./config/throttler.config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ expandVariables: true }),
            throttler_1.ThrottlerModule.forRoot({ throttlers: throttler_config_1.throttlerConfig }),
            example_module_1.ExampleModule,
            core_1.RouterModule.register(app_routes_1.appRoutes),
        ],
        providers: [core_service_1.CoreService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map