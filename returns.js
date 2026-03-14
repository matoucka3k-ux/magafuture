/* pages/index.module.css */

/* HERO */
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--black);
}

.heroNoise {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  opacity: 0.4;
  pointer-events: none;
}

.heroLines {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(212, 175, 55, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
}

.heroContent {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 24px;
  max-width: 900px;
  animation: fadeUp 0.8s ease forwards;
}

.heroPre {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 24px;
}

.heroTitle {
  font-family: var(--font-display);
  font-size: clamp(64px, 12vw, 140px);
  line-height: 0.9;
  letter-spacing: 4px;
  color: var(--off-white);
  margin-bottom: 32px;
}

.heroGold {
  color: var(--gold);
  position: relative;
  display: inline-block;
}

.heroGold::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gold);
  opacity: 0.4;
}

.heroSub {
  font-size: 18px;
  color: var(--warm-grey);
  line-height: 1.7;
  max-width: 480px;
  margin: 0 auto 40px;
}

.heroCtas {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.heroScroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--warm-grey);
  animation: fadeUp 1.2s ease forwards;
  opacity: 0;
  animation-delay: 0.4s;
}

/* TICKER */
.ticker {
  overflow: hidden;
  background: var(--gold);
  padding: 12px 0;
}

.tickerTrack {
  display: flex;
  white-space: nowrap;
  animation: ticker 30s linear infinite;
}

.tickerTrack span {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--black);
}

@keyframes ticker {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* BUTTONS */
.btnPrimary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--gold);
  color: var(--black);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 16px 36px;
  border-radius: 2px;
  transition: all 0.2s;
  border: 2px solid var(--gold);
}

.btnPrimary:hover {
  background: transparent;
  color: var(--gold);
}

.btnSecondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--off-white);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 16px 36px;
  border-radius: 2px;
  border: 2px solid rgba(245, 240, 232, 0.2);
  transition: all 0.2s;
}

.btnSecondary:hover {
  border-color: var(--gold);
  color: var(--gold);
}

.btnOutline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--gold);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 14px 32px;
  border-radius: 2px;
  border: 2px solid var(--gold);
  transition: all 0.2s;
}

.btnOutline:hover {
  background: var(--gold);
  color: var(--black);
}

/* SECTION HELPERS */
.sectionLabel {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--gold);
  display: block;
  margin-bottom: 12px;
}

.sectionTitle {
  font-family: var(--font-display);
  font-size: clamp(32px, 5vw, 56px);
  letter-spacing: 3px;
  color: var(--off-white);
}

/* FEATURED */
.featured {
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 24px;
}

.sectionHead {
  margin-bottom: 48px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.viewAll {
  text-align: center;
  margin-top: 48px;
}

/* ABOUT */
.about {
  background: #0d0d0a;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 100px 24px;
}

.aboutInner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.aboutText p {
  font-size: 16px;
  color: var(--warm-grey);
  line-height: 1.8;
  margin-bottom: 20px;
}

.aboutTitle {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 48px);
  letter-spacing: 2px;
  color: var(--off-white);
  margin-bottom: 28px;
  line-height: 1;
}

.aboutVisual {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.aboutCard {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 32px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;
}

.aboutCard:hover {
  border-color: rgba(212, 175, 55, 0.4);
}

.stat {
  text-align: center;
}

.statNum {
  display: block;
  font-family: var(--font-display);
  font-size: 40px;
  letter-spacing: 2px;
  color: var(--gold);
}

.statLabel {
  display: block;
  font-family: var(--font-heading);
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--warm-grey);
  margin-top: 4px;
}

/* VALUES */
.values {
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.value {
  text-align: center;
  padding: 32px 16px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--card-bg);
  transition: border-color 0.2s, transform 0.2s;
}

.value:hover {
  border-color: rgba(212, 175, 55, 0.4);
  transform: translateY(-2px);
}

.valueIcon {
  font-size: 36px;
  display: block;
  margin-bottom: 16px;
}

.valueTitle {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
  color: var(--off-white);
  margin-bottom: 8px;
}

.valueText {
  font-size: 13px;
  color: var(--warm-grey);
  line-height: 1.7;
}

/* CONTACT */
.contact {
  background: #0d0d0a;
  border-top: 1px solid var(--border);
  padding: 100px 24px;
  text-align: center;
}

.contactInner {
  max-width: 600px;
  margin: 0 auto;
}

.contactSub {
  font-size: 16px;
  color: var(--warm-grey);
  margin: 16px 0 36px;
}

/* Responsive */
@media (max-width: 1024px) {
  .values {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .aboutInner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .values {
    grid-template-columns: 1fr;
  }
}
