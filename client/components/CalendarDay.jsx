import React from 'react'

function CalendarDay({day, balance}) {
  return (
    <a href='' className='calendar-day'>
      <div className='day-name'>{day}</div>
      <div className='day-balance'>{balance}</div>
      <div class="day-total">+ 100.01</div>
    </a>
  )
}

export default CalendarDay