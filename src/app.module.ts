import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './store/store.module';

@Module({
  imports: [StoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
