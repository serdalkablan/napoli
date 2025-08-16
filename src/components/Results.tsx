import React from 'react';
import WordEntry from './WordEntry';
import { Word } from '../types';

interface ResultsProps {
    words: Word[];
    loading: boolean;
    error: string | null;
}

const Results: React.FC<ResultsProps> = ({ words, loading, error }) => {
    if (loading) {
        return <div className="loading">Loading results...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (words.length === 0) {
        return <div className="no-results">No results found.</div>;
    }

    return (
        <div className="results-container">
            {words.map((word) => (
                <WordEntry key={word.id} word={word} />
            ))}
        </div>
    );
};

export default Results;