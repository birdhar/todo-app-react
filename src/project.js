import React, {useState, useEffect} from 'react'
import ToDoList from './ToDoList'

// const getWorks = () => {
//     let workList = JSON.parse(localStorage.getItem('works'))
    
//     if (workList) {
        
//         return JSON.parse(localStorage.getItem('works'))
//     }
// }

// getWorks()

let workList = JSON.parse(localStorage.getItem('works'))

 const Todo = () => {

    const [items, setItems] = useState(workList);

    const [inputList, setInputList] = useState('');

    const inputChange = (e) =>{
        setInputList(e.target.value);
    }

    const deleteItem = (id) => {
        setItems((oldItems) => {
           return oldItems.filter((arrItem, index)=>{
                return index !== id ;
            })
        })
    }

    const viewOnEnter = (e) =>{
        if (e.key === 'Enter') {
            setItems((prevItems)=>{
                return [...prevItems, inputList];
            });
            setInputList("");
        }
        
    }

    const viewItems = (e) =>{
        e.preventDefault();

        if (inputList) {
            setItems((prevItems)=>{
            return [...prevItems, inputList];

        });
        }
        else{
            alert("Please enter something")
        }
        setInputList("");
    };

    useEffect(() => {
        localStorage.setItem('works', JSON.stringify(items))
    }, [items])
    return (
        <>
            <div className='main_div'>
                <div className='centre_div'>
                    <div className='header'>
                         <h2>ToDo List App</h2>
                    </div>
                    <input type="text" placeholder='Add items' value={inputList} onKeyDown={viewOnEnter} onChange = {inputChange}/>
                    <button onClick = {viewItems}>+</button>
                    <ol>
                        {items.map((each, index)=>{
                            return <ToDoList item={each} key={index} id={index} onSelect={deleteItem}/>
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Todo
