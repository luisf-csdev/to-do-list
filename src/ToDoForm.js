import React, { useState } from 'react';

function ToDoForm(props) {
    const [text, setText] = useState('');

    function handleTyping(typing) {
        let textTyped = typing.target.value;
        setText(textTyped);
    }

    function addItem(click) {
        click.preventDefault();
        if (text) {
            props.onAddItem(text);
            setText('');
        }
    }

    return (
        <form>
            <input onChange={handleTyping} type="text" value={text}></input>
            <button onClick={addItem}>Add</button>
        </form>
    )
}

export default ToDoForm;