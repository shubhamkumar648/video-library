import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"

export const Login = () => {
  return (
    <main className="authentic_container">
    <div className="login_container flex flex-col p-2">
      <h3 className="text_center font-xl login_color"> Login </h3>

      <form >
        <div className=" flex flex-col">
          <label for="Email" className="font-xl fs-l">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            // value={email}
            // onChange={(e) => setEamil(e.target.value)}
            className="p-1 mb-1 inp_area"
            required
          />
        </div>

        <div className=" flex flex-col pt-3">
          <label for="password" className="font-xl fs-l">
            Password
          </label>
          <input
            // type={showPassword ? "Text" : "password"}
            type="text"
            placeholder="Enter your Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            className="p-1 mb-1 inp_area"
            required
          />
        </div>

        <div className="forgot_pass flex">
          <input
            type="checkbox"
            id="Pass"
            // checked={showPassword}
            // onChange={() => setShowpassword(!showPassword)}
          />
          <label for="Pass">Show Password</label>
        </div>
        <button
          className="btn btn__primary m-auto pt-2 log_btn"
          type="submit"
        >
          SUBMIT
        </button>
        <div>
          <button
            className="btn btn__primary m-auto pt-2 log_btn"
            type="submit"
          >
            LOGIN AS A GUEST
          </button>
        </div>
      </form>
      <span className="mt-1">
        Don't have an account?
        <Link className="link__nostyle create_acc" to="/signup">
          Sign up
        </Link>
      </span>
    </div>
  </main>
  )
}
