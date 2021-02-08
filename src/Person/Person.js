import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    // return <p1>I am {props.name} who is {props.age} years old !!!</p1>;

    const style = {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    }

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I am {props.name} who is {props.age} years old !!!</p>
            <p>I am from {props.children}</p>
            <input type="text" onChange={props.changed} value={props.value}/>
        </div>
    )
}

export default Radium(person);