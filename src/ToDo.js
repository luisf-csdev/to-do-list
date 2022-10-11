import React, { useState } from 'react';
import Modal from './components/Modal';
import ToDoForm from './components/ToDoForm';
import List from './components/List';
import './ToDo.css'
import { createStore } from 'redux';

import listReducer from './reducers/listReducer';
import { Provider } from 'react-redux';

const SAVED_ITEMS = "savedItems"

function persistState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
}
function loadState() {
    const currentState = localStorage.getItem(SAVED_ITEMS);
    if (currentState)
        return JSON.parse(currentState)
    else
        return []
}

const store = createStore(listReducer, loadState());

store.subscribe(() => {
    persistState(store.getState());
})

function ToDo() {

    const [showModal, setShowModal] = useState(false);

    function onHideModal(click) {
        setShowModal(false);
    }

    return (
        <div className="container">
            <Provider store={store}>
                <header className='header'><h1>To-do</h1> <button onClick={() => { setShowModal(true) }} className='addButton'>+</button></header>
                <List></List>
                <Modal show={showModal} onHideModal={onHideModal}><ToDoForm onHideModal={onHideModal}></ToDoForm></Modal>
            </Provider>
        </div>)
}

export default ToDo;