// frontend/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import QRScanner from './components/QRScanner';
import ProductDetailPage from './components/ProductDetailPage'; 

function App() {
    const [scannedSerialNumber, setScannedSerialNumber] = useState(null);

    const handleScan = (serialNumber) => {
      setScannedSerialNumber(serialNumber);
      const redirectURL = `/product/${serialNumber}`;
      console.log("Yönlendirme URL'si (handleScan içinde):", redirectURL);
      console.log("Seri Numarası (handleScan içinde):", serialNumber); 
      window.location.href = redirectURL;
  };

    return (
        <Router> 
            <Routes> 
                <Route path="/" element={
                    <div style={{ textAlign: 'center', padding: '20px', marginLeft:500 }}>
                        <h1 style={{color:"black"}}>QR Kod Okutma alanı</h1>
                        <QRScanner onScan={handleScan} />
                    </div>
                } />
                <Route path="/product/:serialNumber" element={<ProductDetailPage />} /> 
            </Routes>
        </Router>
    );
}

export default App;