import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

// data
import { ExampleStoresSeed } from 'src/seed/data/example-stores.seed';

// services
import { IdGeneratorService } from 'src/services/id-generator/id-generator.service';

// dtos
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

// entities
import { Store } from './entities/store.entity';

@Injectable()
export class StoreService {
  constructor(private readonly idGeneratorService: IdGeneratorService) {}

  private stores: Store[] = ExampleStoresSeed;

  create(createStoreDto: CreateStoreDto): Store {
    const currentName = createStoreDto.name.toLowerCase();
    const alreadyExist = this.stores.some(
      (el) => el.name.toLowerCase() === currentName,
    );

    if (alreadyExist)
      throw new BadRequestException(
        `Store with name '${currentName}' already exist`,
      );

    const getStoreId = this.idGeneratorService.generateId();
    const store: Store = {
      id: getStoreId,
      name: currentName,
      createdAt: new Date().getTime(),
    };

    this.stores.push(store);

    return store;
  }

  findAll() {
    return this.stores;
  }

  findOne(id: string): Store {
    const result = this.stores.find((el) => el.id.toString() === id);
    if (!result) {
      throw new NotFoundException(`Store with id '${id}' was not found`);
    } else {
      return result;
    }
  }

  findManyByName(term: string): Store[] {
    const result = this.stores.filter((el) => {
      return el.name.includes(term.toLowerCase().trim());
    });
    if (result.length < 1) {
      throw new NotFoundException(`Stores with term '${term}' was not found`);
    } else {
      return result;
    }
  }

  update(id: string, updateStoreDto: UpdateStoreDto): Store {
    const currentName = updateStoreDto.name.toLowerCase();
    let currentStore = this.findOne(id);

    const alreadyExist = this.stores.some((el) => {
      el.name.toLowerCase() === currentName;
    });

    if (alreadyExist)
      throw new BadRequestException(
        `Store with name '${currentName}' already exist`,
      );

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

  fillStoresWithSeedData(stores: Store[]) {
    this.stores = stores;
  }

  createStoresByBulk(createStoreDto: CreateStoreDto[]) {
    createStoreDto.forEach((el) => {
      const currentName = el.name.toLowerCase();
      const alreadyExistStoreName = this.stores.some((el) => {
        return el.name.toLowerCase() == currentName;
      });

      if (alreadyExistStoreName)
        throw new BadRequestException(
          `Store with name '${currentName}' already exist`,
        );
    });

    createStoreDto.forEach((el) => {
      this.create(el);
    });

    return {
      ok: true,
      message: `added ${createStoreDto.length} stores sucessfully`,
    };
  }
}
