import { MongooseModule } from '@nestjs/mongoose';

export const DBModule = MongooseModule.forRoot(
  'mongodb+srv://edisonjpp:admin@cluster0.1tvig.mongodb.net/nestjs_demo?retryWrites=true&w=majority',
);
