// pages/cart.js
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../lib/CartContext";
import styles from "./cart.module.css";

export default function CartPage() {
  const { items, total, removeItem, updateQty } = useCart();

  return (
    <>
      <Head>
        <title>Your Cart — MAGA Premium Essentials</title>
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>Review Order</span>
          <h1 className={styles.title}>Your Cart</h1>
        </div>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>🛒</span>
            <h2>Your cart is empty</h2>
            <p>Discover our premium collection and add some essentials.</p>
            <Link href="/shop" className={styles.shopBtn}>
              Browse the Shop
            </Link>
          </div>
        ) : (
          <div className={styles.layout}>
            {/* Items */}
            <div className={styles.items}>
              {items.map((item) => (
                <div key={item.key} className={styles.item}>
                  <div className={styles.itemVisual}>
                    <span className={styles.itemEmoji}>{item.product.emoji}</span>
                  </div>
                  <div className={styles.itemInfo}>
                    <div className={styles.itemName}>{item.product.name}</div>
                    <div className={styles.itemMeta}>
                      {item.color} · {item.size}
                    </div>
                    <div className={styles.itemPrice}>
                      €{(item.price * item.quantity).toFixed(2)}
                      {item.quantity > 1 && (
                        <span className={styles.unitPrice}> (€{item.price.toFixed(2)} each)</span>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemActions}>
                    <div className={styles.qtyControl}>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => updateQty(item.key, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >−</button>
                      <span className={styles.qtyNum}>{item.quantity}</span>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => updateQty(item.key, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >+</button>
                    </div>
                    <button
                      className={styles.removeBtn}
                      onClick={() => removeItem(item.key)}
                      aria-label="Remove item"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className={styles.summary}>
              <h2 className={styles.summaryTitle}>Order Summary</h2>

              <div className={styles.summaryRows}>
                {items.map((item) => (
                  <div key={item.key} className={styles.summaryRow}>
                    <span>{item.product.name} ×{item.quantity}</span>
                    <span>€{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className={styles.summaryDivider} />
                <div className={styles.summaryRow}>
                  <span>Shipping</span>
                  <span className={styles.goldText}>Calculated at checkout</span>
                </div>
                <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                  <span>Total</span>
                  <span className={styles.goldText}>€{total.toFixed(2)}</span>
                </div>
              </div>

              <Link href="/checkout" className={styles.checkoutBtn}>
                Proceed to Checkout →
              </Link>

              <Link href="/shop" className={styles.continueBtn}>
                ← Continue Shopping
              </Link>

              <div className={styles.secureNote}>
                <span>🔒</span>
                <span>Secure checkout powered by PayPal</span>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
