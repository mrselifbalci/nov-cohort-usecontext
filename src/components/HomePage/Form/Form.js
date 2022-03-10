import React, { useContext } from 'react'
import {UserContext} from '../../../context/UserContext'
import { ModeContext } from '../../../context/ModeContext';

export default function Form() {

    const {user,setUser}=useContext(UserContext)
    const {darkMode,setDarkMode}=useContext(ModeContext);


  return (
    <div className={darkMode ? "form form-dark" : "form" }>
        Form
        <p>{user}</p>
    </div>
  )
}
