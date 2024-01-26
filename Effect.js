import React from 'react'
import { useState,useEffect } from 'react'
//import { json } from 'react-router-dom';

//export default function Effect() {

function ExampleComponent(){
    const[ data, setData] = useState(null);
    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(Response => Response.json())
            .then(result => setData(result));

   return() =>{   
        };
          },[]);
return(
        <div>
            {data ? (
            <p> Data: { JSON.stringify(data)}</p>
            ):(
                <p>Loading...</p>

            )}

        </div>
  );
}

export default ExampleComponent;

