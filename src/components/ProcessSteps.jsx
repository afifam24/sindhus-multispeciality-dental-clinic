import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { processSteps } from '../data/treatments';

export default function ProcessSteps({ variant = 'cards' }) {
  const { language } = useLanguage();

  if (variant === 'strip') {
    return (
      <div className="process-strip-wrapper" aria-label="Treatment Process Flow">
        <div className="process-strip-inner">
          {/* Repeating sequence for continuous subtle marquee effect */}
          {[1, 2].map((cycle) => (
            <div key={cycle} className="process-marquee-track">
              {processSteps.map((item, idx) => (
                <div key={`${cycle}-${item.number}`} className="marquee-item">
                  <span className="marquee-num">{item.number}</span>
                  <span className="marquee-step">
                    {language === 'ta' ? item.stepTa : item.step}
                  </span>
                  {idx < processSteps.length - 1 && (
                    <span className="marquee-arrow" aria-hidden="true">→</span>
                  )}
                  {idx === processSteps.length - 1 && (
                    <span className="marquee-dot" aria-hidden="true">•</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <style>{`
          .process-strip-wrapper {
            background-color: var(--soft-mint);
            border-top: 1px solid var(--soft-mint-border);
            border-bottom: 1px solid var(--soft-mint-border);
            overflow: hidden;
            padding: 16px 0;
            width: 100%;
          }

          .process-strip-inner {
            display: flex;
            width: max-content;
            animation: stripSlide 30s linear infinite;
          }

          .process-strip-inner:hover {
            animation-play-state: paused;
          }

          @keyframes stripSlide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .process-marquee-track {
            display: flex;
            align-items: center;
            gap: 28px;
            padding-right: 28px;
          }

          .marquee-item {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 1.05rem;
            font-weight: 700;
            color: var(--dark-deep-green);
          }

          .marquee-num {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background-color: rgba(29, 107, 68, 0.12);
            color: var(--primary-green);
            font-size: 0.8rem;
            font-weight: 800;
          }

          .marquee-step {
            letter-spacing: -0.01em;
          }

          .marquee-arrow {
            color: var(--primary-green);
            font-weight: 400;
            opacity: 0.6;
            margin-left: 8px;
          }

          .marquee-dot {
            color: var(--primary-green);
            opacity: 0.4;
            margin-left: 12px;
          }

          @media (prefers-reduced-motion: reduce) {
            .process-strip-inner {
              animation: none;
              overflow-x: auto;
              width: 100%;
              justify-content: space-around;
            }
          }
        `}</style>
      </div>
    );
  }

  // Cards layout for Services page & detailed view
  return (
    <div className="process-cards-section">
      <div className="process-grid">
        {processSteps.map((step, idx) => (
          <div key={step.number} className="process-card">
            <div className="process-card-top">
              <span className="step-badge">{step.number}</span>
              <span className="step-name">
                {language === 'ta' ? step.stepTa : step.step}
              </span>
              {idx < processSteps.length - 1 && (
                <ArrowRight size={18} className="step-next-icon" aria-hidden="true" />
              )}
              {idx === processSteps.length - 1 && (
                <CheckCircle2 size={18} className="step-next-icon final-step" aria-hidden="true" />
              )}
            </div>
            <h4 className="step-card-title">
              {language === 'ta' ? step.titleTa : step.title}
            </h4>
            <p className="step-card-desc">
              {language === 'ta' ? step.descriptionTa : step.description}
            </p>
          </div>
        ))}
      </div>

      <p className="process-assessment-note">
        {language === 'ta'
          ? '* துல்லியமான சிகிச்சைத் திட்டமிடல் மற்றும் தேவைப்படும் அமர்வுகள் தொழில்முறை மருத்துவ பரிசோதனைக்குப் பின்னரே தீர்மானிக்கப்படுகிறது.'
          : '* Treatment planning, duration, and clinical requirements depend strictly upon individualized professional dental assessment.'}
      </p>

      <style>{`
        .process-cards-section {
          width: 100%;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .process-card {
          background: #ffffff;
          border-radius: var(--radius-card);
          padding: 24px;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-card);
          position: relative;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .process-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
        }

        .process-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .step-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background-color: var(--soft-mint);
          color: var(--primary-green);
          font-weight: 800;
          font-size: 0.95rem;
          border: 1px solid var(--soft-mint-border);
        }

        .step-name {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--text-light);
        }

        .step-next-icon {
          color: var(--primary-green);
          opacity: 0.4;
        }

        .step-next-icon.final-step {
          color: #16a34a;
          opacity: 0.8;
        }

        .step-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .step-card-desc {
          font-size: 0.925rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin: 0;
        }

        .process-assessment-note {
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-light);
          margin-top: 24px;
          margin-bottom: 0;
          font-style: italic;
        }

        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .process-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
