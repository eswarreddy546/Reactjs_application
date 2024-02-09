import  { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';


export default function FatchingLink() {
  let [ Data,SetData ] = useState([])
    function fetchData(){
        fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then (value =>{
            SetData(value)
          }) 
        }
        fetchData()





  return (
   
    <div >
        {
          Data.map(
            (value)=>{
              return(
                <div style={{width:"300px",margin:"10px", border:"1px solid black",borderRadius:"5px"}}>
                   <img className='card-img' src ={value.image}/>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                  
                 <Button className='me-3 mb-2' variant="success" size="sm" active>
                     Add to cart
                  </Button>
                  <Button className='me-3 mb-2' variant="warning" size="sm" active>
                      {value.category}
                  </Button>  
                </div>
              )
            }
          )
          }
       </div> 
  )
}