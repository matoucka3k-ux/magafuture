// components/Footer.js
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.gold}>M</span>AGA
          </div>
          <p className={styles.tagline}>Make Africa Great Again</p>
          <p className={styles.sub}>Premium Essentials — Built for the future of Africa.</p>
        </div>

        <div className={styles.col}>
          <h4>Shop</h4>
          <Link href="/shop">All Products</Link>
          <Link href="/shop?cat=Apparel">Apparel</Link>
          <Link href="/shop?cat=Accessories">Accessories</Link>
          <Link href="/shop?cat=Lifestyle">Lifestyle</Link>
        </div>

        <div className={styles.col}>
          <h4>Info</h4>
          <Link href="/#about">About</Link>
          <Link href="/shipping">Shipping Policy</Link>
          <Link href="/returns">Returns</Link>
          <Link href="/#contact">Contact</Link>
        </div>

        <div className={styles.col}>
          <h4>Follow</h4>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter / X</a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Make Africa Great Again. All rights reserved.</p>
        <p>Payments secured by <span className={styles.gold}>PayPal</span></p>
      </div>
    </footer>
  );
}
