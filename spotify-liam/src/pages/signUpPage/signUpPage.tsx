import {SignUpForm, SignUpWithSocial} from "./components";
import {Separator} from "./components/separator";



export const SignUpPage = ()=> {
    return(
        <div>
            <SignUpWithSocial />
            <Separator text={'or'} />
            <SignUpForm />
        </div>
    )
}