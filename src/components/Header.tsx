import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>⚽ Dizionario Napoletano 🌋</h1>
            <p>🇮🇹 Neapolitan ↔ Italian ↔ English Dictionary 🇬🇧</p>
            <div className="naples-icons" aria-hidden="true">
                🍕 🍋 🏛️ 🌊 ☀️ 🎭
            </div>
        </header>
    );
};

export default Header;