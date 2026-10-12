import React from 'react'
import logo from '../assets/Agriroots_Logo_V1.png';


const Logo = ({width}: {width: string}) => {
  return (
    <img className={`${width}`} src={logo} alt="logo" />
  )
}

export default Logo
