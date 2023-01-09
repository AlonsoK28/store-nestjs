import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

// services
import { IdGeneratorService } from 'src/id-generator/id-generator.service';

// dtos
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

// entities
import { Store } from './entities/store.entity';

@Injectable()
export class StoreService {
  constructor(private readonly idGeneratorService: IdGeneratorService) {}

  private stores: Store[] = [
    {
      id: 1,
      // category: 'Clothes',
      name: 'adidas clothes méxico',
      // country: 'México',
      createdAt: Date.now(),
    },
    {
      id: 2,
      // category: 'Clothes',
      name: 'sterilite méxico',
      // country: 'México',
      createdAt: Date.now(),
    },
    {
      id: 3,
      // category: 'Clothes',
      name: 'amasón méxico',
      // country: 'México',
      createdAt: Date.now(),
    },
    {
      id: 4,
      // category: 'Clothes',
      name: 'apple méxico',
      // country: 'México',
      createdAt: Date.now(),
    },
  ];

  create(createStoreDto: CreateStoreDto) {
    // move this to service
    const getStoreId = this.idGeneratorService.generateId();
    const store: Store = {
      id: getStoreId,
      name: createStoreDto.name.toLowerCase(),
      createdAt: new Date().getTime(),
    };

    this.stores.push(store);

    return store;
  }

  findAll() {
    return this.stores;
  }

  findOne(id: string) {
    const result = this.stores.find((el) => el.id.toString() === id);
    if (!result) {
      throw new NotFoundException(`Store with id: ${id} was not found`);
    } else {
      return result;
    }
  }

  update(id: string, updateStoreDto: UpdateStoreDto) {
    let currentStore = this.findOne(id);

    this.stores = this.stores.map((el) => {
      if (el.id.toString() === id) {
        currentStore.updatedAt = new Date().getTime();
        currentStore = { ...currentStore, ...updateStoreDto };
        return currentStore;
      }
      return el;
    });

    return currentStore;
  }

  remove(id: string) {
    // validate if id exists
    this.findOne(id);
    if (this.stores.length === 1) {
      throw new BadRequestException(
        'Should exist at least one registry into stores catalog',
      );
    } else {
      this.stores = this.stores.filter((el) => el.id.toString() !== id);
    }
  }
}
