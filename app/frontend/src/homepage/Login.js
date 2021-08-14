import logo from './logo.svg';
//import './css/Login.css';
import React, { Component, Fragment } from 'react';
import { ReactDOM } from 'react-dom';
import {useForm} from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
class Login extends Component{

  
  constructor(props){
    super(props);
    this.state = {
      message: "",
      isValid: true,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const [user_name, pass]=["latruonghai", "latruonghai2507"];
    const checkValid = () => {
      const [userName, passWrd] = [document.querySelector("#user").value, document.querySelector("#password").value];
      // console.log(userName);
      if(userName !== user_name || passWrd !== pass){
        this.state.isValid=false;
      }
      else this.state.isValid=true;
    };
    const getState = () => {
      if(this.state.isValid){
      // console.log("Is valid");
      this.setState({
        ...this.state, message: ""
        });
      }
      else{
        // console.log("Is not valid")
        this.setState({
          ...this.state, message: "Invalid"
        });
      }
    }
    checkValid();
    console.log("State:", this.state.isValid);
    getState();
    
  
}
  

  render(){
    
    return (
      <div>
        <LoginForm buttonClick={this.handleClick} message={this.state.message}/>
      </div>
    );
  }
}


function LoginForm({buttonClick, message}){

  // const {handleSubmit, setError} = useForm();
  const TitleForm = ({name, className}) =>{
    return(
      <div className = {className}>
        {name}
      </div>
    );
  }

  const InputArea = ({idName, typeName, title, type}) =>{
    return (
      <div>
        <div className="article-login">{title}</div>
        <input className="input-box" id={idName}
                type="text"  
                placeholder={typeName} type={type}/>
        
      </div>
    );
  };
  const NotifyMessage = ({message}) =>{
    return(
      <Fragment>
        <h3 className="message-noti" >{message}</h3>
      </Fragment>
    )
  }
  const ButtonToDo = ({typeName, buttonClick}) =>{
    return(
      <div>
        <button type="button" className="btn btn-primary" onClick={buttonClick}>{typeName}</button>
      </div>
    )
  }

  return(
    <div className="login-form">
      <TitleForm className="login-title"
                name="Login"/>
      <div className="login-input">
        <InputArea typeName="Type username" idName="user"
                    title="Username" type="text"/>
        <InputArea typeName="Type password" idName="password"
                  title="Password" type="password"/>
        <NotifyMessage message={message}></NotifyMessage>
        <h2 id="forgot-password">Quên mật khẩu</h2>
        <ButtonToDo typeName="Đăng nhập" buttonClick={buttonClick}/>
      </div>
    </div>
  );
}

export default Login