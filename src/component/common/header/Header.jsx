import React from 'react';

import './Header.css'
const Header = ()=> {
    return(
        
        <section className="Header">
            <div>
            <section className="Header-top">
                <section className="Header-top-logo" id="logo">
                    InvestUp

                </section>
                <span id="nav">
                <span id="home">Home</span><span id="st">StartUps</span><span id="in">Investors</span><span id="prof">Profile</span>
                </span>
            
                
            </section>
            </div>
            
        </section>
    );
}

export default Header;