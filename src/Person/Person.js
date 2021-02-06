import React from 'react';
import './Person.css';

const person = (props) => {
    // return <p1>I am {props.name} who is {props.age} years old !!!</p1>;
    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name} who is {props.age} years old !!!</p>
            <p>I am from {props.children}</p>
            <input type="text" onChange={props.changed} value={props.value}/>
        </div>
    )
}

export default person;