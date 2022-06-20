import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DayName = styled.div`
  flex: 0 0 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f48fb1;
  font-size: 16px;
`

const DayBalance = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`

const DayTotal = styled.div`
  flex: 0 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

function CalendarDay({ id, day, balance, total }) {
  return (
    <Link to={`/detail/${id}`} className="calendar-day">
      <DayName>{day}</DayName>
      <DayBalance>{balance}</DayBalance>
      <DayTotal>{total}</DayTotal>
    </Link>
  )
}

export default CalendarDay
