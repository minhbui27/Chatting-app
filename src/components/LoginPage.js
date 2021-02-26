import React, {useState, useEffect} from 'react'
import Firebase from "./Firebase"
import Login from "./Login"
import HomePage from "./HomePage"


function LoginPage() {
    const [user,setUser] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailError,setEmailError] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const [hasAccount,setHasAccount] = useState(false);
 
    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        console.log(email)
        console.log(password)
        Firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((error) => {
            switch(error.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(error.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(error.message);
                    break;
            }
        })
    }

    const handleSignup = () => {
        clearErrors();
        console.log(email)
        console.log(password)
        Firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {
            switch(error.code) {
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(error.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(error.message);
                    break;
            }
        })
    }

    const handleLogout = () => {
        Firebase.auth().signOut();
    }

    const authListener = () => {
        Firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                clearInputs();
                setUser(user)
            }
            else {
                setUser("")
            }
        })
    }

    useEffect(() => {
        authListener();
    }, [])

    return(
        <div>
            {user ? (
                <>
                    <HomePage handleLogout={handleLogout}/>
                </>
            ) : (
                <>
                <div className="container-fluid" id="login-page-background">
                    <div class="col justify-content-center">
                        <div class="row" style={{height: "25vh"}}></div>
                            <div class="row justify-content-center">
                                <div class="col-3" id="login-box" style={{display: 'flex', justifyContent: 'center', alignItems:'center', height: '50vh'}}>
                                    <div class = "col-align-center">
                                        <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} 
                    handleSignup={handleSignup} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} 
                    passwordError={passwordError}/>
                                    </div>
                                </div>
                            </div>
                        <div class="row" style={{height: "25vh"}}></div>
                    </div>
                </div>
                </>
            )}
            
        </div>
    )
}

export default LoginPage;