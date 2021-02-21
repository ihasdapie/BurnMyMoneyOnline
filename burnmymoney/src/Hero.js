import React from 'react';

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


        </section>
    )
}



export default Hero;
