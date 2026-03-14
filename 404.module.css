// pages/shop.js
import { useState, useMemo } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../lib/products";
import styles from "./shop.module.css";

const CATEGORIES = ["All", "Apparel", "Accessories", "Lifestyle"];

export default function ShopPage() {
  const router = useRouter();
  const initialCat = router.query.cat || "All";
  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [sort, setSort] = useState("default");

  const filtered = useMemo(() => {
    let list = activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [activeCategory, sort]);

  return (
    <>
      <Head>
        <title>Shop — MAGA Premium Essentials</title>
        <meta name="description" content="Browse the full MAGA collection — Premium tees, hoodies, caps and lifestyle essentials." />
      </Head>

      <Navbar />

      <div className={styles.pageHeader}>
        <span className={styles.sectionLabel}>The Collection</span>
        <h1 className={styles.pageTitle}>Shop All</h1>
        <p className={styles.pageDesc}>
          {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className={styles.controls}>
        <div className={styles.filters}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <select
          className={styles.sortSelect}
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Sort: Featured</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
        </select>
      </div>

      <main className={styles.main}>
        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <p>No products in this category yet. Check back soon.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
