import React from 'react'


const ToDoList = (props) => {

    return (
        <>
            <div className='todo_style'>
                <li>{props.item}</li>
                <button onClick={()=>{ props.onSelect(props.id)}}>×</button>
             
            </div>
        </>
    )

}

export default ToDoList
