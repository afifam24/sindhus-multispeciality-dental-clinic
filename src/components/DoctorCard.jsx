import { Award, Heart, CheckCircle2, Stethoscope, Shield, Sparkles } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';
import RatingBadge from './RatingBadge';

export default function DoctorCard({ className = '' }) {
  const { language, t } = useLanguage();

  return (
    <div className={`doctor-profile-card ${className}`}>
      <div className="doctor-card-grid">
        {/* Left Side: Elegant Dental Crest & Credentials (NO PHOTO) */}
        <div className="doctor-badge-panel">
          <div className="doctor-crest-icon">
            <Stethoscope size={36} className="crest-svg" />
          </div>
          <div className="crest-title-wrap">
            <span className="crest-tag">{language === 'ta' ? 'முதன்மை மருத்துவர்' : 'Lead Dental Surgeon'}</span>
            <h4 className="crest-name">{clinicData.doctor}</h4>
            <span className="crest-qualification">{clinicData.qualification}</span>
          </div>

          <div className="doctor-panel-ratings">
            <RatingBadge />
          </div>

          <div className="doctor-panel-meta">
            <div className="panel-meta-item">
              <Shield size={16} className="meta-icon" />
              <span>{language === 'ta' ? 'நோயாளி-மைய கவனிப்பு' : 'Patient-Centric Care'}</span>
            </div>
            <div className="panel-meta-item">
              <Sparkles size={16} className="meta-icon" />
              <span>{language === 'ta' ? 'நவீன பல் சுகாதாரம்' : 'Clinical Hygiene Standards'}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Doctor Bio & Commitments */}
        <div className="doctor-info-wrap">
          <div className="doctor-label-tag">
            <Award size={15} />
            <span>{t('doctorLabel')}</span>
          </div>

          <h3 className="doctor-name">
            {language === 'ta' ? clinicData.doctorTa : clinicData.doctor}
            <span className="doctor-qualification">, {clinicData.qualification}</span>
          </h3>

          <div className="doctor-role-pill">
            {language === 'ta' ? clinicData.roleTa : clinicData.role}
          </div>

          <p className="doctor-bio">
            {language === 'ta'
              ? 'டாக்டர் செல்வம் பழனி, பி.டி.எஸ், சிந்துஸ் மல்டிஸ்பெஷாலிட்டி பல் மருத்துவமனையில் நோயாளியின் சௌகரியம் மற்றும் தெளிவான விளக்கங்களுடன் கனிவான முறையில் பல் சிகிச்சை அளித்து வருகிறார்.'
              : 'Dr. Selvam Palani offers patient-focused dental care with clear explanations, a gentle clinical approach, and dedicated attention to individual patient comfort in Tiruppur.'}
          </p>

          <div className="doctor-strengths">
            <div className="strength-item">
              <CheckCircle2 size={18} className="strength-icon" />
              <span>
                {language === 'ta'
                  ? 'தெளிவான சிகிச்சை ஆலோசனை மற்றும் கனிவான அணுகுமுறை'
                  : 'Clear treatment explanations prior to any procedure'}
              </span>
            </div>
            <div className="strength-item">
              <CheckCircle2 size={18} className="strength-icon" />
              <span>
                {language === 'ta'
                  ? 'நோயாளியின் வசதிக்கு முன்னுரிமை அளிக்கும் அமைதியான கவனிப்பு'
                  : 'Patient-focused care prioritizing comfort & hygiene'}
              </span>
            </div>
            <div className="strength-item">
              <CheckCircle2 size={18} className="strength-icon" />
              <span>
                {language === 'ta'
                  ? 'குடும்பத்தினருக்கான விரிவான பல் பராமரிப்பு'
                  : 'Comprehensive dental care for patients of all ages'}
              </span>
            </div>
          </div>

          <div className="doctor-clinic-affiliation">
            <Heart size={16} className="heart-icon" />
            <span>
              {language === 'ta'
                ? 'சிந்துஸ் மல்டிஸ்பெஷாலிட்டி பல் மருத்துவமனை, திருப்பூர் (ஜனவரி 2022 முதல்)'
                : "Sindhu's Multispeciality Dental Clinic, Tiruppur (Est. January 2022)"}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .doctor-profile-card {
          background: #ffffff;
          border-radius: var(--radius-card-lg);
          padding: 36px;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-card);
        }

        .doctor-card-grid {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 40px;
          align-items: center;
        }

        .doctor-badge-panel {
          background: linear-gradient(180deg, var(--soft-mint) 0%, #f0f7f3 100%);
          border-radius: 22px;
          padding: 32px 24px;
          border: 1px solid var(--soft-mint-border);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          box-shadow: 0 8px 24px rgba(18, 73, 46, 0.05);
        }

        .doctor-crest-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #ffffff;
          color: var(--primary-green);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(29, 107, 68, 0.12);
          border: 2px solid var(--soft-mint-border);
        }

        .crest-svg {
          color: var(--primary-green);
        }

        .crest-title-wrap {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .crest-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary-green);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .crest-name {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 4px 0 0 0;
        }

        .crest-qualification {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--primary-green);
        }

        .doctor-panel-ratings {
          margin-top: 4px;
        }

        .doctor-panel-meta {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
          padding-top: 14px;
          border-top: 1px solid rgba(29, 107, 68, 0.12);
        }

        .panel-meta-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--dark-deep-green);
        }

        .meta-icon {
          color: var(--primary-green);
          flex-shrink: 0;
        }

        .doctor-label-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: var(--radius-pill);
          background-color: var(--soft-mint);
          color: var(--primary-green);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 14px;
        }

        .doctor-name {
          font-size: clamp(1.6rem, 2.5vw, 2.1rem);
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .doctor-qualification {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--primary-green);
        }

        .doctor-role-pill {
          display: inline-block;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--dark-deep-green);
          margin-bottom: 16px;
        }

        .doctor-bio {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 22px;
        }

        .doctor-strengths {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .strength-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .strength-icon {
          color: var(--primary-green);
          flex-shrink: 0;
        }

        .doctor-clinic-affiliation {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: var(--radius-pill);
          background-color: var(--soft-mint-card);
          border: 1px solid var(--soft-mint-border);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-deep-green);
        }

        .heart-icon {
          color: var(--primary-green);
        }

        @media (max-width: 900px) {
          .doctor-card-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .doctor-badge-panel {
            max-width: 320px;
            margin: 0 auto;
            width: 100%;
          }
          .doctor-profile-card {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
}
