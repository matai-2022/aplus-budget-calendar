function formatter(number) {
  let absNum = Math.abs(number)
  let sign
  if (number < 0) {
    sign = '-$'
  } else {
    sign = '$'
  }
  return sign + absNum
}

export default formatter
