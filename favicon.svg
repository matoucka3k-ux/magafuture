/* pages/shop.module.css */

.pageHeader {
  max-width: 1200px;
  margin: 60px auto 0;
  padding: 0 24px;
}

.sectionLabel {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--gold);
  display: block;
  margin-bottom: 8px;
}

.pageTitle {
  font-family: var(--font-display);
  font-size: clamp(48px, 8vw, 96px);
  letter-spacing: 4px;
  color: var(--off-white);
  line-height: 0.9;
}

.pageDesc {
  font-size: 14px;
  color: var(--warm-grey);
  margin-top: 12px;
}

.controls {
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--border);
  padding-bottom: 24px;
}

.filters {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filterBtn {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 8px 20px;
  border: 1px solid var(--border);
  border-radius: 2px;
  color: var(--warm-grey);
  background: transparent;
  transition: all 0.2s;
}

.filterBtn:hover {
  border-color: var(--gold);
  color: var(--gold);
}

.filterBtn.active {
  background: var(--gold);
  border-color: var(--gold);
  color: var(--black);
}

.sortSelect {
  background: var(--card-bg);
  border: 1px solid var(--border);
  color: var(--warm-grey);
  font-family: var(--font-heading);
  font-size: 13px;
  letter-spacing: 1px;
  padding: 8px 16px;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s;
}

.sortSelect:hover {
  border-color: rgba(212, 175, 55, 0.4);
}

.main {
  max-width: 1200px;
  margin: 40px auto 80px;
  padding: 0 24px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.empty {
  text-align: center;
  padding: 80px 0;
  color: var(--warm-grey);
  font-size: 16px;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
