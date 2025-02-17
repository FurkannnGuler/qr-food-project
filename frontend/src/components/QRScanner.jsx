
import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

const QRScanner = ({ onScan }) => {
    const [facingMode, setFacingMode] = useState('environment'); 

    const handleError = (err) => {
        console.error(err);
    };

    const handleScan = (result) => {
        if (result) {
            onScan(result.text);
        }
    };

    return (
        <div>
            <QrScanner
                delay={300}
                onError={handleError}
                onScan={handleScan}
                facingMode={facingMode}
                style={{ width: '100%' }}
            />
        </div>
    );
};

export default QRScanner;