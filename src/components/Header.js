import React from 'react';

export default function Header(props) {

    return (
        <header className='header'>
            <h1 id='main-title'>To Do</h1>
            <div>
                <button className='btn header-btn bin-btn' onClick={props.setShowDeleteModal} />
                <button className='btn header-btn add-btn' onClick={props.setShowModal} />
            </div>
        </header>
    )

}