import React, {useState, useEffect} from 'react';
import fire from './fire';
import Login from './Login';
import Hero from './Hero';
import Profile from './Profile';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

function makeGET(url, api_key, secret_api_key) {
  return new Promise(async function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("APCA-API-KEY-ID", api_key);
    xhr.setRequestHeader("APCA-API-SECRET-KEY", secret_api_key);

    xhr.onload = function () {
      if (xhr.status == 200) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.status);
      }
    };
    xhr.send();
  });
}

function makePOST(url, api_key, secret_api_key, post_contents) {
  return new Promise(async function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("APCA-API-KEY-ID", api_key);
    xhr.setRequestHeader("APCA-API-SECRET-KEY", secret_api_key);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
      if (xhr.status == 200) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.status);
      }
    };
    xhr.send(post_contents);
  });
}


const App = () => {
  
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const api_key = useState(null);
  const secret_api_key = useState(null);

  const actual_handle_buy = async (order_symbol) => {
    let response = null;

    var orderdata = {
      "symbol" : order_symbol,
      "qty": 1,
      "side": "buy",
      "type": "market",
      "time_in_force": "day"
    };

    console.log("Making Buy Request...");
    var url = "https://paper-api.alpaca.markets/v2/orders";
    let responseText = await makePOST(url, api_key, secret_api_key, orderdata);

    try {
      response = JSON.parse(responseText);
    } catch (e) {
      console.log(e);
    }
    return response
  }



  const get_positions = async () => {
    let response = null;
    console.log("Making Position Info Request...");
    var url = "https://paper-api.alpaca.markets/v2/positions";
    let responseText = await makeGET(url, api_key, secret_api_key);

    try {
      response = JSON.parse(responseText);
    } catch (e) {
      console.log(e);
    }
    return response
  }


  const handle_buy = () => {
    alert("call handle buy")
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
