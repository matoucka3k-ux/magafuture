// lib/products.js — all product data in one place

export const products = [
  {
    id: "tee-black",
    name: "MAGA Classic Tee",
    subtitle: "Black Edition",
    price: 39.99,
    category: "Apparel",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Forest Green"],
    description:
      "Premium heavyweight cotton tee. 100% organic cotton, 220gsm. Screen-printed logo that won't crack or fade. Made in Africa, shipped worldwide.",
    badge: "BESTSELLER",
    emoji: "👕",
    gradient: "from-zinc-900 to-zinc-700",
  },
  {
    id: "hoodie-khaki",
    name: "Heritage Hoodie",
    subtitle: "Khaki / Earth Tone",
    price: 79.99,
    category: "Apparel",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Khaki", "Charcoal", "Cream"],
    description:
      "Heavyweight 380gsm fleece hoodie. Kangaroo pocket, ribbed cuffs. Embroidered chest logo. Oversized fit — size down for a regular fit.",
    badge: "NEW",
    emoji: "🧥",
    gradient: "from-amber-800 to-yellow-700",
  },
  {
    id: "cap-red",
    name: "Pan-African Cap",
    subtitle: "Structured 6-Panel",
    price: 34.99,
    category: "Accessories",
    sizes: ["One Size"],
    colors: ["Red/Gold", "Black/Green", "All Black"],
    description:
      "Structured 6-panel cap with embroidered MAGA logo. Adjustable leather strap. Premium wool-blend shell. One size fits most.",
    badge: "ICONIC",
    emoji: "🧢",
    gradient: "from-red-700 to-red-500",
  },
  {
    id: "tote-natural",
    name: "Continental Tote",
    subtitle: "Organic Canvas",
    price: 29.99,
    category: "Accessories",
    sizes: ["One Size"],
    colors: ["Natural", "Black"],
    description:
      "Heavy-duty 12oz organic canvas tote. Screen-printed continent map on front. Reinforced handles. 38cm × 42cm capacity.",
    badge: null,
    emoji: "👜",
    gradient: "from-stone-600 to-stone-400",
  },
  {
    id: "hoodie-black",
    name: "Unity Hoodie",
    subtitle: "All Black Everything",
    price: 79.99,
    category: "Apparel",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    description:
      "Blackout edition Unity Hoodie. Tonal embroidery on chest and back. Same premium 380gsm fleece construction. Limited production run.",
    badge: "LIMITED",
    emoji: "🖤",
    gradient: "from-neutral-900 to-neutral-600",
  },
  {
    id: "mug-gold",
    name: "Gold Standard Mug",
    subtitle: "Ceramic 350ml",
    price: 22.99,
    category: "Lifestyle",
    sizes: ["One Size"],
    colors: ["Matte Black/Gold", "White/Gold"],
    description:
      "Ceramic mug with gold-foil MAGA logo. Dishwasher safe. 350ml capacity. Perfect for the morning ritual of someone building Africa's future.",
    badge: null,
    emoji: "☕",
    gradient: "from-yellow-600 to-amber-500",
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);
