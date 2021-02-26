import React, {useState} from 'react'
import './styles/login-button.scss';

function Login(props) {
    
    const {email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError} = props;
    return (
        <div>
            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
                <input type="text" id="form2Example1" className="form-control" placeholder="Enter email address" 
                autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" placeholder="Enter password"
                autoFocus required value={password} onChange={e => setPassword(e.target.value)}/>
                <p className="errorMsg">{passwordError}</p>
            </div>

            {/* <!-- 2 column grid layout for inline styling --> */}
            <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                    checked="false"
                    />
                    <label for="form2Example3" >Remember me</label>
                </div>
                </div>

                <div className="col">
                {/* <!-- Simple link --> */}
                <a href="#!">Forgot password?</a>
                </div>
            </div>

            {/* <!-- Submit button --> */}
            <div>
                {hasAccount ? (
                    <>
                    <div>
                        <button type="submit" className="fill" onClick={handleLogin}>Sign in</button>
                       <p>Doesn't have an account?<span onClick={() => setHasAccount(!hasAccount)}> <button className="btn btn-primary">Sign up</button></span></p>
                    </div>
                    </>
                ) : (
                    <>
                        <div><button type="submit" className="fill" onClick={handleSignup}>Sign up</button>
                        <p>Have an account?<span onClick={() => setHasAccount(!hasAccount)}> <button className="btn btn-primary">Sign in</button> </span></p></div>
                        
                    </>
                )}
                
            
            </div>
            
        </div>
    )
}

export default Login;