import React, { useEffect, useState } from 'react';
import AccessibilityPanel from './components/AccessibilityPanel';
import DictionaryStats from './components/DictionaryStats';
import Filters from './components/Filters';
import FloatingActions from './components/FloatingActions';
import Header from './components/Header';
import Results from './components/Results';
import SearchBar from './components/SearchBar';
import { Word } from './types';
import { fetchWords } from './utils/storage';

const App: React.FC = () => {
    const [words, setWords] = useState<Word[]>([]);
    const [filteredWords, setFilteredWords] = useState<Word[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadWords = async () => {
            const wordsData = await fetchWords();
            setWords(wordsData);
            setFilteredWords(wordsData);
            setIsLoading(false);
        };

        loadWords();
    }, []);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        const results = words.filter(word => 
            word.neapolitan.toLowerCase().includes(query.toLowerCase()) ||
            word.italian.toLowerCase().includes(query.toLowerCase()) ||
            word.english.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredWords(results);
    };

    return (
        <div className="app">
            <Header />
            <AccessibilityPanel />
            <SearchBar query={searchQuery} onSearch={handleSearch} />
            <Filters />
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <DictionaryStats totalWords={words.length} />
                    <Results words={filteredWords} />
                </>
            )}
            <FloatingActions />
        </div>
    );
};

export default App;