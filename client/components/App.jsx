import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Calendar from './Calendar'
import Detail from './Detail'
import Add from './Add'
import Edit from './Edit'

function App() {
  return (
    <>
      <div className="title">
        <h1>A+ Budget Calendar</h1>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <Nav />
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/detail/:id/add" element={<Add />} />
          <Route path="/detail/:id/edit" element={<Edit />} />
        </Routes>
      </div>
    </>
  )
}

export default App
