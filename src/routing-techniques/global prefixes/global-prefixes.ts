import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { Logger as NestLogger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const globalPrefix = 'api/v1';
    app.setGlobalPrefix(globalPrefix, { exclude: ['views/(.*)'] });
    await app.listen(3000);

    const port = process.env.PORT || 3000;
    await app.listen(port);
    NestLogger.log(
        `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
    );
}
bootstrap();
