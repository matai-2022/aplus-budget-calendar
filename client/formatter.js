function formatter(number) {
  let absNum = Math.abs(number)
  let sign
  if (number < 0) {
    sign = '-$'
  } else {
    sign = '$'
  }
  return sign + absNum.toFixed(2)
}

export default formatter
