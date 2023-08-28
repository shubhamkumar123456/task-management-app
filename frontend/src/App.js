
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import TaskState from './context/TaskState';
import { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';

function App() {
  const token = localStorage.getItem('token');
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },1500);
  }
  return (
    <div className="App">
    <TaskState>
      <BrowserRouter>
      <Navbar/>
      <Alert alert={alert}/>
      <Routes>
     <Route path='/' element={<Home showAlert={showAlert}/>}
   
        <Route path='/signup' element={<Signup showAlert={showAlert}/>}/>
        <Route path='/login' element={<Login showAlert={showAlert}/>}/>
      
      </Routes>
      </BrowserRouter>
      </TaskState>
    </div>
  );
}

export default App;
