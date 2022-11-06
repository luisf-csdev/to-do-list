import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/listAction';
import useAutoFocus from '../hooks/useAutoFocus';

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

    useEffect(() => {
        if (!props.show) {
            setText('')
        }
    }, [props.show])

    const taskText = useAutoFocus(props)

    return (
        <form id='form-task' >
            <input ref={taskText} id='new-task' onChange={handleTyping} maxLength='30' type="text" placeholder="What do you have to do?" value={text} />
            <button id='add-task' onClick={addItemEvent} />
        </form>
    )
}

export default ToDoForm;