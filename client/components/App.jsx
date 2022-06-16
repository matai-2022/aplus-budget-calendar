import React from 'react'
import {Routes, Route} from 'react-router-dom'

import HeaderNav from './HeaderNav'
import Calendar from './Calendar'

function App() {
  return (
    <>
    <HeaderNav />
    <div className='contents'>
    <Routes>
      <Route path='/' element={<Calendar />} />
    </Routes>
    </div>
    <div className='footer'>&copy; Team Ponyo 2022</div>
    </>
  )
}

export default App
