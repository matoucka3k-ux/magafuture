// pages/checkout.js
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../lib/CartContext";
import styles from "./checkout.module.css";

// PayPal Business account email
const PAYPAL_BUSINESS_EMAIL = "matoucka3K@gmail.com";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const [{ isPending, isRejected }] = usePayPalScriptReducer();
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [paypalError, setPaypalError] = useState("");

  // Build line items for PayPal
  const paypalItems = items.map((item) => ({
    name: `${item.product.name} (${item.color}, ${item.size})`,
    unit_amount: {
      currency_code: "EUR",
      value: item.price.toFixed(2),
    },
    quantity: String(item.quantity),
  }));

  const itemTotal = items
    .reduce((s, i) => s + i.price * i.quantity, 0)
    .toFixed(2);

  function createOrder(data, actions) {
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          payee: {
            email_address: PAYPAL_BUSINESS_EMAIL,
          },
          description: "MAGA Premium Essentials Order",
          amount: {
            currency_code: "EUR",
            value: itemTotal,
            breakdown: {
              item_total: {
                currency_code: "EUR",
                value: itemTotal,
              },
            },
          },
          items: paypalItems,
        },
      ],
      application_context: {
        brand_name: "Make Africa Great Again",
        landing_page: "NO_PREFERENCE",
        user_action: "PAY_NOW",
      },
    });
  }

  function onApprove(data, actions) {
    return actions.order.capture().then((details) => {
      // Payment successful — clear cart, show confirmation
      const payer = details.payer;
      setOrderDetails({
        orderId: details.id,
        payerName: `${payer.name?.given_name || ""} ${payer.name?.surname || ""}`.trim(),
        payerEmail: payer.email_address,
        amount: details.purchase_units[0]?.amount?.value,
        currency: details.purchase_units[0]?.amount?.currency_code,
      });
      clearCart();
      setOrderComplete(true);
    });
  }

  function onError(err) {
    console.error("PayPal error:", err);
    setPaypalError(
      "Payment could not be processed. Please try again or contact support."
    );
  }

  function onCancel() {
    setPaypalError("Payment was cancelled. Your cart has been preserved.");
  }

  if (items.length === 0 && !orderComplete) {
    return (
      <>
        <Head><title>Checkout — MAGA</title></Head>
        <Navbar />
        <div className={styles.emptyState}>
          <h2>Nothing to checkout</h2>
          <p>Your cart is empty.</p>
          <Link href="/shop" className={styles.btn}>Shop Now</Link>
        </div>
        <Footer />
      </>
    );
  }

  if (orderComplete && orderDetails) {
    return (
      <>
        <Head><title>Order Confirmed — MAGA</title></Head>
        <Navbar />
        <div className={styles.success}>
          <div className={styles.successCard}>
            <div className={styles.successIcon}>✓</div>
            <h1 className={styles.successTitle}>Order Confirmed!</h1>
            <p className={styles.successSub}>
              Thank you{orderDetails.payerName ? `, ${orderDetails.payerName}` : ""}. Your payment has been received.
            </p>
            <div className={styles.orderInfo}>
              <div className={styles.orderRow}>
                <span>Order ID</span>
                <span className={styles.mono}>{orderDetails.orderId}</span>
              </div>
              <div className={styles.orderRow}>
                <span>Amount Paid</span>
                <span className={styles.gold}>
                  {orderDetails.currency} {parseFloat(orderDetails.amount).toFixed(2)}
                </span>
              </div>
              {orderDetails.payerEmail && (
                <div className={styles.orderRow}>
                  <span>Confirmation sent to</span>
                  <span>{orderDetails.payerEmail}</span>
                </div>
              )}
            </div>
            <p className={styles.successNote}>
              We'll process and ship your order within 2–4 business days.
              Questions? Email us at{" "}
              <a href="mailto:matoucka3K@gmail.com">matoucka3K@gmail.com</a>
            </p>
            <Link href="/shop" className={styles.btn}>
              Continue Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Checkout — MAGA Premium Essentials</title>
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>Secure Checkout</span>
          <h1 className={styles.title}>Complete Your Order</h1>
        </div>

        <div className={styles.layout}>
          {/* Order Summary */}
          <div className={styles.orderSummary}>
            <h2 className={styles.summaryHeading}>Order Summary</h2>
            <div className={styles.itemsList}>
              {items.map((item) => (
                <div key={item.key} className={styles.checkoutItem}>
                  <span className={styles.checkoutEmoji}>{item.product.emoji}</span>
                  <div className={styles.checkoutItemInfo}>
                    <div className={styles.checkoutItemName}>{item.product.name}</div>
                    <div className={styles.checkoutItemMeta}>
                      {item.color} · {item.size} · Qty {item.quantity}
                    </div>
                  </div>
                  <div className={styles.checkoutItemPrice}>
                    €{(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.summaryFooter}>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>€{total.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span className={styles.gold}>Calculated by PayPal</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                <span>Total</span>
                <span className={styles.gold}>€{total.toFixed(2)}</span>
              </div>
            </div>
            <Link href="/cart" className={styles.editCart}>
              ← Edit Cart
            </Link>
          </div>

          {/* PayPal Payment */}
          <div className={styles.paymentBox}>
            <h2 className={styles.paymentHeading}>Payment</h2>
            <p className={styles.paymentNote}>
              Complete your payment securely through PayPal. You can pay with your
              PayPal account or with a credit/debit card via PayPal.
            </p>

            <div className={styles.paypalWrap}>
              {isPending && (
                <div className={styles.loadingPaypal}>
                  <div className={styles.spinner} />
                  <span>Loading secure payment…</span>
                </div>
              )}

              {isRejected && (
                <div className={styles.paypalFailedLoad}>
                  <p>⚠️ PayPal could not load. Please check your internet connection and refresh.</p>
                </div>
              )}

              {!isPending && !isRejected && (
                <PayPalButtons
                  style={{
                    layout: "vertical",
                    color: "gold",
                    shape: "rect",
                    label: "pay",
                    height: 48,
                  }}
                  createOrder={createOrder}
                  onApprove={onApprove}
                  onError={onError}
                  onCancel={onCancel}
                  forceReRender={[itemTotal, paypalItems]}
                />
              )}
            </div>

            {paypalError && (
              <div className={styles.errorMsg}>
                <span>⚠️</span> {paypalError}
              </div>
            )}

            <div className={styles.securityInfo}>
              <div className={styles.securityItem}>
                <span>🔒</span>
                <span>256-bit SSL encryption</span>
              </div>
              <div className={styles.securityItem}>
                <span>🛡️</span>
                <span>PayPal Buyer Protection</span>
              </div>
              <div className={styles.securityItem}>
                <span>💳</span>
                <span>No card details stored on our servers</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
