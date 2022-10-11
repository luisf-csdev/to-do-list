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
        <form>
            <input onChange={handleTyping} type="text" value={text}></input>
            <button onClick={addItemEvent}>Add</button>
        </form>
    )
}

export default ToDoForm;