import React, { useState } from 'react';

const AccessibilityPanel: React.FC = () => {
    const [fontSize, setFontSize] = useState<string>('normal');
    const [highContrast, setHighContrast] = useState<boolean>(false);
    const [reduceMotion, setReduceMotion] = useState<boolean>(false);

    const handleFontSizeChange = (size: string) => {
        setFontSize(size);
        document.body.className = size; // Apply font size class to body
    };

    const toggleHighContrast = () => {
        setHighContrast(!highContrast);
        document.body.classList.toggle('high-contrast', !highContrast);
    };

    const toggleReduceMotion = () => {
        setReduceMotion(!reduceMotion);
        document.body.classList.toggle('reduce-motion', !reduceMotion);
    };

    return (
        <div className="accessibility-panel">
            <h3>Accessibility Options</h3>
            <div>
                <label>Font Size:</label>
                <button onClick={() => handleFontSizeChange('small')}>Small</button>
                <button onClick={() => handleFontSizeChange('normal')}>Normal</button>
                <button onClick={() => handleFontSizeChange('large')}>Large</button>
                <button onClick={() => handleFontSizeChange('xl')}>Extra Large</button>
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={highContrast} onChange={toggleHighContrast} />
                    High Contrast
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={reduceMotion} onChange={toggleReduceMotion} />
                    Reduce Motion
                </label>
            </div>
        </div>
    );
};

export default AccessibilityPanel;