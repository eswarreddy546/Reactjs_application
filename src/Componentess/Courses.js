import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Courses() {
  return (
    <div className='con'>


    <div className='on'>

    <Card style={{ height: '500px', width: '300px',color:'red',borderStyle: 'solid' }}>
  <Card.Img variant="top" src="https://courses-assets-v2.classplus.co/_next/image?url=/api/proxyimage?url=https%3A%2F%2Fali-cdn-wl-assets.classplus.co%2Fproduction%2Fsingle%2Ftkqbc%2F5619f476-e161-4392-961e-0a486037b0cc.jpg&w=384&q=75" style={{width:'300px',color:'red' }}/>
  <Card.Body>
    <Card.Title style={{borderColor:'pink',color:'red',textAlign:'center' }}>Create Wedsite Without Coding</Card.Title>
    <Card.Text style={{color:'Black'}}>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <ListGroup className="list-group-flush">
    <ListGroup.Item></ListGroup.Item>
  </ListGroup>
  <Link to={'/BasicExample'}><Button variant="primary" style={{marginLeft:'70px',color:'white' }}>Get the course</Button></Link>

  </Card.Body>

  
</Card>
</div>
<div className='on'>

<Card style={{ height: '500px', width: '300px',color:'red',borderStyle: 'solid' }}>
<Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPtc-Kz79j7rUX8B_X8DojGl8ENyW3MYG8w&usqp=CAU"style={{width:'300px',height:'230px',color:'red' }}/>
<Card.Body>
<Card.Title style={{borderColor:'pink',color:'red',textAlign:'center' }}>Full Stack Java Developer</Card.Title>
<Card.Text style={{color:'Black'}}>
  Some quick example text to build on the card title and make up the
  bulk of the card's content.
</Card.Text>
<ListGroup className="list-group-flush">
<ListGroup.Item></ListGroup.Item>
</ListGroup>
<Link to={'/Fetch'}><Button variant="primary" style={{marginLeft:'70px',color:'white' }}>Get the course</Button>
</Link>
</Card.Body>


</Card>
   
  </div>  
    
      
        
  <div className='on'>
  <Card style={{ height: '500px', width: '300px',color:'red',borderStyle: 'solid' }}>
<Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCX8Te4g44b9u8JR5X4KUqpDwUWkwgqFcA0Q&usqp=CAU" style={{width:'300px',height:'230px',color:'red' }}/>
<Card.Body>
<Card.Title style={{borderColor:'pink',color:'red',textAlign:'center' }}>Full Stack Python Developer</Card.Title>
<Card.Text style={{color:'Black'}}>
  Some quick example text to build on the card title and make up the
  bulk of the card's content.
</Card.Text>
<ListGroup className="list-group-flush">
<ListGroup.Item></ListGroup.Item>
</ListGroup>
<Button variant="primary" style={{marginLeft:'70px',color:'white' }}>Get the course</Button>

</Card.Body>


</Card>

</div>
<div className='on'>

<Card style={{ height: '500px', width: '300px',color:'red',borderStyle: 'solid' }}>
<Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCX8Te4g44b9u8JR5X4KUqpDwUWkwgqFcA0Q&usqp=CAU" style={{width:'300px',height:'230px',color:'red' }}/>
<Card.Body>
<Card.Title style={{borderColor:'pink',color:'red',textAlign:'center' }}>Full Stack Python Developer</Card.Title>
<Card.Text style={{color:'Black'}}>
  Some quick example text to build on the card title and make up the
  bulk of the card's content.
</Card.Text>
<ListGroup className="list-group-flush">
<ListGroup.Item></ListGroup.Item>
</ListGroup>
<Button variant="primary" style={{marginLeft:'70px',color:'white' }}>Get the course</Button>

</Card.Body>


</Card>

</div>

<div className='on'>

        <Card style={{ height: '500px', width: '300px',color:'red',borderStyle: 'solid' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4IuPLdvDnhe8pEMQDhXRYK9jYnHCZX1Utvg&usqp=CAU" style={{width:'300px',height:'230px',color:'red' }}/>
      <Card.Body>
        <Card.Title style={{borderColor:'pink',color:'red',textAlign:'center' }}>Aws Cloud</Card.Title>
        <Card.Text style={{color:'Black'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <ListGroup className="list-group-flush">
        <ListGroup.Item></ListGroup.Item>
      </ListGroup>
      <Button variant="primary" style={{marginLeft:'70px',color:'white' }}>Get the course</Button>

      </Card.Body>

      
    </Card>

    </div>
    <div className='on'>

<Card style={{ height: '500px', width: '300px',color:'red',borderStyle: 'solid' }}>
<Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCX8Te4g44b9u8JR5X4KUqpDwUWkwgqFcA0Q&usqp=CAU" style={{width:'300px',height:'230px',color:'red' }}/>
<Card.Body>
<Card.Title style={{borderColor:'pink',color:'red',textAlign:'center' }}>Full Stack Python Developer</Card.Title>
<Card.Text style={{color:'Black'}}>
  Some quick example text to build on the card title and make up the
  bulk of the card's content.
</Card.Text>
<ListGroup className="list-group-flush">
<ListGroup.Item></ListGroup.Item>
</ListGroup>
<Button variant="primary" style={{marginLeft:'70px',color:'white' }}>Get the course</Button>

</Card.Body>


</Card>

</div>
</div>



  );
}
  