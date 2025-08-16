import React from 'react';
import { Word } from '../types';

interface WordEntryProps {
    word: Word;
    onToggleFavorite: (id: string) => void;
    isFavorite: boolean;
}

const WordEntry: React.FC<WordEntryProps> = ({ word, onToggleFavorite, isFavorite }) => {
    return (
        <div className="word-entry" tabIndex={0}>
            <div className="word-header">
                <h2 className="word-main">{word.neapolitan}</h2>
                <button 
                    className={`action-btn ${isFavorite ? 'active' : ''}`} 
                    onClick={() => onToggleFavorite(word.id)}
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                    {isFavorite ? '★' : '☆'}
                </button>
            </div>
            <div className="word-meta">
                <span className="pronunciation">{word.pronunciation}</span>
                <span className={`category-tag ${word.category}`}>{word.category}</span>
            </div>
            <div className="translations">
                <div className="translation">
                    <span className="translation-lang">Italian:</span>
                    <p>{word.italian}</p>
                </div>
                <div className="translation">
                    <span className="translation-lang">English:</span>
                    <p>{word.english}</p>
                </div>
            </div>
            <div className="example">
                <strong>Example:</strong>
                <p>{word.examples.neapolitan}</p>
            </div>
        </div>
    );
};

export default WordEntry;