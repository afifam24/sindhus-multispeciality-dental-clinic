import { Star, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TestimonialCard({ item }) {
  const { language } = useLanguage();

  const title = language === 'ta' ? item.titleTa : item.title;
  const summary = language === 'ta' ? item.summaryTa : item.summary;
  const tag = language === 'ta' ? item.tagTa : item.tag;
  const source = language === 'ta' ? item.sourceTa : item.source;

  return (
    <div className="review-theme-card">
      <div className="review-card-top">
        <div className="stars-row">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
          ))}
        </div>
        <span className="theme-tag">{tag}</span>
      </div>

      <h4 className="theme-title">{title}</h4>
      <p className="theme-summary">&ldquo;{summary}&rdquo;</p>

      <div className="review-card-footer">
        <div className="source-info">
          <CheckCircle size={15} className="source-check-icon" />
          <span className="source-text">{source}</span>
        </div>
      </div>

      <style>{`
        .review-theme-card {
          background-color: #ffffff;
          border-radius: var(--radius-card);
          padding: 26px;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .review-theme-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
        }

        .review-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .stars-row {
          display: flex;
          gap: 3px;
        }

        .theme-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary-green);
          background-color: var(--soft-mint);
          padding: 3px 10px;
          border-radius: var(--radius-pill);
          letter-spacing: 0.02em;
        }

        .theme-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
          line-height: 1.35;
        }

        .theme-summary {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 20px;
          font-style: italic;
        }

        .review-card-footer {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid rgba(22, 38, 29, 0.06);
        }

        .source-info {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .source-check-icon {
          color: var(--primary-green);
        }

        .source-text {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
      `}</style>
    </div>
  );
}
