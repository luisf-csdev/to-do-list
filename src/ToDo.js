import React, { useState } from 'react';
import './ToDo.css'
function ToDo() {

    const [text, setText] = useState('');
    const [items, setItems] = useState([]);

    function handleTyping(typing) {
        let text = typing.target.value;
        setText(text);
    }

    function addItem(click) {
        click.preventDefault();
        if (text) {
            setItems([...items, text])
            setText('');
        }
    }

    let page =
        <div className="container">
            <h1>To-do</h1>
            <form>
                <input onChange={handleTyping} type="text" value={text}></input>
                <button onClick={addItem}>Add</button>
            </form>

            <ul>
                {items.map(item => <li>{item}</li>)}
            </ul>

        </div>

    return (page)
}

export default ToDo;