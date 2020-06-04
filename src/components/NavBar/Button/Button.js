//imports 
import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';



function Button({name, id, url, icon, active, toggleButtons}) {




      
  return (

          <Link to={url}>
        <div className={active === id ? "button menu-button white" : "button menu-button"} id={id} onClick={() => {toggleButtons(id)}}>
              <i className={icon}></i><p>{name}</p>
        </div>
          </Link>
          

  )


}

export default Button;