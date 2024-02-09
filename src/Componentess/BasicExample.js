import Button from 'react-bootstrap/Button';


let Data =[
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAsaj3xTDSzW0noPHVfLQ2Du6NS8FkV6WHfw&usqp=CAU",
    title: "Word Press",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content",
    alt: "Description of the image"
},

{
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAsaj3xTDSzW0noPHVfLQ2Du6NS8FkV6WHfw&usqp=CAU",
    title: "Word Press",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content",
    alt: "Description of the image"
},

{
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAsaj3xTDSzW0noPHVfLQ2Du6NS8FkV6WHfw&usqp=CAU",
  title: "Word Press",
  text: "Some quick example text to build on the card title and make up the bulk of the card's content",
  alt: "Description of the image"
},

{
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAsaj3xTDSzW0noPHVfLQ2Du6NS8FkV6WHfw&usqp=CAU",
    title: "Word Press",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content",
    alt: "Description of the image"
},

{
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAsaj3xTDSzW0noPHVfLQ2Du6NS8FkV6WHfw&usqp=CAU",
    title: "Word Press",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content",
    alt: "Description of the image"
},

{
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAsaj3xTDSzW0noPHVfLQ2Du6NS8FkV6WHfw&usqp=CAU",
  title: "Word Press",
  text: "Some quick example text to build on the card title and make up the bulk of the card's content",
  alt: "Description of the image"
},



 
  
]
function BasicExample() {
    return (
      <center>
        <h1>Customer Favorites </h1>
        <div className='d-flex flex-wrap justify-content-between '>
          {
            Data.map(
              (value)=>{
                return(
                  <div style={{width:"400px",margin:"10px", border:"1px solid gold",borderRadius:"5px",marginRight:'50px',marginLeft:'50px'}}>
                    <img className='card-img' alt='' src ={value.image} /> 
                    <h1>{value.tittle}</h1>
                    <p>{value.text}</p>
                    <Button variant="warning" size="sm" active>
                        2$
                    </Button>
                  </div>
                )
              }
            )
          }
         </div> 
    
     
            
        
      </center>
    );
  }
  
  export default BasicExample;
  