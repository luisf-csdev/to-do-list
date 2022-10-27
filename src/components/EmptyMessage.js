import React from 'react';

export default function EmptyMessage(props) {
    return (
        <p className={(props.currentState && props.currentState !== '[]') ? "hide" : "empty-msg"}>
            Start listing your tasks by clicking on the "+"
        </p>
    )
}
