import { sum } from './index';

describe('Demo', (): void => {
  beforeAll(async () => {
    console.log('before');
  });

  it('Sum', (): void => {
    expect(sum([1, 2, 3])).toBe(6);
  });
});
