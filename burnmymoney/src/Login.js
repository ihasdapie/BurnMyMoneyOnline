import React, {useEffect} from 'react';
import logo from './img/logo.png';

const Login = (props) => {
    
    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError,
        handleKeyPressLogin,
        handleKeyPressSignup
    } = props;

    return(
        <section className="login">
            <div className="loginContainer">
                <img src={logo} alt="" />
                <label>Email</label>
                <input 
                    type="text" 
                    autoFocus 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                {hasAccount ? (
                    <>
                        <input 
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyPress={handleKeyPressLogin}
                        />
                        <p className="errorMsg">{passwordError}</p>
                        <div className="btnContainer">
                            <button onClick={handleLogin}>Sign in</button>
                            <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </div>
                    </>
                ) : (
                    <>
                        <input 
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyPress={handleKeyPressSignup}
                        />
                        <p className="errorMsg">{passwordError}</p>
                        <div className="btnContainer">
                            <button onClick={handleSignup}>Sign up</button>
                            <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default Login;