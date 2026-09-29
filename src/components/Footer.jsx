import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { clinicData } from '../data/clinicData';
import './Footer.css';

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="footer-root">
      {/* Giant faded watermark */}
      <div className="footer-watermark" aria-hidden="true">
        Sindhu&apos;s
      </div>

      <div className="container footer-content">
        <div className="footer-grid">
          {/* Col 1: Brand & About */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-brand" aria-label="Sindhu's Multispeciality Dental Clinic">
              <img 
                src="/smdc-logo.png" 
                alt="Sindhu's Multispeciality Dental Clinic Logo" 
                className="footer-logo"
                width="38"
                height="51"
              />
              <div className="footer-brand-text">
                <span className="footer-brand-title">Sindhu&apos;s</span>
                <span className="footer-brand-subtitle">MULTISPECIALITY DENTAL CLINIC</span>
              </div>
            </Link>
            <p className="footer-desc">
              {language === 'ta'
                ? "திருப்பூர் பல்லடம் மெயின் ரோட்டில் அமைந்துள்ள நவீன பல் மருத்துவமனை. நோயாளியின் நலனை முதன்மையாகக் கொண்ட கனிவான மற்றும் தெளிவான பல் சிகிச்சை."
                : "A trusted dental healthcare facility in Tiruppur offering patient-focused dental care, modern clinical hygiene, and clear communication."}
            </p>
            <div className="footer-badge">
              <span className="footer-badge-dot"></span>
              <span>{t('footerLocationBadge')}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-heading">{t('quickLinks')}</h4>
            <ul className="footer-links">
              <li><Link to="/">{t('navHome')}</Link></li>
              <li><Link to="/services">{t('navServices')}</Link></li>
              <li><Link to="/about">{t('navAbout')}</Link></li>
              <li><Link to="/reviews">{t('navReviews')}</Link></li>
              <li><Link to="/contact">{t('navContact')}</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="footer-col">
            <h4 className="footer-heading">{t('contactDetailsLabel')}</h4>
            <div className="footer-contact-items">
              <a href={`tel:${clinicData.phoneRaw}`} className="footer-contact-link">
                <Phone size={18} className="footer-icon" />
                <div>
                  <span className="contact-label">{language === 'ta' ? 'அழைக்க:' : 'Call Clinic:'}</span>
                  <span className="contact-val">{clinicData.phoneFormatted}</span>
                </div>
              </a>

              <a href={`mailto:${clinicData.email}`} className="footer-contact-link">
                <Mail size={18} className="footer-icon" />
                <div>
                  <span className="contact-label">{language === 'ta' ? 'மின்னஞ்சல்:' : 'Email Us:'}</span>
                  <span className="contact-val">{clinicData.email}</span>
                </div>
              </a>

              <div className="footer-contact-link">
                <MapPin size={22} className="footer-icon" />
                <div>
                  <span className="contact-label">{language === 'ta' ? 'முகவரி:' : 'Location:'}</span>
                  <span className="contact-val">
                    {language === 'ta' ? clinicData.address.fullTa : clinicData.address.full}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Clinic Hours */}
          <div className="footer-col">
            <h4 className="footer-heading">{t('openingHoursLabel')}</h4>
            <div className="footer-hours">
              <div className="footer-hours-block">
                <div className="hours-days-title">
                  <Clock size={16} className="footer-icon-sm" />
                  <span>{language === 'ta' ? 'திங்கள் – சனி' : 'Monday – Saturday'}</span>
                </div>
                <div className="hours-time">9:30 AM – 2:00 PM</div>
                <div className="hours-time">5:00 PM – 9:30 PM</div>
              </div>

              <div className="footer-hours-block">
                <div className="hours-days-title">
                  <Clock size={16} className="footer-icon-sm" />
                  <span>{language === 'ta' ? 'ஞாயிறு' : 'Sunday'}</span>
                </div>
                <div className="hours-time">10:00 AM – 2:00 PM</div>
                <div className="hours-note">
                  {language === 'ta' ? 'மாலை: முன்பதிவு மட்டும்' : 'Evening: Appointment Only'}
                </div>
              </div>

              <a 
                href={clinicData.directionsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-directions-btn"
              >
                <span>{t('getDirectionsBtn')}</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Medical disclaimer */}
        <div className="footer-disclaimer-box">
          <p className="footer-disclaimer-text">
            {t('footerDisclaimer')}
          </p>
        </div>

        {/* Bottom copyright line */}
        <div className="footer-bottom">
          <p className="footer-copyright-text">
            {t('footerCopyright')}
          </p>
          <div className="footer-bottom-info">
            <span>{language === 'ta' ? 'தொடங்கப்பட்டது: ஜனவரி 2022' : 'Established: January 2022'}</span>
            <span className="dot-sep">•</span>
            <span>{language === 'ta' ? 'திருப்பூர், தமிழ்நாடு' : 'Tiruppur, Tamil Nadu'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
