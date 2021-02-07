import React from 'react';

const validation = (props) => {
    let outputText='Text long enough !!!';
    if ( props.inputLength < 5 ){
        outputText='Text too short !!!';
    }
    return (
        <div>
            <p>{outputText}</p>                       
        </div>
    );
};

export default validation;