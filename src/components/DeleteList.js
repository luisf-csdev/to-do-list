import React from 'react';
import { useSelector } from 'react-redux';
import DeleteListItem from './DeleteListItem';

export default function DeleteList(props) {
    const items = useSelector(state => state)

    // eslint-disable-next-line eqeqeq
    if (items != '') {
        return (
            <div>
                <h3 className='delete-title'>Which task do you want to delete?</h3>
                <ul>
                    {items.map(item => <DeleteListItem key={item.id} item={item} />)}
                </ul>
            </div>
        )
    } else {
        return (
            <div>
                <h3 className='delete-title'>There is no task left</h3>
            </div>
        )
    }

}


