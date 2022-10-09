import React from 'react';
import Card from './Card';

function List(props) {

    function DoneImg(props) {

        if (props.done) {
            return (<img className='button' alt='done' src='./assets/done.png'></img>)
        } else {
            return (<img className='button' alt='undone' src='./assets/undone.png'></img>)
        }
    }

    return (
        <ul>
            {props.items.map(item => <li key={item.id}>
                <Card className={item.done ? "done item" : "item"}>
                    {item.text}
                    <div>
                        <button onClick={() => { props.onDone(item) }}>
                            <DoneImg done={item.done}></DoneImg>
                        </button>
                        <button onClick={() => { props.onItemDeleted(item) }}>
                            <img className='button' alt='bin' src='./assets/bin.png'></img>
                        </button>
                    </div>
                </Card>
            </li>)}
        </ul>
    )
}

export default List;