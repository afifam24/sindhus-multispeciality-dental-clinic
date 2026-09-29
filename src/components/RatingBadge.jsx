import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function RatingBadge({ variant = 'default', className = '' }) {
  const { language } = useLanguage();

  return (
    <div className={`rating-badge-container ${variant} ${className}`}>
      <div className="rating-stars">
        <Star size={16} className="star-icon filled" fill="#f59e0b" color="#f59e0b" />
        <span className="rating-score">4.9</span>
      </div>
      <span className="rating-divider">•</span>
      <span className="rating-count">
        {language === 'ta' ? '39 மதிப்பீடுகள்' : '39 Ratings'}
      </span>
      <style>{`
        .rating-badge-container {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          background-color: #ffffff;
          border: 1px solid var(--border-light);
          box-shadow: 0 4px 14px rgba(18, 73, 46, 0.06);
          font-size: 0.875rem;
        }
        .rating-badge-container.dark {
          background-color: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.18);
          color: #ffffff;
        }
        .rating-stars {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .rating-score {
          font-weight: 800;
          color: var(--text-primary);
        }
        .rating-badge-container.dark .rating-score {
          color: #ffffff;
        }
        .rating-divider {
          color: #9cb5a8;
        }
        .rating-count {
          color: var(--text-muted);
          font-weight: 600;
        }
        .rating-badge-container.dark .rating-count {
          color: #c8e0d3;
        }
      `}</style>
    </div>
  );
}
