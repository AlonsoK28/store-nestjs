import { Module } from '@nestjs/common';

// controllers
import { AppController } from './app.controller';

// services
import { AppService } from './app.service';
import { IdGeneratorService } from './services/id-generator/id-generator.service';

// modules
import { StoreModule } from './store/store.module';
import { SeedModule } from './seed/seed.module';

// config
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // config based on docs https://docs.nestjs.com/techniques/configuration
    ConfigModule.forRoot(),
    StoreModule, 
    SeedModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService, 
    IdGeneratorService
  ],
})
export class AppModule {}
