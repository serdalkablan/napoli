import React from 'react';

interface FilterProps {
    selectedLanguage: string;
    selectedCategory: string;
    onLanguageChange: (language: string) => void;
    onCategoryChange: (category: string) => void;
}

const Filters: React.FC<FilterProps> = ({ selectedLanguage, selectedCategory, onLanguageChange, onCategoryChange }) => {
    return (
        <div className="filters-container">
            <div className="filter-group">
                <label htmlFor="language-select">Language:</label>
                <select
                    id="language-select"
                    value={selectedLanguage}
                    onChange={(e) => onLanguageChange(e.target.value)}
                >
                    <option value="all">All Languages</option>
                    <option value="neapolitan">Neapolitan</option>
                    <option value="italian">Italian</option>
                    <option value="english">English</option>
                </select>
            </div>
            <div className="filter-group">
                <label htmlFor="category-select">Category:</label>
                <select
                    id="category-select"
                    value={selectedCategory}
                    onChange={(e) => onCategoryChange(e.target.value)}
                >
                    <option value="all">All Categories</option>
                    <option value="food">Food</option>
                    <option value="emotions">Emotions</option>
                    <option value="family">Family</option>
                    <option value="nature">Nature</option>
                    <option value="general">General</option>
                </select>
            </div>
        </div>
    );
};

export default Filters;