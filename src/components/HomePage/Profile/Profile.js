import React, { useContext } from 'react'
import { ModeContext } from '../../../context/ModeContext'

export default function Profile() {
  const {darkMode,setDarkMode}=useContext(ModeContext);
  return (
    <div  className={darkMode ? "profile profile-dark" : "profile" }>Profile</div>
  )
}
