/* components/Footer.module.css */

.footer {
  background: #050505;
  border-top: 1px solid var(--border);
  padding: 64px 24px 32px;
  margin-top: 80px;
}

.inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
}

.brand .logo {
  font-family: var(--font-display);
  font-size: 36px;
  letter-spacing: 6px;
  margin-bottom: 8px;
}

.tagline {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 12px;
}

.sub {
  font-size: 14px;
  color: var(--warm-grey);
  line-height: 1.7;
  max-width: 260px;
}

.col h4 {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 20px;
}

.col a {
  display: block;
  font-size: 14px;
  color: var(--warm-grey);
  margin-bottom: 12px;
  transition: color 0.2s;
}

.col a:hover {
  color: var(--off-white);
}

.gold {
  color: var(--gold);
}

.bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 32px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.bottom p {
  font-size: 13px;
  color: var(--warm-grey);
}

@media (max-width: 768px) {
  .inner {
    grid-template-columns: 1fr 1fr;
  }
  .brand {
    grid-column: 1 / -1;
  }
  .bottom {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .inner {
    grid-template-columns: 1fr;
  }
}
