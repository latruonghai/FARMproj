import logo from './logo.svg';
import './css/Login.css';
import { Component } from 'react';
import {useForm} from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
class Login extends Component{

  
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render(){
    
    return (
      <>
        <LoginForm/>
      </>
    )
  }
}


function LoginForm(props){

  const {handleSubmit, setError} = useForm()
  const TitleForm = ({name, className}) =>{
    return(
      <div className = {className}>
        {name}
      </div>
    );
  }

  const InputArea = ({typeName, title, type}) =>{
    return (
      <>
        <div className="article-login">{title}</div>
        <input className="input-box"
                type="text"  
                placeholder={typeName} type={type}/>
        
      </>
    );
  };

  const ButtonToDo = ({typeName}) =>{
    return(
      <>
        <button type="button" className="btn btn-primary">{typeName}</button>
      </>
    )
  }

  return(
    <div className="login-form">
      <TitleForm className="login-title"
                name="Login"/>
      <div className="login-input">
        <InputArea typeName="Type username"
                    title="Username" type="text"/>
        <InputArea typeName="Type password"
                  title="Password" type="password"/>
        <h2 id="forgot-password">Quên mật khẩu</h2>
        <ButtonToDo typeName="Đăng nhập"/>
      </div>
    </div>
  )
}

export default Login