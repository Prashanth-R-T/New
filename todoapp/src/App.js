import React, { useState } from 'react';
import "./App.css";
import Todoinput from './components/Todoinput';
import TodoList from './components/TodoList';
const App = () => {
  const [listTodo,setlistTodo]=useState([]);
  let addList = (inputText)=> {
    if(inputText!=='')
      setlistTodo([...listTodo,inputText]);
  }

  const deletelistitem = (key)=> {
    let newlisttodo =[...listTodo];
    newlisttodo.splice(key,1)
    setlistTodo([...newlisttodo])
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
        <Todoinput addList={addList}/>
        <h1 className='app-heading'>ToDo</h1>
        <hr/>
        {listTodo.map((listitem,i)=>{
          return (
            <TodoList key={i} index={i} item={listitem} deletelistitem={deletelistitem} />
          )
        })}
      </div>
    </div>
  )
}

export default App
