import React from "react";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Authcontext";



export const Header = () => {

  const {user,setUser} = useAuth()

  const logoutHandler = () => {

    localStorage.removeItem('token');
    setUser(null)

  }

  return (
    <div className="Home">
      <div className="left_container ">
        <Link to="/" className="link__nostyle ">
          <h3 className="brandName">namaste~Stream</h3>
        </Link>
      </div>

      <div className="Right_container">

      {user ? (
        <button className="btn logout-btn font-xl fs-l" onClick={logoutHandler} >Logout </button>
      ): (

        <Link className="link__nostyle create_acc" to="/login">
          <BsPerson className="iconLogin" />
        </Link>
      )}
       
      </div>
    </div>
  );
};
