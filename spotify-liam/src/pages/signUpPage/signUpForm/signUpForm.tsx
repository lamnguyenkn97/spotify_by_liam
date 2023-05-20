import {DateTimeInput, TextInput} from "../../../components/input";
import './signUpForm.scss';

export const SignUpForm = ()=> {
    return(
        <div className='signUpForm'>
            <h3>Sign up with your email address</h3>
            <form>
                <TextInput name={'email'} label={'What is your email'} placeholder={'Enter your email'}/>
                <TextInput name={'password'} password label={'Create your password'} placeholder={'Create a password'}/>
                <TextInput name={'profileName'} label={'What should us call you'} placeholder={'Enter a profile name'}/>
                <DateTimeInput label={'What\'s your date of birth?'}/>
            </form>
        </div>
    )
}