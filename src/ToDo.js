import React, { useEffect, useState } from 'react';
import Item from './components/Item';
import ToDoForm from './components/ToDoForm';
import List from './components/List';
import './ToDo.css'

const SAVED_ITEMS = "savedItems"

function ToDo() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if (savedItems) {
            setItems(savedItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    }, [items]);

    function onAddItem(text) {

        let item = new Item(text)

        setItems([...items, item])
    }

    function onItemDeleted(item) {

        console.log(item.id);
        let filteredItems = items.filter(it => it.id !== item.id);

        setItems(filteredItems);
    }

    function onDone(item) {
        let updatedItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done;
            }
            return it;
        })

        setItems(updatedItems);
    }

    return (
        <div className="container">
            <h1>To-do</h1>
            <ToDoForm onAddItem={onAddItem}></ToDoForm>
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>

        </div>)
}

export default ToDo;