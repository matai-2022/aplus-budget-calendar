function sumDaily(items) {
  return items.reduce((sum, item) => sum + item.amount, 0)
}

export default sumDaily