import { Uuid } from './Uuid';
import { v4 as uuidv4 } from 'uuid';

export class SimpleUuid extends Uuid {
  constructor(value: string) {
    super(value);
  }

  static generate() {
    return new SimpleUuid(uuidv4());
  }
}
