import React from 'react'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'; 
import './Footer.css';

export default function Footer() {
  return (
    <div>

<footer className="footer" style={{backgroundColor:'rgb(242, 242, 242)',display:'flex',justifyContent:'center',alignItems:'center'}}>
<div>
<img
  src="https://diy-assets.classplus.co/_next/image?url=https://cdn-diy-public.classplus.co/prod/Scoogle%20Logo%20PNG_1673868775720.png&w=1920&q=75"
  alt="Description of the image"
  style={{ height: '10vh', margin: '60px' }}
/>




</div>
    <center>
        <div className="contact-info" style={{marginRight:'350px'}}>
          <div className="icon-text">
            <FiMapPin className="icon" />
            <span>Karimnagar, Telangana 505001</span>
          </div>
          <div className="icon-text">
            <FiPhone className="icon" />
            <span>+919550481993</span>
          </div>
          <div className="icon-text">
            <FiMail className="icon" />
            <span>info@scoogle.in</span>
            <p className="copyright">&copy; 2023 Your Website Name. All rights reserved.</p>

          </div>
        </div>
        </center>
      </footer>
    </div>
  )
}
