import logo from './logo.svg';
import './css/Login.css';
import { Component } from 'react';

class Login extends Component{

  
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render(){
    
    return (
      <div>
        <LoginForm/>
      </div>
    )
  }
}


function LoginForm(props){

  const TitleForm = ({name, className}) =>{
    return(
      <div className = {className}>
        {name}
      </div>
    );
  }

  const InputArea = ({typeName, title}) =>{
    return (
      <div >
        <div className="article-login">{title}</div>
        <input className="input-box"
                type="text"  
                placeholder={typeName}/>
        
      </div>
    );
  };

  const ButtonToDo = ({typeName}) =>{
    return(
      <div>
        <button className="btn-action">{typeName}</button>
      </div>
    )
  }

  return(
    <div className="login-form">
      <TitleForm className="login-title"
                name="Login"/>
      <div id="area-input">
        <InputArea typeName="Type username"
                    title="Username"/>
        <InputArea typeName="Type password"
                  title="Password"/>
        <h2 id="forgot-password">Quên mật khẩu</h2>
        <ButtonToDo typeName="Đăng nhập"/>
      </div>
    </div>
  )
}

export default Login