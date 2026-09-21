import React, { useState, useEffect } from 'react';

const DimensionTool = () => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            background: 'rgba(0, 0, 0, 0.75)',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '14px',
            fontWeight: 'bold',
            zIndex: 99999,
            pointerEvents: 'none',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
        }}>
            {dimensions.width}px &times; {dimensions.height}px
        </div>
    );
};

export default DimensionTool;
