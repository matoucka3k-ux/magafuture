// pages/_app.js
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { CartProvider } from "../lib/CartContext";
import "../styles/globals.css";

// PayPal is loaded client-side only; CLIENT_ID comes from env var
const paypalOptions = {
  "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test",
  currency: "EUR",
  intent: "capture",
  "disable-funding": "credit,card",
  "enable-funding": "paypal",
};

export default function App({ Component, pageProps }) {
  return (
    <PayPalScriptProvider options={paypalOptions}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </PayPalScriptProvider>
  );
}
