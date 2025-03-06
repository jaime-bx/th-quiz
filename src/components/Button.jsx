import React from 'react'
import { Link } from "react-router";
import s from "./Button.module.css"


const Button = ({route, text, disabled=false, onClick}) => {
  return (
    <Link to={route}><button disabled={disabled} className={s.button} onClick={onClick}>{text}</button></Link>
  )
}

export default Button;