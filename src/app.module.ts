import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './store/store.module';
import { IdGeneratorService } from './services/id-generator/id-generator.service';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [StoreModule, SeedModule],
  controllers: [AppController],
  providers: [AppService, IdGeneratorService],
})
export class AppModule {}
