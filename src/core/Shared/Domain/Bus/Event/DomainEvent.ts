import { SimpleUuid } from '@domain/ValueObject/SimpleUuid';

export type EventName = string;

export abstract class EventBase {
  constructor(
    readonly eventId: string,
    readonly ocurredOn: Date,
  ) {}

  abstract getName(): EventName;
}

export abstract class DomainEvent<T> extends EventBase {
  constructor(private readonly data: T) {
    super(SimpleUuid.generate().getValue(), new Date());
  }

  getData(): T {
    return this.data;
  }
}
