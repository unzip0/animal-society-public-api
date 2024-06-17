export abstract class Uuid {
  private readonly VALID_UUID_V4 =
    /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

  public constructor(protected value: string) {
    this.validate(value);
  }

  private validate(value: string) {
    if (!this.VALID_UUID_V4.test(value)) {
      throw new Error('Invalid uuid');
    }
  }

  public getValue(): string {
    return this.value;
  }
}
