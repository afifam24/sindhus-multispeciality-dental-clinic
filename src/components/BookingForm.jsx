import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Calendar, 
  Phone, 
  User, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  MessageCircle,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { treatments } from '../data/treatments';
import { clinicData } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';

export default function BookingForm({ initialTreatment = '' }) {
  const [searchParams] = useSearchParams();
  const { language, t } = useLanguage();

  const queryService = searchParams.get('service') || initialTreatment;

  const matchedTreatment = useMemo(() => {
    if (!queryService) return '';
    const match = treatments.find(
      tr => tr.name.toLowerCase() === queryService.toLowerCase() ||
           tr.id === queryService
    );
    return match ? match.name : queryService;
  }, [queryService]);

  const [todayStr] = useState(() => new Date().toISOString().split('T')[0]);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: matchedTreatment,
    date: '',
    timeSlot: 'Morning (9:30 AM – 1:00 PM)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const activeTreatment = formData.treatment || matchedTreatment;

  const timeOptions = [
    { id: 'morning', label: 'Morning (9:30 AM – 1:00 PM)', labelTa: 'காலை (9:30 – 1:00)' },
    { id: 'afternoon', label: 'Afternoon (1:00 PM – 2:00 PM)', labelTa: 'மதியம் (1:00 – 2:00)' },
    { id: 'evening', label: 'Evening (5:00 PM – 7:30 PM)', labelTa: 'மாலை (5:00 – 7:30)' },
    { id: 'night', label: 'Night (7:30 PM – 9:30 PM)', labelTa: 'இரவு (7:30 – 9:30)' }
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = language === 'ta' ? 'பெயரை உள்ளிடவும்' : 'Please enter your full name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = language === 'ta' ? 'செல்லுபடியாகும் பெயரை உள்ளிடவும்' : 'Name is too short';
    }

    const cleanedPhone = formData.phone.replace(/[\s-()+]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = language === 'ta' ? 'தொலைபேசி எண்ணை உள்ளிடவும்' : 'Phone number is required';
    } else if (!/^\d{10}$/.test(cleanedPhone) && !/^(91)?\d{10}$/.test(cleanedPhone)) {
      newErrors.phone = language === 'ta' ? '10 இலக்க மொபைல் எண்ணை உள்ளிடவும்' : 'Please enter a valid 10-digit mobile number';
    }

    if (!activeTreatment) {
      newErrors.treatment = language === 'ta' ? 'சிகிச்சையை தேர்ந்தெடுக்கவும்' : 'Please select a treatment';
    }

    if (!formData.date) {
      newErrors.date = language === 'ta' ? 'தேதியை தேர்ந்தெடுக்கவும்' : 'Please select a preferred date';
    } else if (formData.date < todayStr) {
      newErrors.date = language === 'ta' ? 'தேதி கடந்த காலமாக இருக்கக்கூடாது' : 'Date cannot be in the past';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleTimeSelect = (slotLabel) => {
    setFormData(prev => ({ ...prev, timeSlot: slotLabel }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      treatment: '',
      date: '',
      timeSlot: 'Morning (9:30 AM – 1:00 PM)',
      message: ''
    });
    setIsSubmitted(false);
  };

  // WhatsApp prefilled message
  const treatmentText = activeTreatment ? ` regarding ${activeTreatment}` : '';
  const dateText = formData.date ? ` on ${formData.date}` : '';
  const timeText = formData.timeSlot ? ` (${formData.timeSlot})` : '';
  const nameText = formData.name ? ` My name is ${formData.name}.` : '';
  const whatsappMsg = `Hello Sindhu's Multispeciality Dental Clinic, I would like to enquire about a dental appointment${treatmentText}${dateText}${timeText}.${nameText}`;
  const whatsappUrl = `https://wa.me/${clinicData.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  if (isSubmitted) {
    return (
      <div className="appointment-card-shell appointment-success-view" role="alert">
        <div className="success-icon-badge">
          <CheckCircle2 size={40} className="success-svg" />
        </div>
        <h3 className="success-title">{t('bookingSuccessTitle')}</h3>
        <p className="success-subtitle">{t('bookingSuccessMsg')}</p>

        <div className="booking-receipt-box">
          <div className="receipt-header">
            <Sparkles size={15} className="receipt-icon" />
            <span>{language === 'ta' ? 'முன்பதிவு விவரங்கள்' : 'Appointment Request Summary'}</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">{t('fullName')}</span>
            <span className="receipt-value">{formData.name}</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">{t('phoneNumber')}</span>
            <span className="receipt-value">{formData.phone}</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">{t('treatmentSelect')}</span>
            <span className="receipt-value">{activeTreatment}</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">{t('preferredDate')}</span>
            <span className="receipt-value">{formData.date}</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">{t('preferredTime')}</span>
            <span className="receipt-value">{formData.timeSlot}</span>
          </div>
        </div>

        <p className="demo-badge-note">
          {t('demoBookingNotice')}
        </p>

        <div className="success-actions-row">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp-action"
          >
            <MessageCircle size={17} />
            <span>{t('whatsappBtn')}</span>
          </a>

          <button 
            type="button" 
            onClick={handleReset} 
            className="btn btn-secondary btn-sm"
          >
            <span>{t('bookAnotherBtn')}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="appointment-card-shell">
      <div className="appointment-header-block">
        <div className="header-pill-tag">
          <Sparkles size={13} />
          <span>{language === 'ta' ? 'நேரடி முன்பதிவு' : 'Fast & Easy Booking'}</span>
        </div>
        <h2 className="appointment-main-title">{t('bookingFormTitle')}</h2>
        <p className="appointment-supporting-text">{t('bookingFormSubtitle')}</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="modern-appointment-form">
        {/* Full Name & Phone Number in 2-Col Grid */}
        <div className="form-fields-grid-2">
          <div className="modern-input-group">
            <label htmlFor="booking-name" className="modern-label">
              <span>{t('fullName')}</span>
              <span className="req-star">*</span>
            </label>
            <div className="input-with-icon">
              <User size={16} className="input-leading-icon" />
              <input
                type="text"
                id="booking-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('fullNamePlaceholder')}
                className={`modern-field-input ${errors.name ? 'is-invalid' : ''}`}
                required
                autoComplete="name"
              />
            </div>
            {errors.name && (
              <span className="field-error-msg">
                <AlertCircle size={12} /> {errors.name}
              </span>
            )}
          </div>

          <div className="modern-input-group">
            <label htmlFor="booking-phone" className="modern-label">
              <span>{t('phoneNumber')}</span>
              <span className="req-star">*</span>
            </label>
            <div className="input-with-icon">
              <Phone size={16} className="input-leading-icon" />
              <input
                type="tel"
                id="booking-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('phoneNumberPlaceholder')}
                className={`modern-field-input ${errors.phone ? 'is-invalid' : ''}`}
                required
                autoComplete="tel"
              />
            </div>
            {errors.phone && (
              <span className="field-error-msg">
                <AlertCircle size={12} /> {errors.phone}
              </span>
            )}
          </div>
        </div>

        {/* Select Treatment Dropdown */}
        <div className="modern-input-group">
          <label htmlFor="booking-treatment" className="modern-label">
            <span>{t('treatmentSelect')}</span>
            <span className="req-star">*</span>
          </label>
          <div className="select-with-custom-arrow">
            <select
              id="booking-treatment"
              name="treatment"
              value={activeTreatment}
              onChange={handleChange}
              className={`modern-field-select ${errors.treatment ? 'is-invalid' : ''}`}
              required
            >
              <option value="">-- {t('treatmentSelect')} --</option>
              {treatments.map((treatment) => (
                <option key={treatment.id} value={treatment.name}>
                  {language === 'ta' ? `${treatment.nameTa} (${treatment.name})` : treatment.name}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="select-dropdown-chevron" />
          </div>
          {errors.treatment && (
            <span className="field-error-msg">
              <AlertCircle size={12} /> {errors.treatment}
            </span>
          )}
        </div>

        {/* Preferred Date */}
        <div className="modern-input-group">
          <label htmlFor="booking-date" className="modern-label">
            <span>{t('preferredDate')}</span>
            <span className="req-star">*</span>
          </label>
          <div className="input-with-icon">
            <Calendar size={16} className="input-leading-icon" />
            <input
              type="date"
              id="booking-date"
              name="date"
              min={todayStr}
              value={formData.date}
              onChange={handleChange}
              className={`modern-field-input modern-date-input ${errors.date ? 'is-invalid' : ''}`}
              required
            />
          </div>
          {errors.date && (
            <span className="field-error-msg">
              <AlertCircle size={12} /> {errors.date}
            </span>
          )}
        </div>

        {/* Preferred Time: Interactive Modern Pill Selector */}
        <div className="modern-input-group">
          <label className="modern-label">
            <Clock size={15} />
            <span>{t('preferredTime')}</span>
          </label>
          <div className="time-slots-chips-grid">
            {timeOptions.map((opt) => {
              const isSelected = formData.timeSlot === opt.label;
              return (
                <button
                  key={opt.id}
                  type="button"
                  className={`time-chip-btn ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => handleTimeSelect(opt.label)}
                >
                  <span className="chip-indicator"></span>
                  <span className="chip-text">
                    {language === 'ta' ? opt.labelTa : opt.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Message or Dental Concern */}
        <div className="modern-input-group">
          <label htmlFor="booking-message" className="modern-label">
            <MessageSquare size={15} />
            <span>{t('messageOptional')}</span>
          </label>
          <textarea
            id="booking-message"
            name="message"
            rows="2"
            value={formData.message}
            onChange={handleChange}
            placeholder={t('messagePlaceholder')}
            className="modern-field-textarea"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-submit-modern"
        >
          <Calendar size={16} />
          <span>{isSubmitting ? t('submittingBtn') : t('submitRequestBtn')}</span>
        </button>

        {/* OR Divider & WhatsApp Booking */}
        <div className="modern-divider-wrap">
          <div className="divider-line"></div>
          <span className="divider-text">{language === 'ta' ? 'அல்லது' : 'or'}</span>
          <div className="divider-line"></div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp-action"
        >
          <MessageCircle size={18} className="whatsapp-bold-icon" />
          <span>{t('whatsappBtn')}</span>
        </a>
      </form>
    </div>
  );
}
