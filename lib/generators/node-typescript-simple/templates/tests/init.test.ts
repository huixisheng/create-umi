import { sum } from '../src/index';

describe('simple', function () {

  beforeEach(() => {
  });

  afterEach(() => {
  });

  test('1 + 1 = 2', function () {
    expect(sum(1, 1)).toEqual(2);
  });
});