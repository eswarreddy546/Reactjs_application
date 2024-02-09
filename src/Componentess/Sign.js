import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaFacebook,FaGoogle,FaTwitter } from 'react-icons/fa';

export default function Sign() {
  return (
    <div className='Enter'>
    <div className='cen'>
        <center><h2>Create Account</h2></center>
    <Form style={{width:'20vw',marginLeft:'50px'}}>
<Form.Group className="mb-3" controlId="formGroupEmail">
<Form.Label>username</Form.Label>
<Form.Control type="email" placeholder="Enter username" />

</Form.Group>
<Form.Group className="mb-3" controlId="formGroupEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" />
</Form.Group>
<Form.Group className="mb-3" controlId="formGroupPassword">
<Form.Label>Enter Your Password</Form.Label>
<Form.Control type="password" placeholder="Password" />
</Form.Group>
<Form.Group className="mb-3" controlId="formGroupPassword">
<Form.Label>Conform Your Password</Form.Label>
<Form.Control type="password" placeholder="Password" />
</Form.Group>
</Form>
<center>
<Button variant="primary" size="lg" disabled style={{color:'white',backgroundColor:'blue'}}>
LOGIN
</Button>{' '}
    </center>
      


      <center>
      <FaGoogle style={{height:'30px',width:'20px',margin:'10px',color:'white'}}></FaGoogle>
      <FaFacebook style={{height:'30px',width:'20px',margin:'10px',color:'white'}}></FaFacebook>
      <FaTwitter style={{height:'30px',width:'20px',marging:'10px',color:'white'}}></FaTwitter>
      </center>

            </div>

    </div>
  )
}