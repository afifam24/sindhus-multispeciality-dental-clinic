import { useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import BookingForm from '../components/BookingForm';
import MapSection from '../components/MapSection';
import ClinicStatus from '../components/ClinicStatus';
import './Contact.css';

export default function Contact() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Contact & Appointment | Sindhu's Multispeciality Dental Clinic";
  }, []);

  return (
    <div className="contact-page-root">
      {/* 1. Contact Hero */}
      <section className="contact-hero-section">
        <div className="container">
          <div className="contact-hero-content">
            <span className="pill-badge">
              <Sparkles size={14} />
              {t('navContact')}
            </span>
            <h1 className="contact-hero-title">
              {t('contactHeroTitle')}
            </h1>
            <p className="contact-hero-subtitle">
              {t('contactHeroSubtitle')}
            </p>
            <div className="contact-hero-status">
              <ClinicStatus showDetail={true} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Balanced Two-Column Appointment & Location Section */}
      <section className="section contact-main-section">
        <div className="container">
          <div className="appointment-two-col-container">
            {/* LEFT COLUMN: Request an Appointment */}
            <div className="appointment-col-left">
              <BookingForm />
            </div>

            {/* RIGHT COLUMN: Clinic Location */}
            <div className="appointment-col-right">
              <MapSection />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
