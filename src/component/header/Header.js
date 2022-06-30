import React from 'react'
import { BsPerson } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="Home">

    <div className="left_container ">
    
       <Link to="/"  className="link__nostyle ">
       <h3 className="brandName"> 
         namaste~Stream

       </h3>

       </Link>

     
    </div>

    <div className="Right_container">
     <Link className="link__nostyle create_acc" to="/login">
     <BsPerson className="iconLogin"/>
        </Link>    
        
        </div>

 </div>
  )
}
