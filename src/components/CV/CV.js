//imports 
import React from 'react';
import './CV.css';

function CV() {
  
  return (

    <div className="content" id='cv-content'>
      <div className="header">
          <h1>My CV</h1>
          <h2>My skills</h2> 
      </div>
      <div className="container">
          <div className="skill-box" id="coding">
              <h3>Coding skills</h3>
              <h4>HTML<span className="star">&starf; &star; &star; &star; &star;</span></h4>
              <h4>CSS<span className="star">&starf; &star; &star; &star; &star;</span></h4> 
              <h4>Python<span className="star">&starf; &star; &star; &star; &star;</span></h4> 
              <h4>SQL<span className="star">&starf; &star; &star; &star; &star;</span></h4>       
          </div>
          <div className="skill-box" id="design">
              <h3>Design skills</h3>
              <h4>Balsamiq<span className="star">&starf; &starf; &star; &star; &star;</span></h4>
              <h4>Photoshop<span className="star">&starf; &star; &star; &star; &star;</span></h4> 
              <h4>Invision<span className="star">&starf; &star; &star; &star; &star;</span></h4> 
              <h4>Axure<span className="star">&starf; &star; &star; &star; &star;</span></h4>       
          </div>
          <div className="skill-box" id="general">
              <h3>General skills</h3>
              <h4>Outlook<span className="star">&starf; &star; &star; &star; &star;</span></h4>
              <h4>Powerpoint<span className="star">&starf; &star; &star; &star; &star;</span></h4> 
              <h4>Word<span className="star">&starf; &star; &star; &star; &star;</span></h4> 
              <h4>Excel<span className="star">&starf; &star; &star; &star; &star;</span></h4>       
          </div>           
      </div>
    </div>
  )


}

export default CV;