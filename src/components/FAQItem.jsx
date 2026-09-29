import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FAQItem({ faq, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { language } = useLanguage();

  const question = language === 'ta' ? faq.questionTa : faq.question;
  const answer = language === 'ta' ? faq.answerTa : faq.answer;
  const contentId = `faq-content-${faq.id}`;
  const buttonId = `faq-button-${faq.id}`;

  return (
    <div className={`faq-item-card ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        id={buttonId}
        className="faq-question-btn"
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="faq-question-text">{question}</span>
        <span className={`faq-chevron-wrap ${isOpen ? 'rotate' : ''}`} aria-hidden="true">
          <ChevronDown size={20} />
        </span>
      </button>

      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={`faq-answer-collapse ${isOpen ? 'open' : ''}`}
      >
        <div className="faq-answer-inner">
          <p className="faq-answer-text">{answer}</p>
        </div>
      </div>

      <style>{`
        .faq-item-card {
          background-color: #ffffff;
          border-radius: 18px;
          border: 1px solid var(--border-light);
          box-shadow: 0 4px 16px rgba(18, 73, 46, 0.04);
          overflow: hidden;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .faq-item-card:hover {
          border-color: rgba(29, 107, 68, 0.24);
        }

        .faq-item-card.is-open {
          border-color: rgba(29, 107, 68, 0.35);
          box-shadow: var(--shadow-card);
        }

        .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          background: transparent;
          text-align: left;
          border: none;
          cursor: pointer;
          gap: 16px;
        }

        .faq-question-btn:focus-visible {
          outline: 2px solid var(--primary-green);
          outline-offset: -2px;
        }

        .faq-question-text {
          font-size: 1.08rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .faq-item-card.is-open .faq-question-text {
          color: var(--primary-green);
        }

        .faq-chevron-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: var(--soft-mint);
          color: var(--primary-green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease;
        }

        .faq-chevron-wrap.rotate {
          transform: rotate(180deg);
          background-color: var(--primary-green);
          color: #ffffff;
        }

        .faq-answer-collapse {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .faq-answer-collapse.open {
          grid-template-rows: 1fr;
        }

        .faq-answer-inner {
          overflow: hidden;
        }

        .faq-answer-text {
          padding: 0 24px 20px;
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.65;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
