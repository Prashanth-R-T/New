import React, { useState } from 'react';

const Todoinput = (props) => {
    const [inputText,setinpuText] = useState('');
    const handeleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setinpuText("")
        }
    }
  return (
    <div className='input-container'>
        <input 
        type="text" 
        className="input-box-todo" 
        placeholder="Enter your todo" 
        value={inputText} 
        onChange={e=> {
            setinpuText(e.target.value) 
        }} 
        onKeyDown={handeleEnterPress}
        />

        <button className='add-btn' onClick={()=>{
            props.addList(inputText)
            setinpuText("")
        }}>+</button>
    </div>
  )
}

export default Todoinput
