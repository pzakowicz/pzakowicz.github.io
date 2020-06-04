//imports 
import React from 'react';
import './Portfolio.css';

function Portfolio() {
  
  return (

    <div className="content" id='portfolio-content'>
    <div className="header">
        <h1>My projects</h1>
        <div className="container">
            <div className="project-box">
                <h3>Flask micro site</h3> 
                <img className="portfolio_image" src="resources\images\flask1.png" alt="Flask icon"/>
                <p>This is a simple site, which I have developed to learn the basics of the Flask framework. The main functionality of this site is to shorten urls into keywords and later generate a url which will be paired with the given url.</p>
                <p><a href="https://evening-wildwood-46290.herokuapp.com/feed" target="_blank" rel="noopener noreferrer">Here is a link to the GitHub repository for this project.</a></p>
            </div>
        </div>
    </div>
</div>
  )


}

export default Portfolio;