import React from 'react'
import sumDaily from '../sumDaily'

import CalendarDay from './CalendarDay'

function Calendar() {
  return (
    <>
    <div className='start-balance'>Starting balance: $0.00</div>
    <div className='calendar'>
      <CalendarDay day='Monday' balance='$100.50'/>
      <CalendarDay day='Tuesday' balance='-$300.20'/>
      <CalendarDay day='Wednesday' balance='-$250.00'/>
      <CalendarDay day='Thursday' balance='$100.00'/>
      <CalendarDay day='Friday' balance='$0.00'/>
      <CalendarDay day='Saturday' balance='$5.00'/>
      <CalendarDay day='Sunday' balance='$20.00'/>
    </div>
    </>
  )
}

export default Calendar