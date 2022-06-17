import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import HeaderNav from './HeaderNav'
import Calendar from './Calendar'
import Detail from './Detail'
import Add from './Add'
import Edit from './Edit'

import budget from '../../data/budget'

function App() {
  // looking at whole budget object because may need to compare id's to find the day's info
  const [budget1, setBudget] = useState(budget)

  function findTrans (num, obj) {
    return (
   obj.find(item => item.id === num))
  
  }

  function setForm(newItem, day){
   
   const tempBudget =[...budget1]
   let tempDay = findTrans(Number(day),tempBudget)
   console.log(tempDay)
   tempDay.transactions = [...day.transactions, newItem]
  setBudget(tempBudget)
   
  }

  return (
    <>
      <HeaderNav />
      <div className="contents">
        <Routes>
          <Route path="/" element={<Calendar />} />
          {/* PROPS: budget  */}
          <Route path="/detail/:id" element={<Detail budget={budget1} />} />
          {/* Changed add path from '/detail/:id/add' to '/add' because it doesn't make sense when accessing from HeaderNav*/}
          <Route path="/add" element={<Add setForm={setForm}/>} />
          <Route path="/detail/:id/edit" element={<Edit />} />
        </Routes>
      </div>
      <div className="footer">&copy; Team Ponyo 2022</div>
    </>
  )
}

export default App
