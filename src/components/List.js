import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { moveItem } from '../actions/listAction';
import ListItem from './ListItem';

function List(props) {
    const items = useSelector(state => state)
    const itemsID = items.map(item => item.id);

    const dispatch = useDispatch()

    function onDragEnd(result) {
        const { destination, source, draggableID } = result;

        if (!destination) return;

        dispatch(
            moveItem(
                source.droppableId,
                destination.droppableId,
                source.index,
                destination.index,
                draggableID
            )
        )
    }

    return (
        <DragDropContext onDragEnd={onDragEnd} >
            <Droppable droppableId={String(itemsID)} >
                {provided => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {items.map((item, index) =>
                            <ListItem key={item.id} id={item.id} index={index} item={item} />)}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    )

}

export default List;
