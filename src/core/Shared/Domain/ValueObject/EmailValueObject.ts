import { StringValueObject } from './StringValueObject';

export class EmailValueObject extends StringValueObject {
  private readonly VALID_EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  constructor(value: string) {
    super(value);
    if (!this.isValidEmail(value)) {
      throw new Error('Invalid email');
    }
  }

  private isValidEmail(email: string) {
    return this.VALID_EMAIL_REGEX.test(email);
  }
}
