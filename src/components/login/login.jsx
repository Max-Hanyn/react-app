import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../utils/validators/validators";
import {TextArea} from "../common/formControls/formsControls";
import {connect} from "react-redux";
import {loginUserTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginUserTC(formData.login, formData.password, formData.rememberMe)

    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}
let maxLength10 = maxLength(10);

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'login'} name={'login'} component={TextArea} validate={[requiredField]}/>
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'} component={'input'}/>
                </div>
                <div>
                    <Field type={'checkbox'} name={'remember_me'} component={'input'}/>Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}
const ReduxLoginForm = reduxForm({
    form: 'loginForm'
})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, {loginUserTC})(Login);