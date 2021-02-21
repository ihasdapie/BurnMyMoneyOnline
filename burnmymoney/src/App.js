import React, {useState, useEffect} from 'react';
import fire from './fire';
import Login from './Login';
import Hero from './Hero';
import Profile from './Profile';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';



const Alpaca = require("@alpacahq/alpaca-trade-api");

const App = () => {
  
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const API_KEY = useState(null);
  const SECRET_API_KEY = useState(null);


  const handle_buy = async () => {

    const alpaca = new Alpaca({  keyId: API_KEY,  secretKey: SECRET_API_KEY,  paper: true});

    let tickerURL = await fetch("https://raw.githubusercontent.com/ihasdapie/BurnMyMoneyOnline/main/assets/tmp.json", {method: "GET"})
    tickerURL = await tickerURL.json();
    let stocks = tickerURL.fucked_stocks;
    let ticker = stocks[Math.floor(Math.random()*stocks.length)]
    const order = await alpaca.createOrder({
      "symbol": ticker,
      "qty": 1,
      "side": "buy",
      "time_in_force": "day",
      "type": "market"
    })
    console.log("handle buy exited");

  }







  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  }
 
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    console.log("Logging in");
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
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
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
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
    authListener();
  }, []);

  return (
    <div className="App">
      {user ? (
        <Hero
        handleLogout={handleLogout} 
        handle_buy={handle_buy}
        Link={Link}
        />
      ) : (
        <Login 
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          handleKeyPress={handleKeyPress}
        />
      )}
    </div>
  );
};

export default App;
