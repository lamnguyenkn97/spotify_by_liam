import {TextInput, Toggle} from "../../../components/input";
import {CheckBok} from "../../../components/input/checkBok";
import React from "react";
import {Link} from "react-router-dom";
import './loginForm.scss'

export const LoginForm = () => {
    return(
        <div className='loginFormDiv'>
            <form className='loginForm'>
                <TextInput name={'email'} label={'Email or username'} placeholder={'Email or username'}/>
                <TextInput name={'password'} label={'Password'} placeholder={'Password'}/>
                <div className='rememberMe'>
                    <Toggle label='Remember me' /> <span className='labelToggle'>Remember me</span>
                </div>
                <button>Log In</button>
                <Link to='/'>Forgot your password?</Link>
            </form>
        </div>
    )
}