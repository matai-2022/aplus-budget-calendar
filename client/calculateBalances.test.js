import calculateBalances from './calculateBalances'

test('calculateBalances should return an array with the cumulative balances', () => {
  const initialBalance = 5
  const dailyTotals = [10, 20, 5, 40]

  const expected = [15, 35, 40, 80]
  const actual = calculateBalances(initialBalance, dailyTotals)
  expect(actual).toEqual(expected)
})
