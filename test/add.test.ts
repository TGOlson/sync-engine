import { add } from '../src/add';

describe('add', () => {
  test('1 + 2 = 3', () => {
    expect(add(1, 2)).toBe(3);
  });
});