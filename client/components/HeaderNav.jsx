import React from 'react'

function HeaderNav() {
  return (
    <div className='header-row'>
      <span className='title'>A+ Budget Calendar</span>
      <div className='spacer'></div>
      <nav className='navigation'>
        <a className='navigation-link' href=''>Calendar view</a>
        <a className='navigation-link' href=''>Add budget item</a>
      </nav>
    </div>
  )
}

export default HeaderNav
