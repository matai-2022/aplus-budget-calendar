
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Add(props) {
  const navigate = useNavigate()
  const [form, setForm] = useState({day:'', transactionId : 4, description:'', amount: 0})

  function onFormChange(event){
   setForm({...form, [event.target.name]: event.target.value})
   console.log(form)
  }
  function onSubmit(event){
    event.preventDefault()

    props.setForm(form, event.target.day)
   
    navigate('/')
  }
  return (
    <>
    <h1 className="page-heading">Add an item</h1>
    <form action="" className="form">
      <div className='form-group'>
      <label htmlFor="description">Description</label>
      <input type="text" name="description" placeholder="Description of budget item"
      onChange={onFormChange}/>
      </div>

      <div className='form-group'>
      <label htmlFor="amount">Amount</label>
      <input type="number" name="amount" placeholder='0.00' onChange={onFormChange}/>
      </div>
      
      <div className='form-group'>
      <label htmlFor="day">Day</label>  
      <select name="day" onChange={onFormChange} >
        <option value="1">Monday</option>
        <option value="2">Tuesday</option>
        <option value="3">Wednesday</option>
        <option value="4">Thursday</option>
        <option value="5">Friday</option>
        <option value="6">Saturday</option>
        <option value="7">Sunday</option>
      </select>
      </div>

      <button onClick={onSubmit}>Add item</button>
    </form>
    </>
  )
}

export default Add
