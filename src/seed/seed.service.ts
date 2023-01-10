import { Injectable } from '@nestjs/common';

// services
import { StoreService } from 'src/store/store.service';

// data
import { ExampleStoresSeed } from './data/example-stores.seed';

@Injectable()
export class SeedService {
  constructor(private readonly storeService: StoreService) {}

  populateWithExampleData() {
    this.storeService.fillStoresWithSeedData(ExampleStoresSeed);
    return {
      ok: true,
      message: "seed executed"
    };
  }
}
