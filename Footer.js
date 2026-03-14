/* components/Navbar.module.css */

.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.logo {
  font-family: var(--font-display);
  font-size: 28px;
  letter-spacing: 4px;
  color: var(--off-white);
  flex-shrink: 0;
}

.logoAccent {
  color: var(--gold);
}

.links {
  display: flex;
  gap: 32px;
  align-items: center;
}

.link {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--warm-grey);
  transition: color 0.2s;
}

.link:hover {
  color: var(--gold);
}

.cartBtn {
  position: relative;
  display: flex;
  align-items: center;
  color: var(--off-white);
  transition: color 0.2s;
}

.cartBtn:hover {
  color: var(--gold);
}

.badge {
  position: absolute;
  top: -8px;
  right: -10px;
  background: var(--gold);
  color: var(--black);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 11px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
}

.burger span,
.burger span::before,
.burger span::after {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--off-white);
  transition: all 0.3s;
  position: relative;
}

.burger span::before,
.burger span::after {
  content: '';
  position: absolute;
}

.burger span::before { top: -7px; }
.burger span::after { top: 7px; }

.mobileMenu {
  display: flex;
  flex-direction: column;
  padding: 16px 24px 24px;
  gap: 16px;
  border-top: 1px solid var(--border);
}

.mobileMenu a {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--warm-grey);
  transition: color 0.2s;
}

.mobileMenu a:hover {
  color: var(--gold);
}

@media (max-width: 768px) {
  .links {
    display: none;
  }
  .burger {
    display: flex;
  }
}
