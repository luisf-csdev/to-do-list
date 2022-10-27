import React from 'react';
import { useDispatch } from 'react-redux';
import Card from './Card';
import { deleteItem } from '../actions/listAction'

function DeleteListItem(props) {
    const dispatch = useDispatch()
    return (<li>
        <Card className={props.item.done ? "done item" : "item"}>
            {props.item.text}
            <div>
                <button className='btn delete-btn' onClick={() => { dispatch(deleteItem(props.item.id)) }} />
            </div>
        </Card>
    </li>)

}

export default DeleteListItem;


