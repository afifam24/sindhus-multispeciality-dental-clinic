import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  Info, 
  Calendar, 
  ShieldCheck, 
  X
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { reviewThemes } from '../data/testimonials';
import TestimonialCard from '../components/TestimonialCard';
import './Reviews.css';

export default function Reviews() {
  const { language, t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Patient Reviews | Sindhu's Multispeciality Dental Clinic";
  }, []);

  return (
    <div className="reviews-page-root">
      {/* 1. Reviews Hero */}
      <section className="reviews-hero-section">
        <div className="container">
          <div className="reviews-hero-content">
            <span className="pill-badge">
              <Sparkles size={14} />
              {t('testimonialsLabel')}
            </span>
            <h1 className="reviews-hero-title">
              {language === 'ta'
                ? 'நோயாளிகளின் உண்மையான கருத்துகள் & மதிப்பீடுகள்'
                : 'Verified Patient Feedback & Rating Overview'}
            </h1>
            <p className="reviews-hero-subtitle">
              {language === 'ta'
                ? 'எங்கள் நோயாளிகளின் 39 சரிபார்க்கப்பட்ட மதிப்பீடுகள் மற்றும் அனுபவங்களின் சுருக்கம்.'
                : 'A transparent reflection of our care, hygiene, and patient communication based on 39 verified patient ratings.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Rating Summary Card */}
      <section className="section rating-summary-section">
        <div className="container">
          <div className="rating-summary-card">
            <div className="summary-score-side">
              <div className="score-big">4.9</div>
              <div className="stars-large">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <div className="ratings-total">
                <strong>39 {language === 'ta' ? 'மதிப்பீடுகள்' : 'Verified Ratings'}</strong>
              </div>
              <span className="rating-standard-tag">
                {language === 'ta' ? 'சிறந்த நோயாளி திருப்தி' : 'Consistently High Patient Trust'}
              </span>
            </div>

            <div className="summary-bars-side">
              <h3 className="breakdown-title">
                {language === 'ta' ? 'நோயாளி கருத்து கருப்பொருள்கள்' : 'Key Patient Experience Themes'}
              </h3>
              <p className="breakdown-desc">
                {language === 'ta'
                  ? 'கீழே உள்ள கருப்பொருள்கள் நோயாளிகளின் உண்மையான கருத்துகளின் அடிப்படையில் தொகுக்கப்பட்டுள்ளன.'
                  : 'We present verified themes derived directly from patient feedback rather than generating artificial quotations.'}
              </p>

              <div className="theme-pills-cloud">
                <div className="cloud-item">
                  <CheckCircle2 size={16} className="cloud-icon" />
                  <span>{language === 'ta' ? 'தூய்மையான & நேர்த்தியான மருத்துவமனை' : 'Clean & Well-Maintained Clinic'}</span>
                </div>
                <div className="cloud-item">
                  <CheckCircle2 size={16} className="cloud-icon" />
                  <span>{language === 'ta' ? 'கனிவான மருத்துவர் அணுகுமுறை' : 'Friendly & Patient-Focused Care'}</span>
                </div>
                <div className="cloud-item">
                  <CheckCircle2 size={16} className="cloud-icon" />
                  <span>{language === 'ta' ? 'தெளிவான சிகிச்சை விளக்கங்கள்' : 'Clear Pre-Treatment Explanations'}</span>
                </div>
                <div className="cloud-item">
                  <CheckCircle2 size={16} className="cloud-icon" />
                  <span>{language === 'ta' ? 'நியாயமான பல் சிகிச்சைக் கட்டணம்' : 'Affordable & Transparent Pricing'}</span>
                </div>
                <div className="cloud-item">
                  <CheckCircle2 size={16} className="cloud-icon" />
                  <span>{language === 'ta' ? 'அமைதியான சிகிச்சை அனுபவம்' : 'Comfortable & Reassuring Visits'}</span>
                </div>
                <div className="cloud-item">
                  <CheckCircle2 size={16} className="cloud-icon" />
                  <span>{language === 'ta' ? 'உடனடி மற்றும் வசதியான முன்பதிவு' : 'Convenient Short-Notice Appointments'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Review Themes Grid */}
      <section className="section themes-grid-section">
        <div className="container">
          <div className="section-center-head">
            <span className="pill-badge">
              {language === 'ta' ? 'விரிவான கருத்துகள்' : 'Review Themes'}
            </span>
            <h2 className="section-heading">
              {language === 'ta' ? 'நோயாளிகள் பகிர்ந்த அனுபவங்கள்' : 'Core Themes from Patient Feedback'}
            </h2>
            <p className="section-subheading">
              {language === 'ta'
                ? 'மருத்துவமனையின் தூய்மை, தெளிவான ஆலோசனைகள் மற்றும் நோயாளியின் சௌகரியம்.'
                : 'Every theme reflects recurring observations from reviews left by patients receiving dental care in Tiruppur.'}
            </p>
          </div>

          <div className="all-reviews-grid">
            {reviewThemes.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>

          {/* Leave a Review Bar */}
          <div className="leave-review-bar">
            <div className="leave-review-info">
              <MessageSquare size={20} className="review-chat-icon" />
              <div>
                <h4>{language === 'ta' ? 'சமீபத்தில் சிகிச்சை பெற்றவரா?' : 'Visited Sindhu’s Multispeciality Dental Clinic Recently?'}</h4>
                <p>
                  {language === 'ta'
                    ? 'உங்கள் நேர்மையான அனுபவத்தை அதிகாரப்பூர்வ தளத்தில் பகிருங்கள்.'
                    : 'We value honest feedback from patients to continually uphold the highest standards of care.'}
                </p>
              </div>
            </div>

            <button 
              type="button" 
              onClick={() => setModalOpen(true)}
              className="btn btn-primary"
            >
              <span>{t('leaveReviewBtn')}</span>
            </button>
          </div>

          {/* Modal / Dialog for Leave Review configuration */}
          {modalOpen && (
            <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
              <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                  <div className="modal-title-wrap">
                    <Info size={20} className="info-icon" />
                    <h3>{language === 'ta' ? 'மதிப்பீடு பகிர்தல்' : 'Patient Review Platform'}</h3>
                  </div>
                  <button 
                    type="button" 
                    className="modal-close"
                    onClick={() => setModalOpen(false)}
                    aria-label="Close dialog"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="modal-body">
                  <p>
                    {language === 'ta'
                      ? 'சிந்துஸ் மல்டிஸ்பெஷாலிட்டி பல் மருத்துவமனைக்கான அதிகாரப்பூர்வ கூகுள் பிசினஸ் பக்கம் சரிபார்ப்பில் உள்ளது. உங்கள் ஆதரவுக்கும் கருத்துகளுக்கும் நன்றி!'
                      : "Official review submission is configured for verified clinic profiles. If you have visited our clinic at VV Giri Complex, Palladam Main Road, Tiruppur, our team can provide the direct link during your follow-up visit."}
                  </p>
                  <div className="modal-notice">
                    <ShieldCheck size={18} />
                    <span>
                      {language === 'ta'
                        ? 'நாங்கள் போலி மதிப்பீடுகள் அல்லது விளம்பரங்களை ஒருபோதும் உருவாக்குவதில்லை.'
                        : 'We prioritize verified patient feedback integrity and do not host unverified third-party submissions.'}
                    </span>
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary btn-sm"
                    onClick={() => setModalOpen(false)}
                  >
                    {language === 'ta' ? 'மூடுக' : 'Close'}
                  </button>
                  <Link 
                    to="/contact" 
                    className="btn btn-primary btn-sm"
                    onClick={() => setModalOpen(false)}
                  >
                    {language === 'ta' ? 'முன்பதிவு செய்ய' : 'Schedule Appointment'}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. Bottom Appointment Banner */}
      <section className="reviews-cta-banner">
        <div className="container">
          <div className="reviews-banner-inner">
            <div>
              <h3>{language === 'ta' ? 'அமைதியான சூழலில் சிறந்த பல் பராமரிப்பு' : 'Experience Patient-Focused Dental Care in Tiruppur'}</h3>
              <p>
                {language === 'ta'
                  ? 'டாக்டர் செல்வம் பழனி மற்றும் எங்கள் மருத்துவக் குழுவை நேரில் சந்திக்க இன்றே முன்பதிவு செய்யுங்கள்.'
                  : 'Join 39+ satisfied reviewers and experience dental visits centered around your comfort and confidence.'}
              </p>
            </div>
            <Link to="/contact" className="btn btn-white btn-lg">
              <Calendar size={18} />
              <span>{t('bookAppointmentBtn')}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
