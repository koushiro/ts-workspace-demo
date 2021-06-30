import { sum } from './index';

describe('Demo', (): void => {
  beforeAll(async () => {
    console.log('Hello');
  });

  it('Sum', (): void => {
    expect(sum([1, 2, 3])).toBe(6);
  });
});
