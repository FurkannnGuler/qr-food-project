// frontend/src/components/ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams hook'unu import edin
import ProductDetails from './ProductDetails';
import axios from 'axios';


function ProductDetailPage() {
    const { serialNumber } = useParams(); // URL'den seri numarasını alın
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            if (serialNumber) {
                setLoading(true);
                setError(null);
                try {
                    const response = await axios.get(`http://localhost:5000/api/product/${serialNumber}`);
                    setProduct(response.data);
                } catch (error) {
                    setError(error);
                    setProduct(null);
                } finally {
                    setLoading(false);
                }
            } else {
                setError("Seri numarası bulunamadı.");
                setLoading(false);
            }
        };

        fetchProduct();
    }, [serialNumber]);

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:1700, justifyContent:"center"}}>
        <div style={{ textAlign: 'center', padding: '20px', color:"black"    }}>
        
            {loading && <p>Ürün bilgileri yükleniyor...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ProductDetails product={product} />
        
        </div>
        </div>
    );
}

export default ProductDetailPage;