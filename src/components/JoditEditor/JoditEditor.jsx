'use client'
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

export const Editor = ({ placeholder, setContent, content }) => {
    const editor = useRef(null);
    

    const config = useMemo(() => ({
        readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        placeholder: placeholder || 'Start typings...'
    }),
        [placeholder]
    );

    return (
        <JoditEditor
            ref={editor}
            value={content.description}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => setContent(prev => ({ ...prev, description: newContent }))}
            onChange={() => { }} // keep this empty
        />
    );
};