import React,{useState} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import {UserContext} from './context/UserContext';
import {ModeContext} from './context/ModeContext';

function App() {

  const [user,setUser]=useState('Elif');
  const [darkMode,setDarkMode]=useState(false);

  const toggleMode=()=>{
    setDarkMode(!darkMode)
    
  }

  return (
    <div>
    <ModeContext.Provider value={{darkMode,setDarkMode}}>
      <UserContext.Provider value={{user,setUser}}>
         <Header  toggleMode={toggleMode}/>
         <HomePage/>
         <Footer/>
      </UserContext.Provider>
    </ModeContext.Provider>
      
      
        
    </div>
  );
}

export default App;
