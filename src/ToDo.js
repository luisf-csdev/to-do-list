import React, { useEffect, useState } from 'react';
import Item from './components/Item';
import Modal from './components/Modal';
import ToDoForm from './components/ToDoForm';
import List from './components/List';
import './ToDo.css'

const SAVED_ITEMS = "savedItems"

function ToDo() {

    const [showModal, setShowModal] = useState(false);
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
        onHideModal();
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

    function onHideModal(click) {
        setShowModal(false);
    }

    return (
        <div className="container">
            <header className='header'><h1>To-do</h1> <button onClick={() => { setShowModal(true) }} className='addButton'>+</button></header>
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>

            <Modal show={showModal} onHideModal={onHideModal}><ToDoForm onAddItem={onAddItem}></ToDoForm></Modal>
        </div>)
}

export default ToDo;