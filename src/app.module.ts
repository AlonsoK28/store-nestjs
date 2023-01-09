import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './store/store.module';
import { IdGeneratorService } from './id-generator/id-generator.service';

@Module({
  imports: [StoreModule],
  controllers: [AppController],
  providers: [AppService, IdGeneratorService],
})
export class AppModule {}
