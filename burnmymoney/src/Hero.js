import React from 'react';
import Profile from './Profile';
import {Route, Switch, Link} from 'react-router-dom';



const Hero = (props) => {

    const { handleLogout, handle_buy, Link } = props;
g
    return (
        <section className="hero">
            <nav>
                <Link to="/" style={{textDecoration: 'none'}}><h2>
                    BurnMyMoney.Online
                </h2></Link>
                <Link to="/Profile" style={{textDecoration: 'none'}}><h2>Profile</h2></Link>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <Switch>
                <Route path="/" exact>
                    <container className="main">
                        <button className="bigFuckingButton" onClick={handle_buy}>
                            Buy Stonks
                        </button>
                    </container>
                </Route>
                <Route path="/Profile">
                    <Profile />
                </Route>
            </Switch>
        </section>
        
    )
}



export default Hero;




  /*  
    <button className="bigFuckingButton" onClick={handle_buy}>Buy Stonks</button> */


      

