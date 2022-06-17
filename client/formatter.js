import React from 'react'

function formatter(number) {
  let absNum = Math.abs(number)
  let sign
  if (number < 0) {
    sign = '-$'
    return <p className="in-the-red">{sign + absNum.toFixed(2)}</p>
  } else {
    sign = '$'
    return <p className="in-the-green">{sign + absNum.toFixed(2)}</p>
  }
}

export default formatter
