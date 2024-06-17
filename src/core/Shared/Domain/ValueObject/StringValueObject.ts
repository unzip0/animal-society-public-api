export abstract class StringValueObject {
  public constructor(protected value: string) {}

  public getValue(): string {
    return this.value;
  }
}
