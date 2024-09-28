import React from 'react'
import Logo from '../assets/logo.png'

const Navigation = () => {
  return (
    <nav className="text-center">
      <img className="logo-img" src={Logo} alt="Balmoral"/>
      <h1 className="text-center feed">Convention Centers</h1>
    </nav>
  )
}

export default Navigation