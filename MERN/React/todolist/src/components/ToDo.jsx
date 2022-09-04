import React, { useState } from 'react';
import AddItemsForm from './AddItemsForm';

export default function ToDo(){
    const [todoList, setTodoList] = useState([]);

    const addItem = (item) => {
        setTodoList([...todoList, {text: item, completed: false}]);
    }

    const handleChangeCompleted = (idx, checked) => {
        const newList = [...todoList];
        newList[idx].completed = checked;
        setTodoList(newList);
    }

    const onDelete = (idx) => {
        const newList = [...todoList];
        newList.splice(idx, 1);
        setTodoList(newList);
    }

    const completedStyle = {
        textDecoration: "line-through"
    }
    const checkList = todoList.map((item, idx) =>
        <div key={ idx } className="form-check">
            <label htmlFor={ idx } className="form-check-label" style={ item.completed ? completedStyle : {}}>
                { item.text }
                <input id={ idx } type="checkbox" checked={ item.completed } onChange={ (e) => handleChangeCompleted(idx, e.target.checked) } className="form-check-input"/>
            </label> 
            <button onClick={ (e) => onDelete(idx) } className='btn btn-outline-secondary mx-3'>Delete</button>
        </div> 
    );

    return (
        <>
            <AddItemsForm onAddItem = { addItem }/>

            <fieldset className='mt-3'>
                { checkList }
            </fieldset>
        </>
    )
}

