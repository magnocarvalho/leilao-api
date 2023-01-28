import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1', { exclude: ['docs'] });
  const config = new DocumentBuilder()
    .setTitle('Leilão API')
    .setDescription('The Leilão API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(4000).then(() => {
    console.log('Server started on port http://localhost:4000/docs');
  });
}
bootstrap();
