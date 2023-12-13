import React, { useContext, useEffect, useState } from 'react'
import { FaTasks } from "react-icons/fa";
import './Todo.css'
import { useNavigate, useParams } from 'react-router-dom';
import { todoContext } from './App';
import { Button } from 'react-bootstrap';

function TodoEdit() {
  const [TaskTodo,setTask] = useContext(todoContext)
  const navigate = useNavigate();
  const { id } = useParams();
  const [editedData, setEditedData] = useState({
    Task:"",
    Date:""
  })

  useEffect(() => {
  const ToEdit = TaskTodo.find((task) => task.id === id);

    if (ToEdit) {
      setEditedData({
        Task: ToEdit.Task,
        Date: ToEdit.Date,
      });
  }
},[TaskTodo, id]);

const handleEdit = (e) => {
  setEditedData({
    ...editedData,
    [e.target.name]: e.target.value,
  });
};

// const handleEdit2 = () => {
//   // Updating
//   const updatedData = TaskTodo.map((task) =>
//     task.id === id ? { ...task, ...editedData } : task
//   );

//   setTask(updatedData);
//   navigate("/main");
// };

const handleEdit2 = () => {
  // Updating
  const updatedData = TaskTodo.map((task) =>
    task.id === id ? { ...task, ...editedData } : task
  );

  setTask(updatedData);
  navigate("/main");
};

  return (
    <div id='body'>
      <center>
        <br /><br />
        <h2 id='name'>TrackEase <FaTasks /></h2>
        </center>
        <center>
        <div id='main2'>
        <table>
          <tr>
            <td>Name your task :</td>
            <td><input type="text" onChange={handleEdit} value={editedData.Task} name='Task' /></td>
          </tr>
          <br />
          <tr>
            <td>Date :</td>
            <td><input type="text" onChange={handleEdit} value={editedData.Date} name='Date' /></td>
          </tr>
        </table>
        <br /><br />
        <Button id='todoButton' type='submit' onClick={handleEdit2}>DONE</Button>
        </div>
       
          </center>
    </div>
  )
}

export default TodoEdit