import React,{useContext} from 'react'
import { UserContext } from '../../context/UserContext'
import { ModeContext } from '../../context/ModeContext'

export default function Header({toggleMode}) {

    const {user,setUser}=useContext(UserContext);

    const {darkMode,setDarkMode}=useContext(ModeContext);

  return (
    <div className={darkMode ? "header header-dark" : "header" }>
        Header
        <button className={darkMode ? "mode-btn mode-btn-dark" : "mode-btn"}onClick={toggleMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
       <p>{user}</p>
    </div>
  )
}
