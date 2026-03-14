// pages/index.js
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../lib/products";
import styles from "./index.module.css";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      <Head>
        <title>MAGA — Make Africa Great Again | Premium Essentials</title>
        <meta name="description" content="Make Africa Great Again — Premium streetwear and lifestyle essentials. Built in Africa, shipped worldwide." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroNoise} />
        <div className={styles.heroLines} />
        <div className={styles.heroContent}>
          <div className={styles.heroPre}>Premium Essentials</div>
          <h1 className={styles.heroTitle}>
            MAKE<br />
            <span className={styles.heroGold}>AFRICA</span><br />
            GREAT AGAIN
          </h1>
          <p className={styles.heroSub}>
            Built in Africa. Worn by the bold.<br />
            Shipped to every corner of the world.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/shop" className={styles.btnPrimary}>
              Shop Now
            </Link>
            <Link href="/#about" className={styles.btnSecondary}>
              Our Story
            </Link>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <span>↓</span>
          <span>Scroll</span>
        </div>
      </section>

      {/* TICKER */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {Array(12).fill("MAKE AFRICA GREAT AGAIN ✦ PREMIUM ESSENTIALS ✦ BUILT FOR THE BOLD ✦").map((t, i) => (
            <span key={i}>{t}&nbsp;&nbsp;</span>
          ))}
        </div>
      </div>

      {/* FEATURED PRODUCTS */}
      <section className={styles.featured}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionLabel}>Featured</span>
          <h2 className={styles.sectionTitle}>Best Sellers</h2>
        </div>
        <div className={styles.grid}>
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className={styles.viewAll}>
          <Link href="/shop" className={styles.btnOutline}>
            View All Products →
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.about} id="about">
        <div className={styles.aboutInner}>
          <div className={styles.aboutText}>
            <span className={styles.sectionLabel}>Our Mission</span>
            <h2 className={styles.aboutTitle}>
              Worn by those who believe in Africa's future.
            </h2>
            <p>
              MAGA — Make Africa Great Again — is more than a brand. It's a
              movement. We create premium essentials that carry the pride,
              resilience, and ambition of a continent on the rise.
            </p>
            <p>
              Every piece is made with intention: premium materials, ethical
              production, and designs that speak without apology. Wear the
              change you want to see.
            </p>
            <Link href="/shop" className={styles.btnPrimary}>
              Shop the Collection
            </Link>
          </div>
          <div className={styles.aboutVisual}>
            <div className={styles.aboutCard}>
              <div className={styles.stat}>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLabel}>Organic Cotton</span>
              </div>
            </div>
            <div className={styles.aboutCard}>
              <div className={styles.stat}>
                <span className={styles.statNum}>54</span>
                <span className={styles.statLabel}>Countries Shipping</span>
              </div>
            </div>
            <div className={styles.aboutCard}>
              <div className={styles.stat}>
                <span className={styles.statNum}>Zero</span>
                <span className={styles.statLabel}>Compromise</span>
              </div>
            </div>
            <div className={styles.aboutCard}>
              <div className={styles.stat}>
                <span className={styles.statNum}>∞</span>
                <span className={styles.statLabel}>African Pride</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.values}>
        {[
          { icon: "🌍", title: "Made in Africa", text: "Sourced and crafted on the continent, supporting local artisans and manufacturers." },
          { icon: "♻️", title: "Sustainable", text: "Organic cotton, recycled packaging, and ethical production at every step." },
          { icon: "✈️", title: "Ships Worldwide", text: "From Dakar to Paris, Lagos to New York — we ship everywhere." },
          { icon: "🔒", title: "Secure Payments", text: "All payments processed securely through PayPal. Your data is never stored." },
        ].map((v) => (
          <div key={v.title} className={styles.value}>
            <span className={styles.valueIcon}>{v.icon}</span>
            <h3 className={styles.valueTitle}>{v.title}</h3>
            <p className={styles.valueText}>{v.text}</p>
          </div>
        ))}
      </section>

      {/* CONTACT */}
      <section className={styles.contact} id="contact">
        <div className={styles.contactInner}>
          <span className={styles.sectionLabel}>Get in Touch</span>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.contactSub}>
            Questions about your order? Wholesale inquiries? We'd love to hear from you.
          </p>
          <a href="mailto:matoucka3K@gmail.com" className={styles.btnPrimary}>
            matoucka3K@gmail.com
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
