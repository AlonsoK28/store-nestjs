import { Module } from '@nestjs/common';

// controllers
import { StoreController } from './store.controller';

// services
import { StoreService } from './store.service';
import { IdGeneratorService } from 'src/services/id-generator/id-generator.service';

@Module({
  controllers: [StoreController],
  providers: [StoreService, IdGeneratorService],
  exports: [StoreService],
})
export class StoreModule {}
