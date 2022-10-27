import React from 'react';
import Card from './Card';

export default function DeleteModal(props) {

    function hideModal(click) {
        let target = click.target;
        if (target.id === "modal") {
            props.onHideModal();
        }
    }

    return (
        <div id="modal" onClick={hideModal} className={props.show ? "modal" : "modal hide"}>
            <Card className='cardModal delete-modal'>
                {props.children}
            </Card>
        </div>
    )

}

