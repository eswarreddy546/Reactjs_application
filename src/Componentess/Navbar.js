import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo';

import './Navbar.css'; 

export default function Navbar() {
  return (

    <div className='one'>

<Logo/>

        <Link to={'/'}>Home</Link>

        <Link to={'/Courses'}>Courses</Link>
        <Link to={'/Team'}>Team</Link>

        <Link to={'/Login'}>Login</Link>
        <Link to={'/Sign'}>Sign</Link>
        

        
        
        
        
        
        </div>
  )
}
