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
        </Routes>
      </div>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/detail/:id/add" element={<Add />} />
        <Route path="/detail/:id/edit" element={<Edit />} />
      </Routes>
      <div className="footer">&copy; Team Ponyo 2022</div>
    </>
  )
}

export default App
