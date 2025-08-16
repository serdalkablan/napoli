import React from 'react';

const FloatingActions: React.FC<{ onSync: () => void; onViewFavorites: () => void; onAddWord: () => void; }> = ({ onSync, onViewFavorites, onAddWord }) => {
    return (
        <div className="floating-actions" role="toolbar" aria-label="Quick actions">
            <button className="fab" onClick={onSync} title="Sync Dictionary" aria-label="Sync dictionary data">
                🔄
            </button>
            <button className="fab" onClick={onViewFavorites} title="View Favorites" aria-label="View favorite words">
                ⚽
            </button>
            <button className="fab" onClick={onAddWord} title="Suggest Word" aria-label="Suggest new word">
                ➕
            </button>
        </div>
    );
};

export default FloatingActions;