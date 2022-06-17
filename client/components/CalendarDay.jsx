import React from 'react'
import {Link} from 'react-router-dom'

function CalendarDay({day, balance, total}) {
  return (
    <Link to='/detail/1' className='calendar-day'>
      <div className='day-name'>{day}</div>
      <div className='day-balance'>{balance}</div>
      <div className="day-total"> {total} </div>
    </Link>
  )
}

export default CalendarDay