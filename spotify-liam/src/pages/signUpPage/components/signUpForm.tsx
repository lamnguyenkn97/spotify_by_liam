import {DateTimeInput, RadioInput, TextInput} from "../../../components/input";
import './signUpForm.scss';
import {CheckBok} from "../../../components/input/checkBok";
import {Link} from "react-router-dom";

export const SignUpForm = ()=> {
    const genderOptions = [
        {name: 'Male', value: 'Male'},
        {name: 'Female', value: 'Female'},
        {name: 'Non-binary', value: 'Non-binary'},
        {name: 'Other', value: 'Other'},
        {name: 'Prefer not to say', value: 'Prefer not to say'}
    ]
    return(
        <div className='signUpForm'>
            <h3>Sign up with your email address</h3>
            <form>
                <TextInput name={'email'} label={'What is your email'} placeholder={'Enter your email'}/>
                <TextInput name={'password'} password label={'Create your password'} placeholder={'Create a password'}/>
                <TextInput name={'profileName'} label={'What should us call you'} placeholder={'Enter a profile name'}/>
                <DateTimeInput label={'What\'s your date of birth?'}/>
                <RadioInput label={'What\'s your gender?'} radioOptions={genderOptions}/>
                <CheckBok label={'Share my registration data with Spotify\'s content providers for marketing purposes.'} value={'shareData'}/>
            </form>
            <div className='termCondition'>
                <p>
                    By clicking on sign-up, you agree to Spotify's Terms and Conditions of Use.<br/>
                    To learn more about how Spotify collects, uses, shares and protects your personal data, please see Spotify's Privacy Policy.</p>
            </div>
            <button className='buttonSignup'>Sign up</button>
            <p className='login'>Have an account? <Link to='/login'>Log in</Link></p>
        </div>
    )
}