// ScrollContext.js
import React, { createContext, useState } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const [scrollAmount, setScrollAmount] = useState(0);

    return (
        <ScrollContext.Provider value={{ scrollAmount, setScrollAmount }}>
            {children}
        </ScrollContext.Provider>
    );
};
