import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import swagger from './resources/lib/swagger';

(async () => {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api');
  app.enableCors();

  swagger(app);

  await app.listen(5000);
})();
