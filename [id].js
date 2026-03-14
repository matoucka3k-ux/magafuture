// pages/shipping.js
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./policy.module.css";

export default function ShippingPage() {
  return (
    <>
      <Head>
        <title>Shipping Policy — MAGA Premium Essentials</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.header}>
          <span className={styles.label}>Logistics</span>
          <h1 className={styles.title}>Shipping Policy</h1>
        </div>
        <div className={styles.content}>
          <section>
            <h2>Processing Time</h2>
            <p>All orders are processed within <strong>2–4 business days</strong> of payment confirmation. You will receive an email confirmation once your order has shipped.</p>
          </section>
          <section>
            <h2>Shipping Zones & Estimated Delivery</h2>
            <table className={styles.table}>
              <thead>
                <tr><th>Zone</th><th>Method</th><th>Estimated Time</th></tr>
              </thead>
              <tbody>
                <tr><td>Africa</td><td>Standard</td><td>5–10 business days</td></tr>
                <tr><td>Europe</td><td>Standard</td><td>7–14 business days</td></tr>
                <tr><td>North America</td><td>Standard</td><td>10–18 business days</td></tr>
                <tr><td>Rest of World</td><td>Standard</td><td>14–21 business days</td></tr>
              </tbody>
            </table>
            <p>Express shipping is available at checkout for select destinations.</p>
          </section>
          <section>
            <h2>Tracking</h2>
            <p>Once your order ships, you will receive a tracking number via email. Please allow 24–48 hours for tracking information to update.</p>
          </section>
          <section>
            <h2>Customs & Duties</h2>
            <p>International orders may be subject to import duties and taxes levied by the destination country. These charges are the responsibility of the customer. MAGA has no control over these charges and cannot predict their amount.</p>
          </section>
          <section>
            <h2>Lost or Delayed Packages</h2>
            <p>If your package is significantly delayed or appears lost, please contact us at <a href="mailto:matoucka3K@gmail.com">matoucka3K@gmail.com</a> and we will work with you to resolve the issue.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
