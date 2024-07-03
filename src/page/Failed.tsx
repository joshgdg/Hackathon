import React from 'react';
import logo from './Payment failed.png';
import './App.css'; 

export function Failed() {
    return (
        <div className="App">
            <div className="top-bar">
                <span className="top-bar-text">eLock</span>
            </div>
            <header className="App-header">
                <div className="content">
                    <img src={logo} className="App-logo_failed" alt="logo" />
                   
                    <div className="Failed-message">
                        Authentification échouée !
                    </div>
                </div>
                
            </header>
        </div>
    );
}
