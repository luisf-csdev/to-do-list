import React, { useEffect, useState } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css'
import Modal from './components/Modal';
import ToDoForm from './components/ToDoForm';
import List from './components/List';
import listReducer from './reducers/listReducer';
import Header from './components/Header';
import DeleteModal from './components/DeleteModal';
import DeleteList from './components/DeleteList';
import EmptyMessage from './components/EmptyMessage';


export default function ToDo() {

    const SAVED_ITEMS = "savedItems"
    const currentState = localStorage.getItem(SAVED_ITEMS);
    const store = createStore(listReducer, loadState());
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    store.subscribe(() => persistState(store.getState()));

    function persistState(state) {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
    }

    function loadState() {
        if (currentState)
            return JSON.parse(currentState)
        else
            return []
    }

    function onHideModal(click) {
        setShowModal(false);
        setShowDeleteModal(false);
    }

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true)
    }, []);

    const detectKeyDown = (event) => {
        if (event.key === 'Enter')
            setShowModal(true)
        else if (event.key === 'Delete')
            setShowDeleteModal(true)
    }

    return (
        <div className="container">
            <Provider store={store}>
                <Header setShowDeleteModal={() => setShowDeleteModal(true)} setShowModal={() => { setShowModal(true) }} />
                <List />
                <EmptyMessage currentState={currentState} />
                <Modal show={showModal} onHideModal={onHideModal}><ToDoForm show={showModal} onHideModal={onHideModal} /></Modal>
                <DeleteModal show={showDeleteModal} onHideModal={onHideModal}><DeleteList /></DeleteModal>
            </Provider>
        </div>
    )

}
