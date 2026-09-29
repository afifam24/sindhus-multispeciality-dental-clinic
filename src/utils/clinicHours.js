/**
 * Computes live clinic status based on the user's local date and time.
 * Monday - Saturday: 9:30 AM – 2:00 PM, 5:00 PM – 9:30 PM
 * Sunday: 10:00 AM – 2:00 PM, Evening: Appointment Only
 */
export function getClinicStatus(date = new Date()) {
  const day = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const currentTimeInMinutes = hours * 60 + minutes;

  // Time milestones in minutes
  const t930 = 9 * 60 + 30;   // 9:30 AM = 570 min
  const t1000 = 10 * 60;      // 10:00 AM = 600 min
  const t1400 = 14 * 60;      // 2:00 PM = 840 min
  const t1700 = 17 * 60;      // 5:00 PM = 1020 min
  const t2130 = 21 * 60 + 30; // 9:30 PM = 1290 min

  const isSunday = day === 0;

  if (isSunday) {
    if (currentTimeInMinutes < t1000) {
      return {
        isOpen: false,
        isAppointmentOnly: false,
        state: 'closed',
        badge: 'Closed',
        badgeTa: 'மூடப்பட்டுள்ளது',
        detail: 'Opens today at 10:00 AM',
        detailTa: 'இன்று காலை 10:00 மணிக்கு திறக்கும்',
        todayHours: '10:00 AM – 2:00 PM (Evening: Appointment Only)',
        todayHoursTa: 'காலை 10:00 – மதியம் 2:00 (மாலை: முன்பதிவு மட்டும்)'
      };
    } else if (currentTimeInMinutes >= t1000 && currentTimeInMinutes < t1400) {
      return {
        isOpen: true,
        isAppointmentOnly: false,
        state: 'open',
        badge: 'Open Now',
        badgeTa: 'இப்போது திறந்துள்ளது',
        detail: 'Open until 2:00 PM today',
        detailTa: 'இன்று மதியம் 2:00 மணி வரை திறந்திருக்கும்',
        todayHours: '10:00 AM – 2:00 PM (Evening: Appointment Only)',
        todayHoursTa: 'காலை 10:00 – மதியம் 2:00 (மாலை: முன்பதிவு மட்டும்)'
      };
    } else {
      return {
        isOpen: false,
        isAppointmentOnly: true,
        state: 'appointment_only',
        badge: 'Appointment Only',
        badgeTa: 'முன்பதிவு மட்டும்',
        detail: 'Sunday evening is by appointment only',
        detailTa: 'ஞாயிறு மாலை முன்பதிவு அடிப்படையில் மட்டுமே',
        todayHours: '10:00 AM – 2:00 PM (Evening: Appointment Only)',
        todayHoursTa: 'காலை 10:00 – மதியம் 2:00 (மாலை: முன்பதிவு மட்டும்)'
      };
    }
  }

  // Monday – Saturday
  if (currentTimeInMinutes < t930) {
    return {
      isOpen: false,
      isAppointmentOnly: false,
      state: 'closed',
      badge: 'Closed',
      badgeTa: 'மூடப்பட்டுள்ளது',
      detail: 'Opens today at 9:30 AM',
      detailTa: 'இன்று காலை 9:30 மணிக்கு திறக்கும்',
      todayHours: '9:30 AM – 2:00 PM, 5:00 PM – 9:30 PM',
      todayHoursTa: 'காலை 9:30 – மதியம் 2:00, மாலை 5:00 – இரவு 9:30'
    };
  } else if (currentTimeInMinutes >= t930 && currentTimeInMinutes < t1400) {
    return {
      isOpen: true,
      isAppointmentOnly: false,
      state: 'open',
      badge: 'Open Now',
      badgeTa: 'இப்போது திறந்துள்ளது',
      detail: 'Morning session open until 2:00 PM',
      detailTa: 'காலை அமர்வு மதியம் 2:00 மணி வரை திறந்திருக்கும்',
      todayHours: '9:30 AM – 2:00 PM, 5:00 PM – 9:30 PM',
      todayHoursTa: 'காலை 9:30 – மதியம் 2:00, மாலை 5:00 – இரவு 9:30'
    };
  } else if (currentTimeInMinutes >= t1400 && currentTimeInMinutes < t1700) {
    return {
      isOpen: false,
      isAppointmentOnly: false,
      state: 'break',
      badge: 'Closed (Midday Break)',
      badgeTa: 'இடைவேளை (மூடப்பட்டுள்ளது)',
      detail: 'Evening session opens at 5:00 PM',
      detailTa: 'மாலை அமர்வு 5:00 மணிக்கு தொடங்கும்',
      todayHours: '9:30 AM – 2:00 PM, 5:00 PM – 9:30 PM',
      todayHoursTa: 'காலை 9:30 – மதியம் 2:00, மாலை 5:00 – இரவு 9:30'
    };
  } else if (currentTimeInMinutes >= t1700 && currentTimeInMinutes < t2130) {
    return {
      isOpen: true,
      isAppointmentOnly: false,
      state: 'open',
      badge: 'Open Now',
      badgeTa: 'இப்போது திறந்துள்ளது',
      detail: 'Open until 9:30 PM tonight',
      detailTa: 'இன்று இரவு 9:30 மணி வரை திறந்திருக்கும்',
      todayHours: '9:30 AM – 2:00 PM, 5:00 PM – 9:30 PM',
      todayHoursTa: 'காலை 9:30 – மதியம் 2:00, மாலை 5:00 – இரவு 9:30'
    };
  } else {
    // After 9:30 PM
    const nextDaySunday = day === 6;
    return {
      isOpen: false,
      isAppointmentOnly: false,
      state: 'closed',
      badge: 'Closed for the Night',
      badgeTa: 'இன்றைய நேரம் முடிந்தது',
      detail: nextDaySunday ? 'Opens tomorrow at 10:00 AM' : 'Opens tomorrow at 9:30 AM',
      detailTa: nextDaySunday ? 'நாளை காலை 10:00 மணிக்கு திறக்கும்' : 'நாளை காலை 9:30 மணிக்கு திறக்கும்',
      todayHours: '9:30 AM – 2:00 PM, 5:00 PM – 9:30 PM',
      todayHoursTa: 'காலை 9:30 – மதியம் 2:00, மாலை 5:00 – இரவு 9:30'
    };
  }
}
