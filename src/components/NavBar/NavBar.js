//imports 
import React, {useState} from 'react';
import './NavBar.css';
import Button from './Button/Button';



function NavBar() {

  const [activeButton, setActiveButton] = useState("1");

  const toggleButtons = (id) => {
    setActiveButton(id);
  }

  
  return (

  <div className="nav">
    <img src={require("./profile2.jpg")} alt="Profile pic"/>
    <div id="menu">
        <div className="button" id="name">
            <p>PIOTR ŻAKOWICZ</p>
        </div>
        <Button url="/" name="About Me" id="1" icon="fa fa-home fa-2x" active={activeButton} toggleButtons={toggleButtons}/>
        <Button url="/cv" name="CV" id="2" icon="fa fa-file fa-2x" active={activeButton} toggleButtons={toggleButtons}/>
        <Button url="/portfolio" name="Portfolio" id="3" icon="fa fa-github fa-2x" active={activeButton} toggleButtons={toggleButtons}/>
        <Button url="/contact" name="Contact" id="4" icon="fa fa-address-book fa-2x" active={activeButton} toggleButtons={toggleButtons}/>
          
    </div>
  </div>
  )


}

export default NavBar;