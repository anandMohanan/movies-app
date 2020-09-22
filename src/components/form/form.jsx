import React , { useState } from 'react';

const Form = () => {
    const [ input , setInput ] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
    }

    const onChange = (event) => {
        setInput(event.target.value)
        console.log(input);
    }


    return(
        <form onSubmit={onSubmit} >
            <input onChange={onChange}  type="text" placeholder="Search movies here" />
        </form>
    )
}

export default Form;

