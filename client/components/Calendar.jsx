import React from 'react'
import sumDaily from '../sumDaily'
import CalendarDay from './CalendarDay'
import budget from '../../data/budget'
import formatter from '../formatter'


let initialBalance = 500



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
    <div className='start-balance'>Starting balance: ${initialBalance.toFixed(2)}</div>
    <div className='calendar'>
      <CalendarDay day='Monday' balance= {formatter(findTrans(1).balance)} total= {formatter(findTrans(1).total)} />
      <CalendarDay day='Tuesday' balance={formatter(findTrans(2).balance)} total= {formatter(findTrans(2).total)}/>
      <CalendarDay day='Wednesday' balance={formatter(findTrans(3).balance)} total= {formatter(findTrans(3).total)}/>
      <CalendarDay day='Thursday' balance={formatter(findTrans(4).balance)} total= {formatter(findTrans(4).total)}/>
      <CalendarDay day='Friday' balance={formatter(findTrans(5).balance)} total= {formatter(findTrans(5).total)}/>
      <CalendarDay day='Saturday' balance={formatter(findTrans(6).balance)} total= {formatter(findTrans(6).total)}/>
      <CalendarDay day='Sunday' balance={formatter(findTrans(7).balance)} total= {formatter(findTrans(7).total)}/>
    </div>
    </>
  )
}


export default Calendar