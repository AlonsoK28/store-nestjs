import { Injectable } from '@nestjs/common';

@Injectable()
export class IdGeneratorService {
  generateId(): number {
    const id = Math.floor(Math.random() * (303 - 1 + 1) + 1);
    return id;
  }
}
