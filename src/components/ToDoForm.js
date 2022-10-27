import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/listAction';

function ToDoForm(props) {
    const [text, setText] = useState('');
    const dispatch = useDispatch()

    function handleTyping(typing) {
        let textTyped = typing.target.value;
        setText(textTyped);
    }

    function addItemEvent(click) {
        click.preventDefault();
        if (text) {
            dispatch(addItem(text))
            setText('');
            props.onHideModal()
        }
    }

    return (
        <form id='form-task' >
            <input id='new-task' onChange={handleTyping} maxLength='30' type="text" placeholder="What do you have to do?" value={text}></input>
            <button id='add-task' onClick={addItemEvent}></button>
        </form>
    )
}

export default ToDoForm;