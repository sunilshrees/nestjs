import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nestjs TypeOrm')
    .setDescription('For learning purposes')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/v1/docs', app, document);

  await app.listen(parseInt(process.env.APP_PORT) || 3001);
}
bootstrap()
  .then(() => {
    console.log(`Server running on http://localhost:3001/`);
    console.log(
      `For API documentation on http://localhost:3001/api/v1/docs`,
    );
  })
  .catch((error) => {
    console.log('Error: ', error.measure || error || error.message);
  }); 