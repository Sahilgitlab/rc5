import React from 'react';

export function QRCodeDisplay({ url, size = 200 }) {
    const encodedUrl = encodeURIComponent(url);
    const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodedUrl}&color=4e3c2f`; // Using brand color hex

    return (
        <div className="bg-white p-4 rounded-xl shadow-lg inline-block border-2 border-brand-100">
            <img src={qrSrc} alt="QR Code" width={size} height={size} className="mix-blend-multiply" />
        </div>
    );
}

export default QRCodeDisplay;
