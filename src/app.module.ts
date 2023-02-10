import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListsModule } from './lists/lists.module'; 
import { List } from './lists/entities/list.entity';

@Module({
  imports: [
    ListsModule,
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: ":memory:",
      autoLoadModels: true,
      models: [List],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
