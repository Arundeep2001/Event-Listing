import classes from './LoginForm.module.css'

function LoginPage(){
    return (
        <div className={classes.login}>
            <div className={classes.login_container}>
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text'/>
                    <h5>Password</h5>
                    <input type='password'/>
                    <button type='submit' className={classes.login_signInButton}>Sign In</button>
                </form>
                <button className={classes.login_registerButton}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default LoginPage;