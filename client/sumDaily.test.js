import sumDaily from './sumDaily'

test('sumDaily should return the sum of an array of items', () => {
  const items = [{ amount: 1 }, { amount: 2 }, { amount: 3 }]

  const expected = 6
  const actual = sumDaily(items)
  expect(actual).toBe(expected)
})
