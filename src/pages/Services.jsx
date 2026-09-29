import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Phone, 
  Calendar, 
  ShieldAlert, 
  Filter
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { treatments, serviceCategories } from '../data/treatments';
import { clinicData } from '../data/clinicData';
import TreatmentCard from '../components/TreatmentCard';
import ProcessSteps from '../components/ProcessSteps';
import './Services.css';

export default function Services() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    document.title = "Dental Services | Sindhu's Multispeciality Dental Clinic";
  }, []);

  const filteredTreatments = selectedCategory === 'all'
    ? treatments
    : treatments.filter(item => item.categoryId === selectedCategory);

  return (
    <div className="services-page-root">
      {/* 1. Services Hero */}
      <section className="services-hero-section">
        <div className="container">
          <div className="services-hero-content">
            <span className="pill-badge">
              <Sparkles size={14} />
              {t('servicesLabel')}
            </span>
            <h1 className="services-hero-title">
              {t('servicesHeroTitle')}
            </h1>
            <p className="services-hero-subtitle">
              {t('servicesHeroSubtitle')}
            </p>

            <div className="services-hero-quick-actions">
              <Link to="/contact" className="btn btn-primary btn-md">
                <Calendar size={17} />
                <span>{t('bookAppointmentBtn')}</span>
              </Link>
              <a href={`tel:${clinicData.phoneRaw}`} className="btn btn-secondary btn-md">
                <Phone size={17} />
                <span>{t('callClinicBtn')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Process Section */}
      <section className="section services-process-section">
        <div className="container">
          <div className="section-center-head">
            <span className="pill-badge">
              {language === 'ta' ? 'சிகிச்சை நடைமுறை' : 'Clinical Workflow'}
            </span>
            <h2 className="section-heading">
              {language === 'ta' ? 'எங்கள் 4-படி சிகிச்சை முறை' : 'Our 4-Stage Patient Pathway'}
            </h2>
            <p className="section-subheading">
              {language === 'ta'
                ? 'பரிசோதனை முதல் பின்தொடர் பராமரிப்பு வரை நோயாளிக்கு தெளிவான மற்றும் கனிவான சிகிச்சை.'
                : 'Every treatment plan is guided by thorough examination, patient discussion, and gentle clinical execution.'}
            </p>
          </div>
          <ProcessSteps variant="cards" />
        </div>
      </section>

      {/* 3. Category Filter & Treatment Grid */}
      <section className="section treatments-grid-section" id="all-services">
        <div className="container">
          <div className="filter-header-bar">
            <div className="filter-title-wrap">
              <Filter size={18} className="filter-icon" />
              <span className="filter-label">
                {language === 'ta' ? 'பிரிவு வாரியாக பார்க்க:' : 'Filter by Treatment Category:'}
              </span>
            </div>

            <div className="category-chips-row">
              <button
                type="button"
                className={`category-filter-chip ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                {language === 'ta' ? 'அனைத்து சிகிச்சைகளும் (12)' : 'All Treatments (12)'}
              </button>

              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`category-filter-chip ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {language === 'ta' ? cat.nameTa : cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Grouped by Categories view when "all" is selected */}
          {selectedCategory === 'all' ? (
            <div className="categories-stacked-layout">
              {serviceCategories.map((cat) => {
                const categoryTreatments = treatments.filter(t => t.categoryId === cat.id);
                return (
                  <div key={cat.id} className="category-group-block">
                    <div className="category-group-header">
                      <div>
                        <span className="category-pill-tag">
                          {cat.name.toUpperCase()}
                        </span>
                        <h3 className="category-group-name">
                          {language === 'ta' ? cat.nameTa : cat.name}
                        </h3>
                      </div>
                      <p className="category-group-desc">
                        {language === 'ta' ? cat.descriptionTa : cat.description}
                      </p>
                    </div>

                    <div className="treatments-grid">
                      {categoryTreatments.map((treatment) => (
                        <TreatmentCard key={treatment.id} treatment={treatment} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="treatments-grid filtered-view-grid">
              {filteredTreatments.map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} />
              ))}
            </div>
          )}

          {/* Safety Notice Box */}
          <div className="services-safety-banner">
            <div className="safety-icon-wrap">
              <ShieldAlert size={24} className="safety-shield" />
            </div>
            <div className="safety-text">
              <h4 className="safety-title">
                {language === 'ta' ? 'மருத்துவ ஆலோசனை குறிப்பு' : 'Clinical Assessment Note'}
              </h4>
              <p className="safety-desc">
                {t('servicesDisclaimer')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Large Services CTA Banner */}
      <section className="services-cta-section">
        <div className="container">
          <div className="services-cta-card">
            <div className="cta-content">
              <span className="pill-badge pill-badge-dark">
                {language === 'ta' ? 'நேரடி ஆலோசனை' : 'Personal Consultation'}
              </span>
              <h2 className="cta-headline">
                {t('servicesCtaHeading')}
              </h2>
              <p className="cta-subtitle">
                {t('servicesCtaSubtitle')}
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-white btn-lg">
                  <Calendar size={18} />
                  <span>{t('bookAppointmentBtn')}</span>
                </Link>
                <a href={`tel:${clinicData.phoneRaw}`} className="btn btn-secondary btn-lg">
                  <Phone size={18} />
                  <span>{t('callClinicBtn')}: {clinicData.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
