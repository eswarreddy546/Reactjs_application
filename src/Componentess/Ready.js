import React, { useState } from 'react'
import { useState } from 'react'
export default function Ready() {
    let [data,setData] = useState([])
    function FetchData()
    {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res=>res.json())
        .then(value=> {
            setData(value)
        }

        
        )
    }
    FetchData()
  return (
       <div>
      {
      data.map(
        (value)=>(
        <div>
            {value.id}
          <h1>{value.title}</h1>
        </div>
      ))
      }


    </div>
  )
}
