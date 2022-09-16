import React, { useState, useEffect } from "react";
import fire from "./fire";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [hasaccount, setHasAccount] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handelLogin = () => {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disable":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handelLogout = () => {
    fire.auth().signOut();
  };

  const authListner = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListner();
  }, []);

  return (
    <div>
      {user ? (
        <>
          <Layout handelLogout ={handelLogout}/>
        </>
      ) :
      (
        <>
        <Login email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handelLogin={handelLogin}
      handleSignup={handleSignup}
      hasaccount={hasaccount}
      setHasAccount={setHasAccount}
      emailerror={emailerror}
      passworderror={password}
      />
        </>
      )
      }
      
      
    </div>
  );
}

export default App;
