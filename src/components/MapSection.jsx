import { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Phone } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';

export default function MapSection({ className = '' }) {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const fullAddress = language === 'ta' ? clinicData.address.fullTa : clinicData.address.full;

  const handleCopy = () => {
    navigator.clipboard.writeText(clinicData.address.full).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className={`map-location-card ${className}`}>
      {/* Location Header */}
      <div className="location-card-header">
        <div className="location-title-wrap">
          <div className="loc-icon-pill">
            <MapPin size={20} />
          </div>
          <div>
            <h3 className="location-card-title">{t('clinicLocation')}</h3>
            <p className="location-subtitle">Tiruppur, Tamil Nadu</p>
          </div>
        </div>

        <button 
          type="button" 
          onClick={handleCopy} 
          className="btn-copy-address"
          aria-label="Copy clinic address"
        >
          {copied ? (
            <>
              <Check size={14} className="text-green" />
              <span>{t('copiedText')}</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>{t('copyAddressBtn')}</span>
            </>
          )}
        </button>
      </div>

      {/* Address Details Card */}
      <div className="location-address-box">
        <span className="address-meta-label">
          {language === 'ta' ? 'முழு முகவரி' : 'Full Clinic Address'}
        </span>
        <p className="location-address-text">{fullAddress}</p>
        <div className="landmark-tag-badge">
          <span className="landmark-dot"></span>
          <span>
            {language === 'ta' ? 'அடையாளம்: தமிழ்நாடு தியேட்டர் அருகில்' : 'Landmark: Near Tamil Nadu Theater'}
          </span>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="map-embed-container">
        <iframe
          title="Sindhu's Multispeciality Dental Clinic Location Map"
          className="google-map-iframe"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://maps.google.com/maps?q=${encodeURIComponent('4/52, VV Giri Complex, Palladam Main Road, Near Tamil Nadu Theater, Tiruppur, Tamil Nadu 641605')}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        ></iframe>

        <div className="map-overlay-badge">
          <div className="badge-marker-dot"></div>
          <div>
            <strong>Sindhu&apos;s Multispeciality Dental Clinic</strong>
            <span>Palladam Main Road, Tiruppur</span>
          </div>
        </div>
      </div>

      {/* Actions: Get Directions & Phone Number */}
      <div className="location-actions-row">
        <a 
          href={clinicData.directionsUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary btn-directions-action"
        >
          <Navigation size={16} />
          <span>{t('getDirectionsBtn')}</span>
        </a>

        <a 
          href={`tel:${clinicData.phoneRaw}`} 
          className="btn btn-secondary btn-phone-action"
        >
          <Phone size={16} />
          <span>{clinicData.phone}</span>
        </a>
      </div>

      <style>{`
        .map-location-card {
          background-color: #ffffff;
          border-radius: var(--radius-card);
          padding: 22px 20px;
          border: 1px solid var(--border-light);
          box-shadow: 0 4px 18px rgba(18, 73, 46, 0.05);
          display: flex;
          flex-direction: column;
          gap: 12px;
          height: 100%;
        }

        .location-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }

        .location-title-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .loc-icon-pill {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background-color: var(--soft-mint);
          color: var(--primary-green);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--soft-mint-border);
        }

        .location-card-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.2;
        }

        .location-subtitle {
          font-size: 0.75rem;
          color: var(--text-light);
          margin: 1px 0 0 0;
          font-weight: 600;
        }

        .btn-copy-address {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 11px;
          border-radius: var(--radius-pill);
          background-color: var(--soft-mint);
          color: var(--dark-deep-green);
          font-size: 0.78rem;
          font-weight: 700;
          border: 1px solid var(--soft-mint-border);
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .btn-copy-address:hover {
          background-color: var(--soft-mint-hover);
          border-color: var(--primary-green);
        }

        .text-green {
          color: #16a34a;
        }

        .location-address-box {
          background-color: var(--soft-mint-card);
          border-radius: 12px;
          padding: 10px 14px;
          border: 1px solid var(--soft-mint-border);
        }

        .address-meta-label {
          display: block;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-light);
          margin-bottom: 2px;
        }

        .location-address-text {
          font-size: 0.88rem;
          color: var(--text-primary);
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 6px;
        }

        .landmark-tag-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.76rem;
          color: var(--primary-green);
          font-weight: 700;
        }

        .landmark-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: var(--primary-green);
        }

        .map-embed-container {
          position: relative;
          width: 100%;
          height: 200px;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--border-light);
          box-shadow: 0 2px 10px rgba(18, 73, 46, 0.04);
        }

        .google-map-iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        .map-overlay-badge {
          position: absolute;
          bottom: 8px;
          left: 8px;
          right: 8px;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(8px);
          padding: 6px 10px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.76rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(29, 107, 68, 0.15);
        }

        .badge-marker-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: var(--primary-green);
          box-shadow: 0 0 6px rgba(29, 107, 68, 0.7);
          flex-shrink: 0;
        }

        .map-overlay-badge strong {
          display: block;
          color: var(--text-primary);
          font-size: 0.78rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .map-overlay-badge span {
          display: block;
          color: var(--text-muted);
          font-size: 0.7rem;
        }

        .location-actions-row {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 8px;
          margin-top: auto;
        }

        .btn-directions-action {
          width: 100%;
          padding: 10px 14px;
          font-size: 0.88rem;
        }

        .btn-phone-action {
          width: 100%;
          padding: 10px 12px;
          font-weight: 700;
          font-size: 0.86rem;
        }

        @media (max-width: 640px) {
          .map-location-card {
            padding: 18px 14px;
          }
          .map-embed-container {
            height: 180px;
          }
          .location-actions-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
