import React from 'react';
import Profile from './Profile';
import { Switch, Route } from 'react-router-dom';

const Hero = (props) => {

    const { handleLogout, handle_buy } = props;

    return (
        <section className="hero">
            <nav>
                <h2>BurnMyMoney.Online</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <div>
                <button id = "bigFuckingButton" onClick={handle_buy}>BUY</button>
            </div>
            <Switch>
                <Route path="/profile">
                    <Profile />
                </Route>
            </Switch>


        </section>
    )
}



export default Hero;
