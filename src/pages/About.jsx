import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Sparkles, 
  Calendar, 
  Phone, 
  HeartHandshake, 
  MessageSquare, 
  Smile, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Award
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { clinicData } from '../data/clinicData';
import DoctorCard from '../components/DoctorCard';
import RatingBadge from '../components/RatingBadge';
import './About.css';

export default function About() {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title = "About Us | Sindhu's Multispeciality Dental Clinic";
  }, []);

  const whyChooseThemes = [
    {
      icon: HeartHandshake,
      title: "Patient-Focused Care",
      titleTa: "நோயாளியை மையமாகக் கொண்ட கவனிப்பு",
      desc: "Every consultation prioritizes patient comfort, gentle technique, and personalized attention to dental health goals.",
      descTa: "ஒவ்வொரு ஆலோசனையும் நோயாளியின் சௌகரியம் மற்றும் தனிப்பட்ட பல் ஆரோக்கியத்திற்கு முன்னுரிமை அளிக்கிறது."
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      titleTa: "தெளிவான ஆலோசனை & விளக்கம்",
      desc: "Procedures and clinical recommendations are thoroughly explained before care begins, helping patients make informed decisions.",
      descTa: "சிகிச்சைக்கு முன்பாக அனைத்து விவரங்களும் நடைமுறைகளும் தெளிவாக விளக்கப்படுகின்றன."
    },
    {
      icon: Smile,
      title: "Welcoming Environment",
      titleTa: "அமைதியான & சுத்தமான சூழல்",
      desc: "Designed to provide a calming, reassuring clinic atmosphere that alleviates dental anxieties.",
      descTa: "பல் சிகிச்சை குறித்த அச்சத்தை போக்கி நோயாளிகள் நிம்மதியாக உணரும் வகையிலான தூய்மையான சூழல்."
    },
    {
      icon: Clock,
      title: "Convenient Appointment Experiences",
      titleTa: "நெகிழ்வான நேர அட்டவணை",
      desc: "Organized scheduling, accommodating short-notice consultations when possible, and dedicated evening sessions.",
      descTa: "அவசர நேர உடனடி ஆலோசனைகள் மற்றும் மாலை நேர வசதியான முன்பதிவு வாய்ப்புகள்."
    },
    {
      icon: ShieldCheck,
      title: "Accessible Dental Care",
      titleTa: "எளிதில் அணுகக்கூடிய சிகிச்சை",
      desc: "Centrally located on Palladam Main Road in Tiruppur with transparent, fair consultations for families.",
      descTa: "திருப்பூர் பல்லடம் மெயின் ரோட்டில் அமைந்துள்ளதால் குடும்பத்தினர் எளிதாக வந்து செல்ல முடிகிறது."
    },
    {
      icon: Award,
      title: "Professional Approach",
      titleTa: "தொழில்முறை நெறிமுறைகள்",
      desc: "Strict clinical hygiene practices, modern dental equipment, and ethical clinical standards.",
      descTa: "கடுமையான சுகாதார நடைமுறைகள், நவீன உபகரணங்கள் மற்றும் தொழில்முறை மருத்துவ நெறிமுறைகள்."
    }
  ];

  return (
    <div className="about-page-root">
      {/* 1. About Hero */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-content">
            <span className="pill-badge">
              <Sparkles size={14} />
              {t('aboutLabel')}
            </span>
            <h1 className="about-hero-title">
              {language === 'ta'
                ? 'உங்கள் புன்னகைக்கான கனிவான & நம்பிக்கையான பல் மருத்துவம்'
                : 'Thoughtful Dental Care Rooted in Trust & Comfort'}
            </h1>
            <p className="about-hero-subtitle">
              {language === 'ta'
                ? 'சிந்துஸ் மல்டிஸ்பெஷாலிட்டி பல் மருத்துவமனை, திருப்பூர் பல்லடம் மெயின் ரோட்டில் 2022 முதல் செயல்பட்டு வருகிறது.'
                : "Serving Tiruppur with clear communication, dedicated doctor consultations, and a calming healthcare environment."}
            </p>
            <div className="about-hero-badges">
              <RatingBadge />
              <div className="est-pill">
                <Building2 size={16} />
                <span>{language === 'ta' ? 'தொடங்கப்பட்டது: ஜனவரி 2022' : 'Established: January 2022'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Clinic Story & Background */}
      <section className="section clinic-story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-text-column">
              <span className="pill-badge">
                {language === 'ta' ? 'எங்கள் பின்னணி' : 'Our Story'}
              </span>
              <h2 className="story-heading">
                {language === 'ta'
                  ? 'திருப்பூரில் நோயாளிகளுக்கான அர்ப்பணிப்புள்ள பல் பராமரிப்பு'
                  : "A Welcoming Dental Clinic Established for Tiruppur's Community"}
              </h2>
              <p className="story-p">
                {language === 'ta'
                  ? "சிந்துஸ் மல்டிஸ்பெஷாலிட்டி பல் மருத்துவமனை ஜனவரி 2022 இல் நிறுவப்பட்டது. இது திருப்பூரில் தமிழ்நாடு தியேட்டர் அருகில், பல்லடம் மெயின் ரோட்டில் உள்ள விவி கிரி காம்ப்ளக்ஸில் அமைந்துள்ளது."
                  : "Sindhu's Multispeciality Dental Clinic was established in January 2022 and is located on Palladam Main Road near Tamil Nadu Theater in Tiruppur. From our founding, our focus has been on providing patients with accessible, high-quality dental care in an unhurried, reassuring environment."}
              </p>
              <p className="story-p">
                {language === 'ta'
                  ? "மருத்துவமனை பல் சீரமைப்பு, வேர் சிகிச்சை, குழந்தைகள் பல் மருத்துவம், பல் மாற்று சிகிச்சை மற்றும் பொதுவான பல் பராமரிப்பு உள்ளிட்ட பல்வேறு சிகிச்சைகளை வழங்குகிறது. நோயாளிகளுக்கு ஒவ்வொரு சிகிச்சை முறையையும் தெளிவாக விளக்கி அவர்களின் திருப்தியை உறுதி செய்கிறோம்."
                  : "The clinic provides a comprehensive range of dental treatments including preventive dentistry, pediatric oral care, root canals, orthodontic alignment, and restorative solutions. We believe that clear explanations and attentive listening form the foundation of effective healthcare."}
              </p>

              <div className="story-values-list">
                <div className="value-item">
                  <CheckCircle2 size={18} className="val-icon" />
                  <span>{language === 'ta' ? 'தூய்மையான & நவீன மருத்துவமனை கட்டமைப்பு' : 'Hygienic and well-maintained clinic premises'}</span>
                </div>
                <div className="value-item">
                  <CheckCircle2 size={18} className="val-icon" />
                  <span>{language === 'ta' ? 'அனைத்து வயதினருக்குமான முழுமையான பல் சிகிச்சை' : 'Comprehensive care for children, teens, and adults'}</span>
                </div>
                <div className="value-item">
                  <CheckCircle2 size={18} className="val-icon" />
                  <span>{language === 'ta' ? 'நேர்மையான ஆலோசனைகள் மற்றும் நியாயமான அணுகுமுறை' : 'Transparent treatment discussions tailored to individual needs'}</span>
                </div>
              </div>
            </div>

            <div className="story-visual-column">
              <div className="story-image-card">
                <img 
                  src="/src/assets/images/clinic_interior.jpg" 
                  alt="Sindhu's Multispeciality Dental Clinic modern interior" 
                  className="story-main-photo"
                  loading="lazy"
                />
                <div className="story-photo-caption">
                  <strong>{clinicData.name}</strong>
                  <span>VV Giri Complex, Palladam Main Road, Tiruppur</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Doctor Profile Section (No Photo - Pure Healthcare Crest & Credentials) */}
      <section className="section about-doctor-section">
        <div className="container">
          <div className="section-center-head">
            <span className="pill-badge">{t('doctorLabel')}</span>
            <h2 className="section-heading">
              {language === 'ta' ? 'முதன்மை பல் அறுவை சிகிச்சை நிபுணர்' : 'Lead Dental Surgeon'}
            </h2>
            <p className="section-subheading">
              {language === 'ta'
                ? 'நோயாளிகளின் சௌகரியம் மற்றும் தெளிவான விளக்கங்களுடன் கனிவான சிகிச்சை அளித்து வருகிறார்.'
                : 'Dr. Selvam Palani provides patient-focused consultations with gentle execution and clear treatment guidance.'}
            </p>
          </div>
          <DoctorCard />
        </div>
      </section>

      {/* 4. Patient Experience Section */}
      <section className="section patient-exp-section">
        <div className="container">
          <div className="patient-exp-card">
            <div className="exp-text-wrap">
              <span className="pill-badge">
                {language === 'ta' ? 'நோயாளி அனுபவம்' : 'Patient Experience'}
              </span>
              <h2 className="exp-heading">
                {language === 'ta' ? 'தொடர்பை எளிமையாக்கும் கனிவான கவனிப்பு' : 'Care That Keeps Communication Simple'}
              </h2>
              <p className="exp-lead">
                {language === 'ta'
                  ? 'நோயாளிகளின் கருத்துகள் எங்கள் கவனிப்பு முறை, தூய்மை மற்றும் தெளிவான விளக்கங்களை பெரிதும் பாராட்டுகின்றன.'
                  : 'Dental visits should never feel intimidating or rushed. Patient feedback frequently highlights our attentive approach, clean environment, and transparent explanations before any procedure begins.'}
              </p>

              <div className="exp-bullets">
                <div className="exp-bullet-item">
                  <div className="bullet-dot"></div>
                  <div>
                    <strong>{language === 'ta' ? 'சிகிச்சைகள் தெளிவாக விளக்கப்படுகின்றன' : 'Treatments Explained Clearly'}</strong>
                    <p>{language === 'ta' ? 'மருத்துவர் நடைமுறைகளை எளிமையான மொழியில் விவரிக்கிறார்.' : 'Patient feedback highlights clear explanations of what each treatment involves.'}</p>
                  </div>
                </div>

                <div className="exp-bullet-item">
                  <div className="bullet-dot"></div>
                  <div>
                    <strong>{language === 'ta' ? 'கனிவான மற்றும் பொறுப்பான அணுகுமுறை' : 'Attentive & Friendly Care'}</strong>
                    <p>{language === 'ta' ? 'டாக்டர் செல்வம் நோயாளிகளிடம் அன்பாகவும் பொறுமையாகவும் உரையாடுகிறார்.' : 'Reviews describe Dr. Selvam as friendly, patient-focused, and reassuring.'}</p>
                  </div>
                </div>

                <div className="exp-bullet-item">
                  <div className="bullet-dot"></div>
                  <div>
                    <strong>{language === 'ta' ? 'சுத்தமான மற்றும் சௌகரியமான சூழல்' : 'Clean & Well-Maintained Facility'}</strong>
                    <p>{language === 'ta' ? 'மருத்துவமனை தூய்மையாகவும் சுகாதாரமாகவும் பராமரிக்கப்படுகிறது.' : 'Patients describe the clinic as hygienic, calm, and comfortable throughout visits.'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="exp-visual-wrap">
              <img 
                src="/src/assets/images/child_care_dentistry.jpg" 
                alt="Gentle dentist patient interaction at Sindhu's Multispeciality Dental Clinic" 
                className="exp-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Patients Choose Us */}
      <section className="section why-choose-section">
        <div className="container">
          <div className="section-center-head">
            <span className="pill-badge">
              {language === 'ta' ? 'எங்கள் சிறப்பம்சங்கள்' : 'Core Principles'}
            </span>
            <h2 className="section-heading">
              {language === 'ta' ? 'நோயாளிகள் எங்களை தேர்வு செய்வதற்கான காரணங்கள்' : "Why Patients Choose Sindhu's Multispeciality Dental Clinic"}
            </h2>
            <p className="section-subheading">
              {language === 'ta'
                ? 'நோயாளிகளின் கருத்துகள் மற்றும் மருத்துவ அனுபவத்தின் அடிப்படையில் அமைந்த சேவை விழுமியங்கள்.'
                : 'Service themes reflecting feedback from over 39 patient ratings and ongoing clinical commitments in Tiruppur.'}
            </p>
          </div>

          <div className="why-grid">
            {whyChooseThemes.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="why-card">
                  <div className="why-icon-wrap">
                    <IconComponent size={24} className="why-icon" />
                  </div>
                  <h3 className="why-card-title">
                    {language === 'ta' ? item.titleTa : item.title}
                  </h3>
                  <p className="why-card-desc">
                    {language === 'ta' ? item.descTa : item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="about-bottom-cta">
        <div className="container">
          <div className="about-cta-box">
            <h2>{language === 'ta' ? 'மருத்துவரை நேரில் சந்திக்க விரும்புகிறீர்களா?' : 'Schedule a Dental Consultation in Tiruppur'}</h2>
            <p>
              {language === 'ta'
                ? 'பல்லடம் மெயின் ரோட்டில் அமைந்துள்ள எங்கள் மருத்துவமனையில் உங்கள் பல் ஆரோக்கியத்திற்கான சிறந்த ஆலோசனையைப் பெறுங்கள்.'
                : 'Visit us at VV Giri Complex on Palladam Main Road or book online today.'}
            </p>
            <div className="about-cta-btns">
              <Link to="/contact" className="btn btn-primary btn-lg">
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
      </section>
    </div>
  );
}
