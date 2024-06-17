import { SimpleUuid } from '@domain/ValueObject/SimpleUuid';

export abstract class AggregateRoot<T> {
  id: SimpleUuid;

  abstract equalsTo(other: T): boolean;
}
