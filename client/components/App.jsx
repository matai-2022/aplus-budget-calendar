import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HeaderNav from './HeaderNav'
import Calendar from './Calendar'
import Detail from './Detail'
import Add from './Add'
import Edit from './Edit'

function App() {
  return (
    <>
      <HeaderNav />
      <div className="contents">
        <Routes>
          <Route path="/" element={<Calendar />} />
          {/* PROPS: 'balance' from yesterday, 'transactions' & day's running 'balance'  */}
          <Route path="/detail/:id" element={<Detail />} />
          {/* Changed add path from '/detail/:id/add' to '/add' because it doesn't make sense when accessing from HeaderNav*/}
          <Route path="/add" element={<Add />} />
          <Route path="/detail/:id/edit" element={<Edit />} />
        </Routes>
      </div>
      <div className="footer">&copy; Team Ponyo 2022</div>
    </>
  )
}

export default App
