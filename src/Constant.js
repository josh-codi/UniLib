import React, {useState} from 'react'

const Constant = (prop) => {
    const ApiDomain='https://uenrlibrary.herokuapp.com/';
    

    const [domian, setDomain]=useState('');
    setDomain(ApiDomain);

    prop=domain;
    return (
        <div api={prop}></div>
    )
}

export default Constant
