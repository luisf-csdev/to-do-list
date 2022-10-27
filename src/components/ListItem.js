import React from 'react';
import { useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import Card from './Card';
import { changeDone } from '../actions/listAction'

function DoneImg(props) {

    if (props.done)
        return (<div className='circle-btn check' />)
    else
        return (<div className='circle-btn' />)

}

function ListItem(props) {
    const dispatch = useDispatch()

    return (
        <Draggable key={props.id} draggableId={props.id} index={props.index}>
            {provided => (
                <li className='mt' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <Card className={props.item.done ? "done item" : "item"}>
                        {props.item.text}
                        <button className='btn' onClick={() => { dispatch(changeDone(props.item.id)) }}>
                            <DoneImg done={props.item.done} />
                        </button>
                    </Card>
                </li>
            )}
        </Draggable>

    )

}

export default ListItem;