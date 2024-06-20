import React, { useEffect } from 'react';

export const InstaFeed = ({ url }) => {
    useEffect(() => {
        const scriptId = 'instagram-embed-script';

        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://www.instagram.com/embed.js';
            script.id = scriptId;
            document.body.appendChild(script);

            script.onload = () => {
                if (window.instgrm) {
                    window.instgrm.Embeds.process();
                }
            };
        } else {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        }

        return () => {
            const existingScript = document.getElementById(scriptId);
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, [url]);

    return (
        <blockquote
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="12"
            style={{
                background: '#FFF',
                border: 0,
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '600px',
                minWidth: '300px',
                padding: 0,
                width: '99.375%',
                maxHeight: '100%',
            }}
        ></blockquote>
    );
};