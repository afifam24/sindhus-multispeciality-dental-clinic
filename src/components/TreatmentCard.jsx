import { Link } from 'react-router-dom';
import { 
  Baby, 
  Stethoscope, 
  ShieldAlert, 
  Sparkles, 
  Layers, 
  Smile, 
  CheckCircle2, 
  HeartHandshake, 
  Anchor, 
  Scissors, 
  Activity, 
  Search,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  Baby,
  Stethoscope,
  ShieldAlert,
  Sparkles,
  Layers,
  Smile,
  CheckCircle2,
  HeartHandshake,
  Anchor,
  Scissors,
  Activity,
  Search
};

export default function TreatmentCard({ treatment, featured = false }) {
  const { language, t } = useLanguage();
  const IconComponent = iconMap[treatment.icon] || Sparkles;

  const treatmentName = language === 'ta' ? treatment.nameTa : treatment.name;
  const treatmentDesc = language === 'ta' ? treatment.descriptionTa : treatment.description;
  const bookingUrl = `/contact?service=${encodeURIComponent(treatment.name)}`;

  return (
    <div className={`treatment-card ${featured ? 'is-featured' : ''}`}>
      <div className="card-top">
        <div className="treatment-icon-wrap">
          <IconComponent size={24} className="treatment-icon" />
        </div>
        {treatment.featured && (
          <span className="featured-pill">
            {language === 'ta' ? 'முக்கிய சிகிச்சை' : 'Featured Care'}
          </span>
        )}
      </div>

      <div className="card-content">
        <h3 className="treatment-title">{treatmentName}</h3>
        <p className="treatment-description">{treatmentDesc}</p>
      </div>

      <div className="card-footer">
        <Link 
          to={bookingUrl} 
          className="treatment-action-link"
          aria-label={`Book appointment for ${treatment.name}`}
        >
          <span>{t('bookThisTreatment')}</span>
          <ArrowRight size={17} className="arrow-icon" />
        </Link>
      </div>

      <style>{`
        .treatment-card {
          background-color: #ffffff;
          border-radius: var(--radius-card);
          padding: 26px;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.2s ease;
          position: relative;
        }

        .treatment-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
          border-color: rgba(29, 107, 68, 0.3);
        }

        .treatment-card.is-featured {
          background: linear-gradient(180deg, #ffffff 0%, #f7faf8 100%);
          border-color: rgba(29, 107, 68, 0.22);
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .treatment-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background-color: var(--soft-mint);
          color: var(--primary-green);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--soft-mint-border);
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .treatment-card:hover .treatment-icon-wrap {
          background-color: var(--primary-green);
          color: #ffffff;
          transform: scale(1.05);
        }

        .featured-pill {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary-green);
          background-color: var(--soft-mint);
          padding: 3px 10px;
          border-radius: var(--radius-pill);
          letter-spacing: 0.02em;
          border: 1px solid var(--soft-mint-border);
        }

        .treatment-title {
          font-size: 1.22rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .treatment-description {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.58;
          margin-bottom: 22px;
        }

        .card-footer {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid rgba(22, 38, 29, 0.06);
        }

        .treatment-action-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.925rem;
          font-weight: 700;
          color: var(--primary-green);
          text-decoration: none;
          transition: gap 0.2s ease, color 0.2s ease;
        }

        .treatment-action-link:hover {
          color: var(--primary-green-hover);
          gap: 12px;
        }

        .arrow-icon {
          transition: transform 0.2s ease;
        }

        .treatment-action-link:hover .arrow-icon {
          transform: translateX(3px);
        }
      `}</style>
    </div>
  );
}
