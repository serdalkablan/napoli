import { Word } from '../types';

const STORAGE_KEY = 'neapolitan_dictionary_words';

export const loadWordsFromStorage = (): Word[] => {
    const storedWords = localStorage.getItem(STORAGE_KEY);
    return storedWords ? JSON.parse(storedWords) : [];
};

export const saveWordsToStorage = (words: Word[]): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
};

export const addWordToStorage = (newWord: Word): void => {
    const words = loadWordsFromStorage();
    words.push(newWord);
    saveWordsToStorage(words);
};

export const clearWordsFromStorage = (): void => {
    localStorage.removeItem(STORAGE_KEY);
};