import React from 'react';
import logo from './Logo.png'; // Assurez-vous d'importer le chemin correct du logo
import './App.css'; 

export function Home() {
    return (
        <div className="App">
            <div className="top-bar">
                <span className="top-bar-text">eLock</span>
            </div>
            <header className="App-header">
                <div className="content">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="auth-message">
                        <h1 className="Home-message"> Bienvenue</h1>
                    </div>
                    <div className="Success-message2">
                        Scanner votre carte pour vous authentifier !
                    </div>
                </div>
                
            </header>
        </div>
    );
}
