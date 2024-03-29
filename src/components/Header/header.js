import React, { useContext } from "react"
import logo from "../../assets/images/logo.png"
import "./header.css"
// import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <>
      <header className='header'>
        <div className="header-container">
          <div className='logo'>
              <img className="image" src={logo} alt="logo" />
        </div>
        <div className='pages'>
          <nav>
            <ul>
            <li>Home</li>
            <li>Wellness</li>
            <li>ArtHub</li>
            <li>Track Progress</li>
            </ul>
          </nav>
        </div>
        </div>
      </header>
    </>
  )
}
