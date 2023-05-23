import React from "react";
import {LoginForm, SocialLogin} from "./components";
import './loginPage.scss'
import {Bar} from "../../components/bar";

export const LoginPage = () => {
    return(
        <div className='loginPage'>
            <div className='loginPageCenter'>
                <h1>Log in to Spotify</h1>
                <SocialLogin />
                <Bar width={200} height={1} background={'#242424'} />
                <LoginForm />
                <Bar width={200} height={1} background={'#242424'} />
            </div>
        </div>
    )
}