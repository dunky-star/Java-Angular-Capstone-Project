import { Customer } from "./User";

describe('User', () => {
  it('should create an instance', () => {
    expect(new Customer()).toBeTruthy();
  });
});
