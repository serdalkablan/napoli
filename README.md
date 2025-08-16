# Neapolitan Dictionary Web Application

## Overview
The Neapolitan Dictionary is a web application designed to provide users with a comprehensive dictionary for Neapolitan, Italian, and English languages. It features a user-friendly interface, accessibility options, and the ability to search and filter words efficiently.

## Features
- **Multi-language Support**: Search for words in Neapolitan, Italian, and English.
- **Accessibility Options**: Adjust font size and contrast for better readability.
- **Dynamic Filtering**: Filter search results based on language and category.
- **Statistics Display**: View statistics about the dictionary, including total words and favorites.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Project Structure
```
neapolitan-dictionary-app
├── public
│   ├── index.html          # Main HTML document
│   └── favicon.ico         # Favicon for the application
├── src
│   ├── assets
│   │   └── styles.css      # Global styles for the application
│   ├── components
│   │   ├── AccessibilityPanel.tsx  # Accessibility options component
│   │   ├── DictionaryStats.tsx     # Dictionary statistics component
│   │   ├── Filters.tsx              # Filters component for search results
│   │   ├── FloatingActions.tsx      # Floating action buttons component
│   │   ├── Header.tsx               # Header component with title and description
│   │   ├── Results.tsx              # Component to display search results
│   │   ├── SearchBar.tsx            # Search input component
│   │   └── WordEntry.tsx            # Component for individual word entries
│   ├── data
│   │   └── words.json               # JSON data for the dictionary
│   ├── types
│   │   └── index.ts                  # TypeScript interfaces and types
│   ├── utils
│   │   └── storage.ts                # Utility functions for local storage
│   ├── App.tsx                       # Main application component
│   └── index.tsx                     # Entry point for the React application
├── package.json                      # npm configuration file
├── tsconfig.json                     # TypeScript configuration file
└── README.md                         # Project documentation
```

## Setup Instructions
1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd neapolitan-dictionary-app
   ```

2. **Install Dependencies**: 
   ```
   npm install
   ```

3. **Run the Application**: 
   ```
   npm start
   ```

4. **Open in Browser**: Navigate to `http://localhost:3000` to view the application.

## Usage
- Use the search bar to find words in the dictionary.
- Apply filters to narrow down search results.
- Access the accessibility panel to adjust settings as needed.
- View statistics about the dictionary in the designated section.

## Contribution
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.