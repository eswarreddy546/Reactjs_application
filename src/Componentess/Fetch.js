import React from 'react'
import Button from 'react-bootstrap/Button';


let Data =[
    {
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYCDVXC1dKIQxWkN9r9hBZElgawTxpq1nwAw&usqp=CAU",
      "tittle" : "HTML",
      "text" : "HTML describes the structure of a web page semantically and originally included cues for its appearance.",
      "tex" :"More Details"
  },
  {
    "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvtN3wSOQ-0krDfeVmCQiJt4f5fT8Sy7KsBA&usqp=CAU",
    "tittle" : "CSS",
    "text" : "Cascading Style Sheets is a style sheet language that controls the look and formatting of documents written in markup languages like HTML or XML. ",
    "tex" :"More Details"

},
{
    "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvyBCVWGqUDX9dL9RzRJgzKBKE2eqztcy66w&usqp=CAU",
    "tittle" : "JavaScript",
    "text" : "JavaScript is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. ",
    "tex" :"More Details"

},
{
    "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs8uOnDdey2Qwypws2NEjuH1L9QV3fbaMRfw&usqp=CAU",
    "tittle" : "ReactJs",
    "text" : "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
    "tex" :"More Details"

},{
    "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWkLkjk9xABLP_nxrCee_wTkTGUGOsme5GA&usqp=CAU",
    "tittle" : "MySql",
    "text" : "MySQL is a relational database management system The database structure is organized into physical files optimized for speed.",
    "tex" :"More Details"

},
{
    "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmiarYTyiCUmbG5-TYBtLPUXS9cZV8V8cyFw&usqp=CAU",
    "tittle" : "NodeJS",
    "text" : "Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.",
    "tex" :"More Details"

},

]
export default function Fetch() {
  return (
    

        <center>
          <h1>Related Courses </h1>
          <div className='d-flex flex-wrap justify-content-between '>
            {
              Data.map(
                (value)=>{
                  return(
                    <div style={{width:"300px",margin:"10px", border:"1px solid gold",borderRadius:"5px",marginRight:'50px',marginLeft:'50px'}}>
                      <img className='card-img' src ={value.image} /> 
                      <h1>{value.tittle}</h1>
                      <p>{value.text}</p>
                      <Button variant="warning" size="sm" active>
                      {value.tex}

                      </Button>
                      </div>
              )
            }
          )
        }
       </div> 
  
   
          
      
    </center>
  )
}
