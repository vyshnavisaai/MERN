import React, { createContext, useContext, useState } from 'react'
import { nameContext, todoContext } from './App'
import { Button } from 'react-bootstrap';
import { Route, useNavigate } from 'react-router-dom'
import Todo1 from './Todo1';
import './Todo.css'
import { FaTasks } from "react-icons/fa";


function HompageTodo() {
    const [name,setname] = useContext(nameContext)
    const [TaskTodo,setTask] = useContext(todoContext)
    const navigate = useNavigate();


    const HandleChange=(e)=>{
    setname(e.target.value );
    console.log(name);
    }

    const handleSubmit=(e)=>{
        // e.preventDefault();
        // const NewTodo=[...TaskTodo,TodoTask]
        // setTask(NewTodo)
        // console.log(TaskTodo);    
        navigate("/main")
    }
  return (
    <div id='body'>
      <center>
        <br /><br />
        <h2 id='name'>TrackEase <FaTasks />
</h2>
        <div id='main'>
            <p id='question'>Hey,<br />
            Your name please ?</p>
            
            <input id='username' placeholder='Type here !' type="text" name='Name' onChange={HandleChange} value={name} /><br /><br />

            <Button id='todoButton' type="submit" onClick={(e)=>handleSubmit(e)}>Done</Button>

        </div>
        </center>
    </div>
  )
}

export default HompageTodo