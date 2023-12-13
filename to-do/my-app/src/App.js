import logo from './logo.svg';
import './App.css';
import Todo1 from './Todo1';
import HompageTodo from './HompageTodo';
import taskDetails from './Tasks';
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './Add';
import TodoEdit from './TodoEdit';

export const todoContext=createContext()
export const nameContext=createContext()


function App() {
  const [TaskTodo, setTask] = useState([])
  console.log(TaskTodo);
  const [name, setname] = useState('')

  return (
    <div className="App">
      <todoContext.Provider value={[TaskTodo,setTask]}><nameContext.Provider value={[name,setname]}>
        <BrowserRouter>
        <Routes>

       <Route path='/' element={<HompageTodo/>}/>
       
       <Route path='/add' element={<Add/>}/>
       
       <Route path='/main' element={<Todo1/>}/>

       <Route path='/edit/:id' element={<TodoEdit/>}/>

       
      </Routes>
      </BrowserRouter>
      </nameContext.Provider>
      </todoContext.Provider>

    </div>
  );
}

export default App;
