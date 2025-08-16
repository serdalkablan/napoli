export interface Word {
    id: string;
    neapolitan: string;
    italian: string;
    english: string;
    pronunciation: string;
    category: string;
    difficulty: 'basic' | 'intermediate' | 'advanced';
    etymology?: string;
    examples: {
        neapolitan: string;
        italian: string;
        english: string;
    };
    audio_file?: string;
    created_at: string;
    updated_at: string;
}

export interface Filter {
    language: 'all' | 'neapolitan' | 'italian' | 'english';
    category: string;
    difficulty: 'all' | 'basic' | 'intermediate' | 'advanced';
}