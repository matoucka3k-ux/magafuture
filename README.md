# MAKE AFRICA GREAT AGAIN — Premium Essentials Store

A full e-commerce website built with **Next.js 14**, **PayPal** integration, and ready for deployment on **Vercel**.

---

## 🚀 Quick Deploy to Vercel

### Step 1 — Push to GitHub
1. Create a new repository on GitHub (e.g. `maga-store`)
2. Push this folder to your repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/maga-store.git
git push -u origin main
```

### Step 2 — Get your PayPal Client ID
1. Go to https://developer.paypal.com
2. Log in with your PayPal Business account (matoucka3K@gmail.com)
3. Go to **Apps & Credentials** → **Live** tab
4. Create a new app or use an existing one
5. Copy the **Client ID**

### Step 3 — Deploy on Vercel
1. Go to https://vercel.com and sign in with GitHub
2. Click **New Project** → Import your `maga-store` repository
3. In **Environment Variables**, add:
   ```
   NEXT_PUBLIC_PAYPAL_CLIENT_ID = [your PayPal Client ID from Step 2]
   NEXT_PUBLIC_PAYPAL_MODE = production
   ```
4. Click **Deploy** — done! ✅

---

## 🛠 Local Development

```bash
npm install
```

Create a `.env.local` file (copy from `.env.local.example`):
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your PayPal Client ID:
```
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_client_id_here
NEXT_PUBLIC_PAYPAL_MODE=sandbox
```

> For local testing, use `sandbox` mode and use PayPal sandbox credentials.

Then run the dev server:
```bash
npm run dev
```

Open http://localhost:3000

---

## 📁 Project Structure

```
maga-store/
├── pages/
│   ├── _app.js          # App wrapper (PayPal + Cart providers)
│   ├── _document.js     # HTML document
│   ├── index.js         # Homepage
│   ├── shop.js          # All products page
│   ├── cart.js          # Shopping cart
│   ├── checkout.js      # PayPal checkout
│   ├── shipping.js      # Shipping policy
│   ├── returns.js       # Returns policy
│   ├── 404.js           # Custom 404
│   └── product/
│       └── [id].js      # Product detail page
├── components/
│   ├── Navbar.js        # Sticky navigation
│   ├── Footer.js        # Site footer
│   └── ProductCard.js   # Product grid card
├── lib/
│   ├── products.js      # Product data
│   └── CartContext.js   # Cart state (in-memory, no data leaks)
├── styles/
│   └── globals.css      # Global styles
├── public/              # Static assets
├── .env.local.example   # Environment variable template
├── .gitignore           # Ignores .env.local (never commit keys)
├── vercel.json          # Vercel config + security headers
└── next.config.js       # Next.js config
```

---

## 🔒 Security Notes

- **No data is stored**: Cart lives in React memory only (useReducer), cleared on page close
- **No API keys in code**: PayPal Client ID is loaded from environment variable
- **.env.local is git-ignored**: Your credentials never reach GitHub
- **Security headers**: X-Frame-Options, CSP, XSS-Protection configured in vercel.json
- **PayPal handles payments**: No card data ever touches your server
- **HTTPS enforced**: Vercel provides SSL by default

---

## 💳 PayPal Configuration

The store sends payments to: **matoucka3K@gmail.com**

This is hardcoded in `pages/checkout.js` as the `payee.email_address`.  
To change the receiving account, update `PAYPAL_BUSINESS_EMAIL` in that file.

---

## 🛍 Adding Products

Edit `lib/products.js` — add a new object to the `products` array:

```js
{
  id: "unique-id",          // URL-safe string
  name: "Product Name",
  subtitle: "Short description",
  price: 49.99,             // EUR
  category: "Apparel",      // Apparel | Accessories | Lifestyle
  sizes: ["S", "M", "L"],
  colors: ["Black", "White"],
  description: "Full product description...",
  badge: "NEW",             // or null
  emoji: "👕",
}
```

The product page and shop page update automatically.

---

## 📧 Contact

Store email: matoucka3K@gmail.com
