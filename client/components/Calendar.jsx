import React from 'react'
import sumDaily from '../sumDaily'
import CalendarDay from './CalendarDay'
import budget from '../../data/budget'

const initialBalance = 500

function Calendar() {
  function findTrans (Num) {
    return (
    budget.find(item => item.id === Num))
  
  }
  
  function calcBalance(initialBalance, budget) {
    budget[0].total=sumDaily(budget[0].transactions)
    budget[0].balance=initialBalance+budget[0].total
    for (let i = 1; i < budget.length; i++) {
      budget[i].total = sumDaily(budget[i].transactions)
      budget[i].balance = budget[i-1].balance + budget[i].total
  }
}
  calcBalance(initialBalance, budget)
  
  console.log (findTrans (1))
  return (
    <>
    <div className='start-balance'>Starting balance: ${initialBalance}</div>
    <div className='calendar'>
      <CalendarDay day='Monday' balance= {findTrans(1).balance} total= {findTrans(1).total}/>
      <CalendarDay day='Tuesday' balance={findTrans(2).balance} total= {findTrans(2).total}/>
      <CalendarDay day='Wednesday' balance={findTrans(3).balance} total= {findTrans(3).total}/>
      <CalendarDay day='Thursday' balance={findTrans(4).balance} total= {findTrans(4).total}/>
      <CalendarDay day='Friday' balance={findTrans(5).balance} total= {findTrans(5).total}/>
      <CalendarDay day='Saturday' balance={findTrans(6).balance} total= {findTrans(6).total}/>
      <CalendarDay day='Sunday' balance={findTrans(7).balance} total= {findTrans(7).total}/>
    </div>
    </>
  )
}


export default Calendar