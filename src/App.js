import logo from './logo.svg';
import './App.css';
import Heder from './MyComponent/Heder';
import Todo from './MyComponent/Todo';
import Footer from'./MyComponent/Footer';
import { Todos } from './MyComponent/Todos';
import React, { useState } from 'react';
import { AddTodo } from './MyComponent/AddTodo';

function App() {

  const onDelete=(todo)=>{

    console.log("delete",todo)
    setTodos(todos.filter((e)=>{
      return e!=todo;
    }))
  }


   let [todos,setTodos]=useState([

    {
      sno:1,
      title : 'this is first title',
      desc : 'this is description of first'
    },
    
    {
      sno:2,
      title : 'this is second title',
      desc : 'this is description of second'
    },
    
    {
      sno:3,
      title : 'this is second title',
      desc : 'this is description of third'
    }
   ])
  return (

    <><Heder title='Listed' searchBar={true}/>
    <AddTodo/>
    <Todos Todos={todos} onDelete={onDelete}/>
    <Footer/>
     </>

  );
}

export default App;
