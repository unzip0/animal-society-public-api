export abstract class IntValueObject {
  public constructor(protected value: number) {}

  public getValue(): number {
    return this.value;
  }
}
