import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { getClinicStatus } from '../utils/clinicHours';
import { useLanguage } from '../context/LanguageContext';

export default function ClinicStatus({ showDetail = false, className = '' }) {
  const { language } = useLanguage();
  const [status, setStatus] = useState(() => getClinicStatus());

  useEffect(() => {
    // Refresh status every 30 seconds
    const interval = setInterval(() => {
      setStatus(getClinicStatus());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const badgeText = language === 'ta' ? status.badgeTa : status.badge;
  const detailText = language === 'ta' ? status.detailTa : status.detail;

  return (
    <div className={`clinic-status-box status-${status.state} ${className}`}>
      <span className="status-indicator">
        <span className="status-ping"></span>
        <span className="status-dot"></span>
      </span>
      <span className="status-badge-text">{badgeText}</span>
      {showDetail && (
        <>
          <span className="status-sep">•</span>
          <span className="status-detail-text">
            <Clock size={13} className="inline-clock" />
            {detailText}
          </span>
        </>
      )}
      <style>{`
        .clinic-status-box {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          font-size: 0.85rem;
          font-weight: 600;
          background-color: #ffffff;
          border: 1px solid var(--border-light);
          box-shadow: 0 2px 10px rgba(18, 73, 46, 0.05);
          width: fit-content;
        }

        .status-open {
          border-color: rgba(34, 197, 94, 0.35);
          color: #14532d;
        }
        .status-open .status-dot {
          background-color: #22c55e;
        }
        .status-open .status-ping {
          background-color: #86efac;
        }

        .status-appointment_only {
          border-color: rgba(245, 158, 11, 0.4);
          color: #92400e;
        }
        .status-appointment_only .status-dot {
          background-color: #f59e0b;
        }
        .status-appointment_only .status-ping {
          background-color: #fde68a;
        }

        .status-closed, .status-break {
          border-color: rgba(239, 68, 68, 0.3);
          color: #7f1d1d;
        }
        .status-closed .status-dot, .status-break .status-dot {
          background-color: #ef4444;
        }
        .status-closed .status-ping, .status-break .status-ping {
          background-color: #fca5a5;
        }

        .status-indicator {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 10px;
          height: 10px;
        }

        .status-dot {
          position: relative;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .status-ping {
          position: absolute;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          opacity: 0.75;
          animation: statusPulse 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes statusPulse {
          0% { transform: scale(0.8); opacity: 0.8; }
          70%, 100% { transform: scale(2.2); opacity: 0; }
        }

        .status-sep {
          color: #9cb5a8;
        }

        .status-detail-text {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.825rem;
        }

        .inline-clock {
          opacity: 0.75;
        }
      `}</style>
    </div>
  );
}
