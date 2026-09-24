import { ArgumentsHost, BadRequestException, Catch } from '@nestjs/common';
import { BaseExceptionFilter, NestFactory } from '@nestjs/core';
import { Error as MongooseError } from 'mongoose';
import { AppModule } from './app.module';
import { memoryServer } from './database.config';

// Bad client input rejected by a schema (enum, required, cast) is a 400, not a 500.
@Catch(MongooseError.ValidationError, MongooseError.CastError)
class MongooseInputFilter extends BaseExceptionFilter {
  catch(err: Error, host: ArgumentsHost) {
    super.catch(new BadRequestException(err.message), host);
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new MongooseInputFilter(app.getHttpAdapter()));

  const stop = async () => {
    await memoryServer?.stop();
    process.exit(0);
  };
  process.on('SIGINT', stop);
  process.on('SIGTERM', stop);

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`Mini Browser API running on http://localhost:${port}/api`);
}

bootstrap();
