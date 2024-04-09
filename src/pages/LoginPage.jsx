import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import UserLogged from "../components/LoginPage/UserLogged";
import { useState } from "react";
import './style/LoginPage.css'

const LoginPage = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))    
  const {register, handleSubmit, reset} = useForm()
  const {loginUser} = useAuth()
  
  const submit = data => {
    loginUser(data)
    reset({
      email: '',
      password: ''
    })
  }

  if(localStorage.getItem('token')){
    return <UserLogged user={user} setUser={setUser} />
  }
  
  return (
    <div className="register">
      <form className="register__form" onSubmit={handleSubmit(submit)}>
        <img className="register__img" src="../iconRegister.png" alt="" />
        <label className="register__label">
          <span className="register__span">Email</span>
          <input className="register__input" {...register('email')} type="email" />
        </label>
        <label className="register__label">
          <span className="register__span">Password</span>
          <input className="register__input" {...register('password')} type="password" />
        </label>
        <button className="register__button">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
