import React from 'react'
import {useState} from 'react';

export default function Profile() {

    const [data,setData]=useState(0)
  
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={ () => {setData(data+1)}}>Update data</button>
        </div>
    )
}

