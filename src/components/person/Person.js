import React from 'react'

const Person = (props)=>{
    return(
        <div>
            <h3>{props.name}</h3>
            <span>{props.children}</span>
        </div>
    );
}

export default Person;