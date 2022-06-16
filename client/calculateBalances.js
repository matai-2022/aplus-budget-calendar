function calculateBalances(initialBalance, dailyTotals) {
  dailyTotals[0] += initialBalance
  return dailyTotals.reduce((prev, dailyTotal) => {
    const balance = (prev[prev.length - 1] || 0) + dailyTotal
    return [...prev, balance]
  }, [])
}

export default calculateBalances
