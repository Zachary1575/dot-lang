import * as React from 'react';

// MUI
import Textarea from '@mui/joy/Textarea';

import './Lang.css';

export default function lang() {
    return(
        <>
            <div className="outer_container">
                <h1>.-lang Compiler</h1>
                <div>
                    <Textarea minRows={2} variant="soft" />
                </div>
            </div>
        </>
    );
}