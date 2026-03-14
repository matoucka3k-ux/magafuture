// components/ProductCard.js
import Link from "next/link";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} className={styles.card}>
      {product.badge && (
        <span className={styles.badge}>{product.badge}</span>
      )}

      {/* Visual placeholder using gradient + emoji */}
      <div className={`${styles.visual} ${styles[product.id] || ""}`}>
        <div className={styles.visualInner}>
          <span className={styles.emoji}>{product.emoji}</span>
        </div>
        <div className={styles.overlay} />
      </div>

      <div className={styles.info}>
        <div className={styles.category}>{product.category}</div>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.subtitle}>{product.subtitle}</p>
        <div className={styles.footer}>
          <span className={styles.price}>€{product.price.toFixed(2)}</span>
          <span className={styles.cta}>View →</span>
        </div>
      </div>
    </Link>
  );
}
