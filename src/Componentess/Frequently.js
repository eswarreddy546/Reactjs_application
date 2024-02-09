import React from 'react'
import'./Frequently.css'
export default function Frequently() {
  return (
    <div>
    <div class="faq" style={{color: "white"}}>
        <h2>Frequently asked questions</h2>
        <ul class="accordion">
            <li><input type="radio" name="accordion" id="first"/>
            <label for="first">Which programming languages should I learn first?</label>
        <div class="content">
            <p>This question is common among beginners looking for guidance on where to start in the vast landscape of programming languages..</p>
        </div></li>
        <li><input type="radio" name="accordion" id="second"/>
            <label for="second">What are the essential skills for a software developer?</label>
        <div class="content">
            <p>Aspiring developers often inquire about the key skills and competencies necessary to succeed in the software industry.</p>
        </div></li>
        <li><input type="radio" name="accordion" id="Third"/>
            <label for="Third">How do I prepare for technical interviews?</label>
        <div class="content">
            <p>Delivery fee charges from city to city and is applicable.certain restaurants might have fixed delivery fees.</p>
        </div></li>
        <li><input type="radio" name="accordion" id="fourth"/>
            <label for="fourth">How do I build a strong portfolio for job applications?</label>
        <div class="content">
            <p>Standard delivery times vary by the location selected and prevailing conditions.Once you select your location an estimated delivery time is mentioned for each restaurant.</p>
        </div></li>
        <li><input type="radio" name="accordion" id="fifth"/>
            <label for="fifth">What is the best way to stay updated with the latest technologies?</label>
        <div class="content">
            <p>We currently do not support this functionality.All our orders are placed and executed on-demand.</p>
        </div></li>
        <li><input type="radio" name="accordion" id="sixth"/>
            <label for="sixth">How can I improve my problem-solving skills in coding?</label>
        <div class="content">
            <p>We will deliver from any restaurant listed on the search results for your location.</p>
        </div></li>
        </ul></div></div>
  )
}
