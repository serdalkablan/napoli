import React from 'react';

interface DictionaryStatsProps {
    totalWords: number;
    favoriteCount: number;
    lastUpdated: string;
}

const DictionaryStats: React.FC<DictionaryStatsProps> = ({ totalWords, favoriteCount, lastUpdated }) => {
    return (
        <div className="stats-container" role="region" aria-label="Dictionary statistics">
            <div className="stat-item">
                <div className="stat-number" id="totalWords" aria-label="Total words in dictionary">{totalWords}</div>
                <div className="stat-label">Total Words</div>
            </div>
            <div className="stat-item">
                <div className="stat-number" id="favorites" aria-label="Favorite words count">{favoriteCount}</div>
                <div className="stat-label">Favorites</div>
            </div>
            <div className="stat-item">
                <div className="stat-number" id="lastUpdated" aria-label="Last update time">{lastUpdated}</div>
                <div className="stat-label">Updated</div>
            </div>
        </div>
    );
};

export default DictionaryStats;