import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { StoreModule } from 'src/store/store.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [StoreModule],
})
export class SeedModule {}
