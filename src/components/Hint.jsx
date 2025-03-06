import React from 'react'
import s from "./Hint.module.css"

const Hint = ({title, text}) => {
  return (
    <div className={s.wrapper}>
        <p className={s.title}>{title}</p>
        <i>{text}</i>
    </div>
  )
}

export default Hint