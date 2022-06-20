import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Styled components

const CalendarDayWrapper = styled(Link)`
  flex: 1 0 100px;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  margin: 0 5px;
  background-color: #fff;
  &:hover {
    box-shadow: 
    0 2px 2px 0 rgba(0,0,0,.14),
    0 3px 1px -2px rgba(0,0,0,.2),
    0 1px 5px 0 rgba(0,0,0,.12);
  }
`
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
// Main component

function CalendarDay({ id, day, balance, total }) {
  return (
    <CalendarDayWrapper to={`/detail/${id}`}>
      <DayName>{day}</DayName>
      <DayBalance>{balance}</DayBalance>
      <DayTotal>{total}</DayTotal>
    </CalendarDayWrapper>
  )
}

export default CalendarDay
