import React from 'react'
import HOC from './HOC';

const Button = (props) => {

    return (
        <div>
        <button onClick={props.onClick}>Counter Button</button>
        <p>{props.counter}</p>
        </div>
    )
}

export default HOC(Button);
