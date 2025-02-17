
import React from 'react';
import styles from './ProductDetails.module.css';

const ProductDetails = ({ product }) => {
    if (!product) {
        return <p className={styles.loadingText}>Ürün bilgileri yükleniyor veya ürün bulunamadı...</p>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={product.image_url} alt={product.name} className={styles.productImage} />
            </div>
            <div className={styles.detailsContainer}>
                <h2 className={styles.productName}>{product.name}</h2>
                <DetailRow label="Seri Numarası" value={product.serial_number} />
                <DetailRow label="Barkod Numarası" value={product.barcode_number} />
                <DetailRow label="Üretim Tarihi" value={new Date(product.production_date).toLocaleDateString()} />
                <DetailRow label="Üretim Yeri" value={product.production_place} />
                <DetailRow label="Son Tüketim Tarihi" value={new Date(product.expiry_date).toLocaleDateString()} />
                <DetailRow label="İçindekiler" value={product.ingredients} />
                <DetailRow label="Saklanma Koşulları" value={product.storage_conditions} />
            </div>
            
            
        </div>
    );
};

const DetailRow = ({ label, value }) => (
    <div className={styles.detailRow}>
        <b className={styles.detailLabel}>{label}:</b>
        <span className={styles.detailValue}>{value}</span>
    </div>
);


export default ProductDetails;