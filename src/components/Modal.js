import React from 'react';
import Card from './Card';

function Modal(props) {

    function hideModal(click) {
        let target = click.target;
        if (target.id === "modal") {
            props.onHideModal();
        }
    }

    return (
        <div id="modal" onClick={hideModal} className={props.show ? "modal" : "modal hideModalDisplay"}>
            <Card className='cardModal'>
                {props.children}
            </Card>
        </div>
    )

}

export default Modal;