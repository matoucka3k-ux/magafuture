// components/Navbar.js
import { useState } from "react";
import Link from "next/link";
import { useCart } from "../lib/CartContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoAccent}>M</span>AGA
        </Link>

        {/* Desktop links */}
        <div className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/shop" className={styles.link}>Shop</Link>
          <Link href="/#about" className={styles.link}>About</Link>
          <Link href="/#contact" className={styles.link}>Contact</Link>
        </div>

        {/* Cart */}
        <Link href="/cart" className={styles.cartBtn}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {itemCount > 0 && <span className={styles.badge}>{itemCount}</span>}
        </Link>

        {/* Mobile hamburger */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.burgerOpen : ""}></span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/#about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/cart" onClick={() => setMenuOpen(false)}>Cart ({itemCount})</Link>
        </div>
      )}
    </nav>
  );
}
