import React, { useContext, useState } from 'react'
import { todoContext } from './App'
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaTasks } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';



function Add() {
  const [TaskTodo,setTask] = useContext(todoContext)
  // console.log(TaskTodo);
  const [TodoTask, setTodo] = useState({
    Task:"",
    Date:"",
    id: uuidv4()
})
console.log(TodoTask);

const navigate=useNavigate()

const HandleChange=(e)=>{
  setTodo({ ...TodoTask, [e.target.name]: e.target.value });
    console.log(TodoTask);
}

const HandleAdd=(e)=>{
  e.preventDefault();
        const NewTodo=[...TaskTodo,TodoTask]
        setTask(NewTodo)
        console.log(TaskTodo);    
        navigate("/main")
}

  return (
    <div id='body'>
      <br /><br />
              <center><h2 id='name'>TrackEase <FaTasks />
</h2></center><br />

        <center>
        <div id='main2'>
        <table>
          <tr>
            <td>Name your task :</td>
            <td><input type="text" onChange={HandleChange} value={TodoTask.Task} name='Task' /></td>
          </tr>
          <br />
          <tr>
            <td>Date :</td>
            <td><input type="date" style={{width:198}} onChange={HandleChange} value={TodoTask.Date} name='Date' /></td>
          </tr>
        </table>
        <br /><br />
        <Button id='todoButton' type='submit' onClick={(e)=>HandleAdd(e)}>ADD</Button>
        </div>
       
          </center>
    </div>
  )
}

export default Add