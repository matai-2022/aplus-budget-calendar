
import React from 'react'

function Add() {
  return (
    <>
    <h1 className="page-heading">Add an item</h1>
    <form action="" className="form">
      <label htmlFor="description">Description</label>
      <input type="text" name="description" placeholder="Description of budget item"/>

      <label htmlFor="amount">Amount</label>
      <input type="number" name="amount"/>
      <select name="day">
        <option value="1">Monday</option>
        <option value="2">Tuesday</option>
        <option value="3">Wednesday</option>
        <option value="4">Thursday</option>
        <option value="5">Friday</option>
        <option value="6">Saturday</option>
        <option value="7">Sunday</option>
      </select>

      <button>Add item</button>
    </form>
    </>
  )
}

export default Add
