import React from 'react'
import { useRef, useState } from 'react';
import logo from './logo.png';
//PRIME
import 'primereact/resources/themes/arya-blue/theme.css' ;  
import 'primereact/resources/primereact.min.css'   ;                 
import 'primeicons/primeicons.css'       ;        
import { Password } from 'primereact/password';  
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';   

//ROUTER DOM
import {useNavigate} from 'react-router-dom';


function Login() {
    const [text, setText] = useState('');
    const toastRef = useRef();
    let navigate = useNavigate();
  
    const onButtonClick = () => {
      if (text === "123"){
        toastRef.current.show({severity: 'info', summary: 'Succesful Login'});
        navigate("/Dashboard");
      }
      else{
        toastRef.current.show({severity: 'error', summary: 'Failed to connect', detail: 'Incorrect Password'});
      }
    };
    
    return (
  
      <div className="App">
        <Toast ref={toastRef} />
  
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Admin Login
          <Password feedback={false} value={text} onChange={(e) => setText(e.target.value) } />
          <br />
          <Button type="button" label="Login" icon="pi pi-key" onClick={onButtonClick}></Button>
        </header>
      </div>
    );
  
}
  export default Login;