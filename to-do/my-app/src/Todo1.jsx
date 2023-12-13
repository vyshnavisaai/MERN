import React, { useContext, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { nameContext, todoContext } from './App';
import { useNavigate } from 'react-router-dom';

import { IoMdAddCircle } from 'react-icons/io';
import { FaCircleXmark, FaCircleCheck } from 'react-icons/fa6';
import { AiFillDelete } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';
import { GrEdit } from 'react-icons/gr';
import './Todo.css';

function Todo1() {
  const [name, setname] = useContext(nameContext);
  const [TaskTodo, setTask] = useContext(todoContext);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const Navigate = useNavigate();

  const handleToggleDone = (index) => {
    setSelectedTasks((prevSelectedTasks) => {
      const updatedSelectedTasks = [...prevSelectedTasks];
      updatedSelectedTasks[index] = !updatedSelectedTasks[index];
      return updatedSelectedTasks;
    });
  };

  const handleDelete = (index) => {
    // Create a new array without the item to be deleted
    const updatedItems = TaskTodo.filter((item, i) => i !== index);

    // Update the state with the new list of items
    setTask(updatedItems);

    // Update the selectedTasks array accordingly
    setSelectedTasks((prevSelectedTasks) => {
      const updatedSelectedTasks = [...prevSelectedTasks];
      updatedSelectedTasks.splice(index, 1);
      return updatedSelectedTasks;
    });
  };

  return (
    <div id='body'>
      <br />
      <br />
      <center>
        <h2 id='name'>
          TrackEase <FaTasks />
        </h2>
      </center>
      <br />
      <h1 id='intro'>Hey, {name}</h1>
      <center>
        {TaskTodo.map((map, index) => (
          <div key={index} style={{ display: 'flex' }}>
            <h4
              id={selectedTasks[index] ? 'taask' : 'task'}
              onClick={() => handleToggleDone(index)}
            >
              {map.Task}{' '}
            </h4>
            <span id={selectedTasks[index] ? 'taask3' : 'task3'}>{map.Date}</span>
            <div id={selectedTasks[index] ? 'taask2' : 'task2'}>
              {selectedTasks[index] ? (
                <FaCircleCheck onClick={() => handleToggleDone(index)} />
              ) : (
                <FaCircleXmark onClick={() => handleToggleDone(index)} />
              )}
            </div>
            <div id={selectedTasks[index] ? 'taask2' : 'task2'}>
              <GrEdit onClick={() => Navigate(`/edit/${map.id}`)} />
            </div>
            <div id={selectedTasks[index] ? 'taask2' : 'task2'}>
              <AiFillDelete onClick={() => handleDelete(index)} />
            </div>
          </div>
        ))}
        <br />
        <IoMdAddCircle id='todoButton2' onClick={() => Navigate('/add')} />
      </center>
    </div>
  );
}

export default Todo1;
