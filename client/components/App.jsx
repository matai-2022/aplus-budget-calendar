import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Nav from './Nav'

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
      </Routes>
    </div>
    </>
  )
}

export default App
