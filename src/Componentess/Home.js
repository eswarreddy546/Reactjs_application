import React from 'react'
import Button from 'react-bootstrap/Button';
import Frequently from './Frequently';

export default function Home() {
  return (

    <div>
 <div className='main'>
       <div className='two'>
         <center>
         <img src='https://diy-assets.classplus.co/_next/image?url=https://cdn-diy-public.classplus.co/prod/512px-Indian_language_Wikipedias_word_cloud_based_on_number_of_articles_1673862988713.png&w=1920&q=75'
         alt=''
         />

          
          </center>       
       </div>
       <div className='three'>
        <h3 style={{marginLeft:'10px',margin:'20px'}}>WHY SKILLS?</h3>
        <h2 style={{marginLeft:'10px',margin:'20px'}}>When you can get Skilled in your own language</h2>
        <h4 style={{marginLeft:'10px',margin:'20px'}}>We believe you can learn more easily when you are taught in your mother tongue. All our courses are taught in Regional languages only</h4>
        <Button variant="secondary" size="lg" style={{backgroundColor:'Blue',color:'white',marginLeft:'230px',marginTop:'60px'}}>
                Check Courses
        </Button>

       
       </div>
       </div>
     <div>
      <center>
        <h1>CELEBRITY RECOMMENDED</h1>
        <h2>What Sourav ganguly told about us?</h2>
        
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cX4fyBGNYok?si=8QuCVBPiqWcXRFZQstart=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>       
        </center>
       </div>

        <Frequently/>

        </div>
  )
}