const assert = chai.assert

describe(`difference`, () => {
  it(`input: [2, 1, 5], [2, 3] => [1, 5] `, () =>
    assert.deepEqual(difference([2, 1, 5], [2, 3]), [1, 5])
  );
});

describe(`groupBy`, () => {
  it(`input: [
    { gender: 'male', name: 'Max'}, 
    { gender: 'male', name: 'Fred'}, 
    { gender: 'female', name: 'Jane'}
  ], 'gender' => 
    {
      male: [{ gender: 'male', name: 'Max' }, { gender: 'male', name: 'Fred' }],
      female: [{ gender: 'female', name: 'Jane' }]
    }`,
    () => assert.deepEqual(groupBy([
      { gender: 'male', name: 'Max' },
      { gender: 'male', name: 'Fred' },
      { gender: 'female', name: 'Jane' }
    ], 'gender'),
      {
        male: [{ gender: 'male', name: 'Max' }, { gender: 'male', name: 'Fred' }],
        female: [{ gender: 'female', name: 'Jane' }]
      }
    )
  );
});

describe(`flatten`, () => {
  it(`input: [1, [2, [3, [4]], 5]] => [1, 2, [3, [4]], 5]`,
    () => assert.deepEqual(flatten([1, [2, [3, [4]], 5]]), [1, 2, [3, [4]], 5])
  );
  it(`input: [1, 2, 3, 4, 5] => [1, 2, 3, 4, 5]`,
    () => assert.deepEqual(flatten([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])
  );
  it(`input: [1, [2, 3], 4, 5] => [1, 2, 3, 4, 5]`,
    () => assert.deepEqual(flatten([1, [2, 3], 4, 5]), [1, 2, 3, 4, 5])
  );
});

describe(`uniq`, () => {
  it(`input: [2, 1, 2] => [2, 1]`,
    () => assert.deepEqual(uniq([2, 1, 2]), [2, 1])
  );
});

describe(`chunk`, () => {
  it(`input: ['a', 'b', 'c', 'd'], 2 => [['a', 'b'], ['c', 'd']]`,
    () => assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']])
  );
  it(`input: ['a', 'b', 'c', 'd'], 3 => [['a', 'b', 'c'], ['d']]`,
    () => assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 3), [['a', 'b', 'c'], ['d']])
  );
  it(`input: ['a', 'b', 'c', 'd'], 4 => [['a', 'b', 'c', 'd']]`,
    () => assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 4), [['a', 'b', 'c', 'd']])
  );
  it(`input: ['a', 'b', 'c', 'd'], 5 => [['a', 'b', 'c', 'd']]`,
    () => assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 5), [['a', 'b', 'c', 'd']])
  );
  it(`input: ['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3 => [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]`,
    () => assert.deepEqual(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3), [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']])
  );
  it(`input: ['a', 'b', 'c', 'd', 'e', 'f', 'g'], 0 => []`,
    () => assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 0), [])
  );
  it(`input: ['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1 => [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g']]`,
    () => assert.deepEqual(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1), [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g']])
  );
});