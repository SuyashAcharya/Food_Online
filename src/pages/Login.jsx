import React from "react";
import "../styles/Login.css";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handelLogin,
    handleSignup,
    hasaccount,
    setHasAccount,
    emailerror,
    passworderror,
  } = props;
  return (
    <section className="login">
        <div className="loginContainer">
          <label>Username</label>
          <input 
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg">{emailerror}</p>
          <label>Password</label>
          <input 
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{passworderror}</p>
          <div className="btnContainer">
            {hasaccount ? (
              <>
                <button className="button" onClick={handelLogin}>sign in</button>
                <p>Don't have a account <span onClick={() => setHasAccount(!hasaccount)}>sign up </span></p>
              </>
            ) : (
              <>
                <button className="button" onClick={handleSignup}>sign up</button>
                <p>have a account <span
                onClick={() => setHasAccount(!hasaccount)}
                >sign in </span></p>
              </>
            )}
          </div>
        </div>
    </section>
  )
  
};

export default Login;
