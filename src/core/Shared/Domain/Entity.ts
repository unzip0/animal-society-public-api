import { EventBase } from '@domain/Bus/Event/DomainEvent';
import { SimpleUuid } from '@domain/ValueObject/SimpleUuid';

export abstract class Entity<T> {
  id: SimpleUuid;
  private events: EventBase[] = [];

  abstract equalsTo(entity: T): boolean;

  record(event: EventBase) {
    this.events.push(event);
  }

  pullEvents() {
    const domainEvents = this.events.slice();
    this.events = [];
    return domainEvents;
  }
}
