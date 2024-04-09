import { useForm } from 'react-hook-form';
import './style/RegisterPage.css'
import useAuth from '../hooks/useAuth';

const RegisterPage = () => {

  const {handleSubmit, register, reset} = useForm()

  const {registerUser} = useAuth()

  const submit = data => {
    registerUser(data)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: 'unknow'
    })
  }

  return (
    <div className='formPrincipal'>
      <form onSubmit={handleSubmit(submit)} className="form">
        <h2 className='form__tittle'>Register</h2>
        <label className='form__label'>
          <span className='form__span'>First Name</span>
          <input className='form__input' {...register('firstName')} type="text" />
        </label>
        <label className='form__label'>
          <span className='form__span'>Last Name</span>
          <input className='form__input' {...register('lastName')} type="text" />
        </label>
        <label className='form__label'>
          <span className='form__span'>Email</span>
          <input className='form__input' {...register('email')} type="email" />
        </label>
        <label className='form__label'>
          <span className='form__span'>Password</span>
          <input className='form__input' {...register('password')} type="password" />
        </label>
        <label className='form__label'>
          <span className='form__span'>Gender</span>
          <select className='form__input' {...register('gender')}>
            <option className='form__option' value={'unknow'}>Unknow</option>
            <option className='form__option' value={'male'}>Male</option>
            <option className='form__option' value={'famale'}>Famale</option>
            <option className='form__option' value={'other'}>I prefer dont say it</option>
          </select>
        </label>
        <button className='form__button'>Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;
