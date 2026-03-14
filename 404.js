/* pages/404.module.css */

.wrap {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 24px;
}

.num {
  font-family: var(--font-display);
  font-size: clamp(100px, 20vw, 200px);
  letter-spacing: 8px;
  color: rgba(212, 175, 55, 0.12);
  line-height: 1;
  margin-bottom: -20px;
}

.title {
  font-family: var(--font-display);
  font-size: clamp(28px, 5vw, 52px);
  letter-spacing: 3px;
  color: var(--off-white);
  margin-bottom: 16px;
}

.desc {
  font-size: 15px;
  color: var(--warm-grey);
  max-width: 400px;
  margin-bottom: 40px;
  line-height: 1.7;
}

.links {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  background: var(--gold);
  color: var(--black);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 14px 32px;
  border-radius: 2px;
  transition: all 0.2s;
}

.btn:hover {
  background: var(--gold-light);
}

.btnOutline {
  display: inline-flex;
  align-items: center;
  background: transparent;
  color: var(--gold);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 14px 32px;
  border: 2px solid var(--gold);
  border-radius: 2px;
  transition: all 0.2s;
}

.btnOutline:hover {
  background: var(--gold);
  color: var(--black);
}
