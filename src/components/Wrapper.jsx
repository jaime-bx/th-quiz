import React from 'react'
import Paper from '@mui/material/Paper';
import s from "./Wrapper.module.css"

const Wrapper = ({children}) => {
  return (
    <Paper elevation={1} className={s.wrapper}>{children}</Paper>
  )
}

export default Wrapper