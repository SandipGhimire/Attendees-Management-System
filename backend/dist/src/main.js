"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ["log", "error", "warn", "debug", "verbose"],
    });
    app.use((0, cookie_parser_1.default)());
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Api's List")
        .setDescription("All the available Aapi of the project")
        .setVersion("1.0")
        .addTag("api")
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("swagger", app, documentFactory);
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        exceptionFactory: (validationErrors = []) => {
            const errors = validationErrors.reduce((accumulator, error) => {
                const message = Object.values(error.constraints ?? {});
                return {
                    ...accumulator,
                    [error.property]: message,
                };
            }, {});
            return new common_1.BadRequestException({ error: errors });
        },
    }));
    const allowedOrigins = process.env.ALLOWED_ORIGIN?.split(",") || [];
    app.enableCors({
        origin: allowedOrigins,
        credentials: true,
    });
    await app.listen(process.env.PORT ?? 8000);
}
void bootstrap();
//# sourceMappingURL=main.js.map