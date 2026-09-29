import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { clinicData } from '../data/clinicData';
import './Navbar.css';

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { to: '/', label: t('navHome') },
    { to: '/services', label: t('navServices') },
    { to: '/about', label: t('navAbout') },
    { to: '/reviews', label: t('navReviews') },
    { to: '/contact', label: t('navContact') }
  ];

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Floating Compact Pill Nav */}
        <nav className="navbar-pill" aria-label="Main Navigation">
          {/* Logo & Clinic Title */}
          <Link to="/" className="navbar-brand" aria-label="Sindhu's Multispeciality Dental Clinic Home" onClick={closeMenu}>
            <img 
              src="/smdc-logo.png" 
              alt="Sindhu's Multispeciality Dental Clinic Logo" 
              className="navbar-logo"
              width="38"
              height="51"
            />
            <div className="brand-text">
              <span className="brand-title">Sindhu&apos;s</span>
              <span className="brand-subtitle">MULTISPECIALITY DENTAL CLINIC</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="desktop-nav-links">
            {navLinks.map((link) => (
              <NavLink 
                key={link.to} 
                to={link.to} 
                end={link.to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Action Items */}
          <div className="navbar-actions">
            {/* Language Toggle (EN / தமிழ்) */}
            <button 
              type="button" 
              className="lang-toggle-btn"
              onClick={toggleLanguage}
              aria-label={`Switch to ${language === 'en' ? 'Tamil' : 'English'}`}
              title={`Switch to ${language === 'en' ? 'தமிழ்' : 'English'}`}
            >
              <Globe size={15} aria-hidden="true" />
              <span className="lang-text">{language === 'en' ? 'தமிழ்' : 'EN'}</span>
            </button>

            {/* Book a Call CTA Button */}
            <a 
              href={`tel:${clinicData.phoneRaw}`} 
              className="btn btn-primary btn-sm nav-call-btn"
              aria-label={`Call the clinic at ${clinicData.phone}`}
            >
              <Phone size={14} aria-hidden="true" />
              <span>{t('bookCallBtn')}</span>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button 
              type="button" 
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={closeMenu}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="mobile-brand">
                <img 
                  src="/smdc-logo.png" 
                  alt="Sindhu's Multispeciality Dental Clinic" 
                  className="navbar-logo"
                  height="34"
                />
                <div className="mobile-brand-text">
                  <span className="brand-title">Sindhu&apos;s</span>
                  <span className="brand-subtitle">MULTISPECIALITY DENTAL CLINIC</span>
                </div>
              </div>
              <button 
                type="button" 
                className="mobile-close-btn"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-nav-links">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.to} 
                  to={link.to} 
                  end={link.to === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="mobile-drawer-actions">
              <button 
                type="button" 
                className="btn btn-secondary mobile-lang-btn"
                onClick={() => {
                  toggleLanguage();
                  closeMenu();
                }}
              >
                <Globe size={16} />
                <span>{language === 'en' ? 'தமிழில் படிக்க (Switch to தமிழ்)' : 'Read in English (Switch to EN)'}</span>
              </button>

              <a 
                href={`tel:${clinicData.phoneRaw}`} 
                className="btn btn-primary btn-call-full"
                onClick={closeMenu}
              >
                <Phone size={16} />
                <span>{t('bookCallBtn')}: {clinicData.phone}</span>
              </a>

              <Link 
                to="/contact" 
                className="btn btn-outline btn-call-full"
                onClick={closeMenu}
              >
                <span>{t('bookAppointmentBtn')}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
