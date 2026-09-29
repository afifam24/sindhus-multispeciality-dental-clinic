import { useState } from 'react';
import { Clock, Check } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';

export default function ClinicHours({ className = '' }) {
  const { language } = useLanguage();
  const [activeIndex] = useState(() => {
    const currentDayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday...
    return currentDayIndex === 0 ? 6 : currentDayIndex - 1;
  });

  return (
    <div className={`clinic-hours-card ${className}`}>
      <div className="hours-card-header">
        <Clock size={20} className="hours-icon" />
        <h4 className="hours-title">
          {language === 'ta' ? 'மருத்துவமனை வேலை நேரம்' : 'Clinic Hours Schedule'}
        </h4>
      </div>

      <div className="hours-list">
        {clinicData.schedule.map((item, index) => {
          const isToday = index === activeIndex;
          return (
            <div key={item.day} className={`hours-row ${isToday ? 'is-today' : ''}`}>
              <div className="hours-day-wrap">
                <span className="hours-day-name">
                  {language === 'ta' ? item.dayTa : item.day}
                </span>
                {isToday && (
                  <span className="today-chip">
                    <Check size={12} />
                    {language === 'ta' ? 'இன்று' : 'Today'}
                  </span>
                )}
              </div>
              <div className="hours-time-val">
                {language === 'ta' ? item.hoursTa : item.hours}
              </div>
            </div>
          );
        })}
      </div>

      <div className="hours-card-footer">
        <p className="sunday-note">
          {language === 'ta'
            ? '* ஞாயிறு மாலை அவசர சிகிச்சைகள் மற்றும் சிறப்பு ஆலோசனைகள் முன்பதிவு அடிப்படையில் மட்டுமே.'
            : '* Sunday evening consultations are arranged strictly by prior appointment.'}
        </p>
      </div>

      <style>{`
        .clinic-hours-card {
          background: #ffffff;
          border-radius: var(--radius-card);
          padding: 24px;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-card);
        }

        .hours-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-light);
        }

        .hours-icon {
          color: var(--primary-green);
        }

        .hours-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .hours-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .hours-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: 12px;
          transition: background-color 0.2s ease;
          font-size: 0.925rem;
        }

        .hours-row:hover {
          background-color: var(--soft-mint);
        }

        .hours-row.is-today {
          background-color: var(--soft-mint);
          border: 1px solid var(--soft-mint-border);
          font-weight: 600;
        }

        .hours-day-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hours-day-name {
          color: var(--text-primary);
          font-weight: 600;
        }

        .today-chip {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 2px 8px;
          border-radius: var(--radius-pill);
          background-color: var(--primary-green);
          color: #ffffff;
          font-size: 0.725rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .hours-time-val {
          color: var(--text-muted);
          text-align: right;
          font-size: 0.875rem;
        }

        .hours-row.is-today .hours-time-val {
          color: var(--dark-deep-green);
          font-weight: 700;
        }

        .hours-card-footer {
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid var(--border-light);
        }

        .sunday-note {
          font-size: 0.8rem;
          color: var(--text-light);
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 640px) {
          .hours-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
          .hours-time-val {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
}
