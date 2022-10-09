import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import List from './List';
import './ToDo.css'

function ToDo() {

    const [items, setItems] = useState([]);

    function onAddItem(item) {
        setItems([...items, item])
    }

    return (
        <div className="container">
            <h1>To-do</h1>
            <ToDoForm onAddItem={onAddItem}></ToDoForm>
            <List items={items}></List>

        </div>)
}

export default ToDo;