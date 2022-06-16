import React from 'react'

function CalendarDay({day, balance, total}) {
  return (
    <a href='' className='calendar-day'>
      <div className='day-name'>{day}</div>
      <div className='day-balance'>{balance}</div>
      <div className="day-total"> {total} </div>
    </a>
  )
}

export default CalendarDay