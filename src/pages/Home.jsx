import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown,
  Building2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { clinicData } from '../data/clinicData';
import { treatments } from '../data/treatments';
import { reviewThemes } from '../data/testimonials';
import { faqs } from '../data/faq';
import RatingBadge from '../components/RatingBadge';
import ProcessSteps from '../components/ProcessSteps';
import TreatmentCard from '../components/TreatmentCard';
import DoctorCard from '../components/DoctorCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQItem from '../components/FAQItem';
import ClinicStatus from '../components/ClinicStatus';
import MapSection from '../components/MapSection';
import BookingForm from '../components/BookingForm';
import heroDentalCareImg from '../assets/images/hero_dental_care.jpg';
import clinicInteriorImg from '../assets/images/clinic_interior.jpg';
import childCareDentistryImg from '../assets/images/child_care_dentistry.jpg';
import teethStraighteningImg from '../assets/images/teeth_straightening.jpg';
import './Home.css';

export default function Home() {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title = "Sindhu's Multispeciality Dental Clinic";
  }, []);

  // 4 Featured treatments
  const featuredTreatments = treatments.filter(item => item.featured);

  // Treatment chips for hero
  const heroChips = [
    { name: "Orthodontic Treatment", nameTa: "பல் சீரமைப்பு" },
    { name: "Root Canal Treatment", nameTa: "வேர் சிகிச்சை" },
    { name: "Child Care Dentistry", nameTa: "குழந்தைகள் பல் சிகிச்சை" },
    { name: "Implant Treatment", nameTa: "பல் இம்ப்ளான்ட்" }
  ];

  return (
    <div className="home-page-root">
      {/* 1. HERO SECTION */}
      <section className="hero-section" aria-label="Hero Introduction">
        <div className="container hero-container">
          <div className="hero-grid">
            {/* Left: Headline & Actions */}
            <div className="hero-content">
              <div className="hero-badge-wrap">
                <span className="pill-badge">
                  <Sparkles size={14} className="badge-sparkle" />
                  {t('heroBadge')}
                </span>
              </div>

              <h1 className="hero-headline">
                {t('heroTitle')}
              </h1>

              <p className="hero-description">
                {t('heroSubtitle')}
              </p>

              {/* CTAs */}
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  <Calendar size={18} />
                  <span>{t('bookAppointmentBtn')}</span>
                </Link>

                <a href={`tel:${clinicData.phoneRaw}`} className="btn btn-secondary btn-lg">
                  <Phone size={18} />
                  <span>{t('callClinicBtn')}</span>
                </a>
              </div>

              {/* Treatment Chips */}
              <div className="hero-chips-container">
                <span className="chips-label">
                  {language === 'ta' ? 'முக்கிய சிகிச்சைகள்:' : 'Core Specialties:'}
                </span>
                <div className="chips-list">
                  {heroChips.map(chip => (
                    <Link
                      key={chip.name}
                      to={`/contact?service=${encodeURIComponent(chip.name)}`}
                      className="hero-treatment-chip"
                    >
                      {language === 'ta' ? chip.nameTa : chip.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Trust bar */}
              <div className="hero-trust-bar">
                <RatingBadge />
                <ClinicStatus showDetail={true} />
              </div>
            </div>

            {/* Right: Large Rounded Dental Hero Image */}
            <div className="hero-visual-column">
              <div className="hero-image-card">
                <img 
                  src={heroDentalCareImg} 
                  alt="Modern patient-focused dental care at Sindhu's Multispeciality Dental Clinic" 
                  className="hero-main-img"
                  fetchPriority="high"
                />
                
                {/* Floating Rating Card Overlay */}
                <div className="hero-floating-rating">
                  <div className="floating-rating-score">4.9 ★</div>
                  <div className="floating-rating-details">
                    <span className="floating-rating-stars">★★★★★</span>
                    <span className="floating-rating-sub">39 Patient Ratings</span>
                  </div>
                </div>

                {/* Floating Clinic Location Pill */}
                <div className="hero-floating-location">
                  <Building2 size={16} className="loc-chip-icon" />
                  <span>Palladam Main Rd, Tiruppur</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Hint */}
          <div className="hero-scroll-hint" aria-hidden="true">
            <span className="scroll-hint-text">{t('scrollHint')}</span>
            <ChevronDown size={18} className="scroll-arrow-bounce" />
          </div>
        </div>
      </section>

      {/* 2. PROCESS STRIP */}
      <ProcessSteps variant="strip" />

      {/* 3. ABOUT INTRO SECTION */}
      <section className="section about-intro-section" aria-labelledby="about-intro-title">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-text">
              <span className="pill-badge">{t('aboutLabel')}</span>
              <h2 id="about-intro-title" className="about-statement">
                &ldquo;{t('aboutStatement')}&rdquo;
              </h2>
              <p className="about-intro-p">
                {t('aboutIntroParagraph')}
              </p>

              <div className="feedback-highlights-box">
                <h4 className="highlights-title">{t('feedbackHighlightsTitle')}</h4>
                <ul className="highlights-list">
                  {t('feedbackHighlights').map((item, index) => (
                    <li key={index} className="highlight-item">
                      <CheckCircle2 size={18} className="highlight-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="about-intro-action">
                <Link to="/about" className="btn btn-secondary btn-md">
                  <span>{t('aboutUsBtn')}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="about-intro-images">
              <div className="intro-image-frame frame-1">
                <img 
                  src={clinicInteriorImg} 
                  alt="Sindhu's Multispeciality Dental Clinic hygienic interior and consultation room" 
                  className="intro-photo"
                  loading="lazy"
                />
                <span className="intro-img-label">
                  {language === 'ta' ? 'தூய்மையான மருத்துவமனை' : 'Modern & Clean Clinic'}
                </span>
              </div>
              <div className="intro-image-frame frame-2">
                <img 
                  src={childCareDentistryImg} 
                  alt="Friendly child dental care consultation" 
                  className="intro-photo"
                  loading="lazy"
                />
                <span className="intro-img-label">
                  {language === 'ta' ? 'அன்பான கவனிப்பு' : 'Patient-Centric Care'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS SECTION */}
      <section className="stats-section" aria-label="Clinic Statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">4.9★</div>
              <div className="stat-label">{t('statRating')}</div>
              <div className="stat-sub">{language === 'ta' ? 'உயர் நோயாளி திருப்தி' : 'Verified Google Rating'}</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">39</div>
              <div className="stat-label">{t('statReviews')}</div>
              <div className="stat-sub">{language === 'ta' ? 'உண்மையான கருத்துகள்' : 'Patient Feedback Entries'}</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">{t('statEstablishedVal')}</div>
              <div className="stat-label">{t('statEstablished')}</div>
              <div className="stat-sub">{language === 'ta' ? 'ஜனவரி 2022 இல் நிறுவப்பட்டது' : 'Serving Tiruppur Since Jan'}</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">{t('statAvailabilityVal')}</div>
              <div className="stat-label">{t('statAvailability')}</div>
              <div className="stat-sub">{t('statAvailabilityNote')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED TREATMENTS */}
      <section className="section featured-treatments-section" aria-labelledby="featured-services-heading">
        <div className="container">
          <div className="section-head-split">
            <div className="head-text">
              <span className="pill-badge">{t('servicesLabel')}</span>
              <h2 id="featured-services-heading" className="section-heading">
                {t('servicesHeading')}
              </h2>
            </div>
            <div className="head-action">
              <Link to="/services" className="btn btn-secondary">
                <span>{t('viewAllTreatments')}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="featured-treatments-layout">
            <div className="featured-cards-grid">
              {featuredTreatments.map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} featured={true} />
              ))}
            </div>

            <div className="featured-banner-card">
              <img 
                src={teethStraighteningImg} 
                alt="Orthodontic and dental smile care in Tiruppur" 
                className="banner-card-img"
                loading="lazy"
              />
              <div className="banner-card-overlay">
                <span className="banner-tag">
                  {language === 'ta' ? 'தனிப்பயன் சிகிச்சை' : 'Comprehensive Dentistry'}
                </span>
                <h3 className="banner-title">
                  {language === 'ta' 
                    ? 'உங்கள் குடும்பத்திற்கான நம்பிக்கையான பல் பராமரிப்பு' 
                    : 'Personalized Dental Care for the Whole Family'}
                </h3>
                <p className="banner-desc">
                  {language === 'ta'
                    ? '11 க்கும் மேற்பட்ட உறுதிசெய்யப்பட்ட பல் சிகிச்சைகள் மற்றும் நவீன உபகரணங்கள்.'
                    : '11 confirmed specialized dental treatments designed around clinical comfort, modern hygiene, and precision.'}
                </p>
                <Link to="/services" className="btn btn-white btn-sm">
                  <span>{t('viewAllTreatments')}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DOCTOR SECTION */}
      <section className="section doctor-section" aria-label="Dental Surgeon Profile">
        <div className="container">
          <div className="section-center-head">
            <span className="pill-badge">{t('doctorLabel')}</span>
            <h2 className="section-heading">
              {language === 'ta' ? 'அனுபவம் மற்றும் கனிவான கவனிப்பு' : 'Dedicated to Patient Comfort & Dental Health'}
            </h2>
          </div>
          <DoctorCard />
        </div>
      </section>

      {/* 7. CLINIC INFORMATION SPOTLIGHT */}
      <section className="section clinic-spotlight-section" aria-label="Clinic Hours and Information">
        <div className="container">
          <div className="spotlight-card">
            <div className="spotlight-bg-img-wrap">
              <img 
                src={clinicInteriorImg} 
                alt="Sindhu's Multispeciality Dental Clinic waiting area and consultation space" 
                className="spotlight-bg-img"
                loading="lazy"
              />
              <div className="spotlight-overlay"></div>
            </div>

            <div className="spotlight-content">
              <div className="spotlight-badge-row">
                <ClinicStatus showDetail={true} />
              </div>

              <h2 className="spotlight-title">
                {clinicData.name}
              </h2>

              <p className="spotlight-subtitle">
                4/52, VV Giri Complex, Palladam Main Road, Near Tamil Nadu Theater, Tiruppur, Tamil Nadu – 641605
              </p>

              <div className="spotlight-hours-pills">
                <div className="hours-pill-item">
                  <Clock size={16} className="pill-clock" />
                  <div>
                    <span className="pill-label">{language === 'ta' ? 'திங்கள் – சனி:' : 'Mon – Sat:'}</span>
                    <span className="pill-val">9:30 AM – 2:00 PM & 5:00 PM – 9:30 PM</span>
                  </div>
                </div>

                <div className="hours-pill-item">
                  <Clock size={16} className="pill-clock" />
                  <div>
                    <span className="pill-label">{language === 'ta' ? 'ஞாயிறு:' : 'Sunday:'}</span>
                    <span className="pill-val">10:00 AM – 2:00 PM (Evening: Appointment Only)</span>
                  </div>
                </div>
              </div>

              <div className="spotlight-actions">
                <a href={`tel:${clinicData.phoneRaw}`} className="btn btn-primary btn-lg">
                  <Phone size={18} />
                  <span>{t('callClinicBtn')}: {clinicData.phone}</span>
                </a>
                <Link to="/contact" className="btn btn-white btn-lg">
                  <Calendar size={18} />
                  <span>{t('bookAppointmentBtn')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS / PATIENT FEEDBACK */}
      <section className="section reviews-section" aria-labelledby="reviews-section-heading">
        <div className="container">
          <div className="section-center-head">
            <span className="pill-badge">{t('testimonialsLabel')}</span>
            <h2 id="reviews-section-heading" className="section-heading">
              {t('testimonialsHeading')}
            </h2>
            <p className="section-subheading">
              {t('testimonialsSubtitle')}
            </p>
          </div>

          <div className="reviews-grid">
            {reviewThemes.slice(0, 3).map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>

          <div className="reviews-bottom-action">
            <Link to="/reviews" className="btn btn-secondary">
              <span>{language === 'ta' ? 'அனைத்து நோயாளி கருத்துகளையும் படிக்க' : 'Explore All Verified Review Themes'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section className="section faq-section" aria-labelledby="faq-section-heading">
        <div className="container faq-container">
          <div className="section-center-head">
            <span className="pill-badge">{t('faqLabel')}</span>
            <h2 id="faq-section-heading" className="section-heading">
              {t('faqHeading')}
            </h2>
            <p className="section-subheading">
              {t('faqSubtitle')}
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} defaultOpen={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. BOOKING + MAP SECTION */}
      <section className="section booking-map-section" aria-label="Book Appointment and Clinic Location">
        <div className="container">
          <div className="booking-map-grid">
            <div className="booking-column">
              <BookingForm />
            </div>
            <div className="map-column">
              <MapSection />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
