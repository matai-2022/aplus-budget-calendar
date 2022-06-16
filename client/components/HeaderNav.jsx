import React from 'react'
import { Link } from 'react-router-dom'

function HeaderNav() {
  return (
    <div className="header-row">
      <span className="title">A+ Budget Calendar</span>
      <div className="spacer"></div>
      <nav className="navigation">
        <Link to="/" className="navigation-link">
          Calendar view
        </Link>
        {/* Changed add path from '/detail/:id/add' to '/add' because it doesn't make sense when accessing from HeaderNav*/}
        <Link to="/add" className="navigation-link">
          Add budget item
        </Link>
      </nav>
    </div>
  )
}

export default HeaderNav
