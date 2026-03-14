/* components/ProductCard.module.css */

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-4px);
  border-color: rgba(212, 175, 55, 0.5);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(212, 175, 55, 0.1);
}

.badge {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 2;
  background: var(--gold);
  color: var(--black);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 2px;
  padding: 4px 10px;
  text-transform: uppercase;
}

.visual {
  position: relative;
  aspect-ratio: 1;
  background: linear-gradient(135deg, #1a1a14, #0d0d08);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.visual::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.08) 0%, transparent 60%);
}

.visualInner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.emoji {
  font-size: 80px;
  filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.6));
  transition: transform 0.3s ease;
}

.card:hover .emoji {
  transform: scale(1.1) translateY(-4px);
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(to top, var(--card-bg), transparent);
}

.info {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.category {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
}

.name {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 1px;
  color: var(--off-white);
  margin-top: 2px;
}

.subtitle {
  font-size: 13px;
  color: var(--warm-grey);
  margin-bottom: 4px;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}

.price {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 22px;
  color: var(--gold);
}

.cta {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 1px;
  color: var(--warm-grey);
  transition: color 0.2s;
}

.card:hover .cta {
  color: var(--gold);
}
