export const serviceCategories = [
  {
    id: "general-preventive",
    name: "General & Preventive Care",
    nameTa: "பொது & தடுப்பு பல் பராமரிப்பு",
    description: "Routine check-ups, cleanings, and specialized dental care tailored for both children and adults.",
    descriptionTa: "குழந்தைகள் மற்றும் பெரியவர்களுக்கான வழக்கமான பரிசோதனைகள் மற்றும் சிறப்பான பல் சிகிச்சை."
  },
  {
    id: "restorative",
    name: "Restorative Care",
    nameTa: "மறுசீரமைப்பு பல் சிகிச்சை",
    description: "Care aimed at restoring function, comfort, and aesthetics to damaged or missing teeth.",
    descriptionTa: "சேதமடைந்த அல்லது விடுபட்ட பற்களின் செயல்பாடு மற்றும் அழகை மீட்டெடுக்கும் சிகிச்சை."
  },
  {
    id: "orthodontic",
    name: "Orthodontic Care",
    nameTa: "பல் சீரமைப்பு சிகிச்சை",
    description: "Treatments focused on healthy alignment, bite improvement, and smile balance.",
    descriptionTa: "பற்களின் சீரமைப்பு மற்றும் அழகான புன்னகைக்கான நவீன சிகிச்சை."
  },
  {
    id: "gum-implant",
    name: "Gum & Implant Care",
    nameTa: "ஈறு & இம்ப்ளான்ட் சிகிச்சை",
    description: "Advanced solutions for periodontal health and fixed tooth replacements.",
    descriptionTa: "ஈறு ஆரோக்கியம் மற்றும் நிரந்தர பல் பொருத்துதலுக்கான நவீன தீர்வுகள்."
  },
  {
    id: "oral-surgery",
    name: "Oral Surgery",
    nameTa: "வாய்வழி அறுவை சிகிச்சை",
    description: "Specialized clinical procedures for wisdom teeth and complex maxillofacial conditions.",
    descriptionTa: "ஞானப்பற்கள் அகற்றுதல் மற்றும் முக எலும்பு தொடர்பான அறுவை சிகிச்சைகள்."
  },
  {
    id: "oral-diagnostics",
    name: "Oral Diagnostics",
    nameTa: "வாய்வழி பரிசோதனை & கண்டறிதல்",
    description: "Professional clinical evaluation and diagnostic screenings for oral health changes.",
    descriptionTa: "வாய்வழி மாற்றங்களை தொழில்முறையாக பரிசோதித்து கண்டறிதல்."
  }
];

export const treatments = [
  {
    id: "child-care-dentistry",
    name: "Child Care Dentistry",
    nameTa: "குழந்தைகளுக்கான பல் சிகிச்சை",
    categoryId: "general-preventive",
    description: "Dental care focused on supporting the oral health and dental needs of children.",
    descriptionTa: "குழந்தைகளின் வாய் ஆரோக்கியம் மற்றும் பல் தேவைகளை ஆதரிக்கும் சிறப்பான பல் பராமரிப்பு.",
    featured: true,
    icon: "Baby",
    image: "/src/assets/images/child_care_dentistry.jpg"
  },
  {
    id: "general-dental-treatments",
    name: "General Dental Treatments",
    nameTa: "பொது பல் சிகிச்சைகள்",
    categoryId: "general-preventive",
    description: "A range of dental care based on individual patient needs.",
    descriptionTa: "ஒவ்வொரு நோயாளியின் தேவைக்கேற்ப வழங்கப்படும் விரிவான பல் மருத்துவ பராமரிப்பு.",
    featured: false,
    icon: "Stethoscope"
  },
  {
    id: "root-canal-treatment",
    name: "Root Canal Treatment",
    nameTa: "ரூட் கெனால் சிகிச்சை (வேர் சிகிச்சை)",
    categoryId: "restorative",
    description: "Treatment intended to address problems affecting the inside of a tooth and help preserve the natural tooth.",
    descriptionTa: "பல்லின் உட்பகுதியை பாதிக்கும் பிரச்சனைகளுக்கு சிகிச்சையளித்து, இயற்கை பல்லை பாதுகாக்கும் முறை.",
    featured: true,
    icon: "ShieldAlert"
  },
  {
    id: "teeth-restoration",
    name: "Teeth Restoration",
    nameTa: "பல் மறுசீரமைப்பு",
    categoryId: "restorative",
    description: "Restorative dental care aimed at improving the function and appearance of affected or damaged teeth.",
    descriptionTa: "பாதிக்கப்பட்ட அல்லது சேதமடைந்த பற்களின் செயல்பாடு மற்றும் தோற்றத்தை மேம்படுத்தும் பராமரிப்பு.",
    featured: false,
    icon: "Sparkles"
  },
  {
    id: "tooth-replacement",
    name: "Tooth Replacement",
    nameTa: "பல் மாற்று சிகிச்சை",
    categoryId: "restorative",
    description: "Options for replacing missing teeth based on individual dental needs and professional assessment.",
    descriptionTa: "தனிப்பட்ட தேவைகள் மற்றும் மருத்துவர் பரிந்துரையின் அடிப்படையில் விடுபட்ட பற்களை மாற்றியமைக்கும் முறைகள்.",
    featured: false,
    icon: "Layers"
  },
  {
    id: "orthodontic-treatment",
    name: "Orthodontic Treatment",
    nameTa: "பல் சீரமைப்பு சிகிச்சை (கிளிப் சிகிச்சை)",
    categoryId: "orthodontic",
    description: "Care focused on improving tooth alignment and bite based on individual dental assessment.",
    descriptionTa: "பல் வரிசை மற்றும் கடிக்கும் அமைப்பை சீரமைக்க தனிப்பட்ட பரிசோதனை அடிப்படையில் வழங்கப்படும் சிகிச்சை.",
    featured: true,
    icon: "Smile"
  },
  {
    id: "straightening-teeth",
    name: "Straightening Teeth",
    nameTa: "பற்களை நேராக்குதல்",
    categoryId: "orthodontic",
    description: "Treatment focused on improving tooth alignment and creating a more balanced smile.",
    descriptionTa: "பற்களின் சமச்சீரான வரிசையை மேம்படுத்தி அழகிய புன்னகையை உருவாக்கும் சிகிச்சை.",
    featured: false,
    icon: "CheckCircle2",
    image: "/src/assets/images/teeth_straightening.jpg"
  },
  {
    id: "gum-surgery",
    name: "Gum Surgery",
    nameTa: "ஈறு அறுவை சிகிச்சை",
    categoryId: "gum-implant",
    description: "Surgical dental care for certain gum-related conditions when clinically appropriate.",
    descriptionTa: "மருத்துவ ரீதியாக தேவைப்படும்போது ஈறு தொடர்பான பிரச்சனைகளுக்கான அறுவை சிகிச்சை.",
    featured: false,
    icon: "HeartHandshake"
  },
  {
    id: "implant-treatment",
    name: "Implant Treatment",
    nameTa: "பல் இம்ப்ளான்ட் சிகிச்சை",
    categoryId: "gum-implant",
    description: "Dental implant treatment for suitable cases of tooth replacement, following professional assessment.",
    descriptionTa: "பரிசோதனைக்குப் பின் பொருத்தமான நோயாளிகளுக்கு விடுபட்ட பற்களை நிரந்தரமாக பொருத்தும் சிகிச்சை.",
    featured: true,
    icon: "Anchor"
  },
  {
    id: "wisdom-tooth-removal",
    name: "Wisdom Tooth Removal",
    nameTa: "ஞானப்பல் அகற்றுதல்",
    categoryId: "oral-surgery",
    description: "Assessment and removal of wisdom teeth when clinically required.",
    descriptionTa: "மருத்துவ ரீதியாக தேவைப்படும் போது ஞானப்பற்களை பரிசோதித்து பாதுகாப்பாக அகற்றுதல்.",
    featured: false,
    icon: "Scissors"
  },
  {
    id: "oral-maxillofacial-surgery",
    name: "Oral and Maxillofacial Surgery",
    nameTa: "வாய் மற்றும் தாடை அறுவை சிகிச்சை",
    categoryId: "oral-surgery",
    description: "Surgical dental care involving the mouth, jaws, and related facial structures.",
    descriptionTa: "வாய், தாடை மற்றும் அதனுடன் தொடர்புடைய முக அமைப்புகள் சார்ந்த அறுவை சிகிச்சை பராமரிப்பு.",
    featured: false,
    icon: "Activity"
  },
  {
    id: "oral-cancer-diagnosis",
    name: "Oral Cancer Diagnosis",
    nameTa: "வாய் புற்றுநோய் பரிசோதனை & கண்டறிதல்",
    categoryId: "oral-diagnostics",
    description: "Diagnostic evaluation of concerning oral changes as part of a professional dental assessment.",
    descriptionTa: "மருத்துவ பரிசோதனையின் ஒரு பகுதியாக வாயில் ஏற்படும் மாற்றங்களை துல்லியமாக மதிப்பீடு செய்தல்.",
    featured: false,
    icon: "Search"
  }
];

export const processSteps = [
  {
    number: "01",
    step: "Check-up",
    stepTa: "பரிசோதனை",
    title: "Comprehensive Check-up",
    titleTa: "முழுமையான பரிசோதனை",
    description: "Thorough oral examination and discussion of your dental concerns in a calm setting.",
    descriptionTa: "அமைதியான சூழலில் உங்கள் பற்களை முழுமையாக பரிசோதித்து ஆலோசனை வழங்குதல்."
  },
  {
    number: "02",
    step: "Planning",
    stepTa: "திட்டமிடல்",
    title: "Personalized Planning",
    titleTa: "தனிப்பயன் சிகிச்சைத் திட்டம்",
    description: "Clear explanations of treatment options tailored specifically to your clinical needs.",
    descriptionTa: "உங்கள் மருத்துவ தேவைக்கேற்ப தெளிவான சிகிச்சை முறைகளை விளக்குதல்."
  },
  {
    number: "03",
    step: "Treatment",
    stepTa: "சிகிச்சை",
    title: "Gentle Treatment",
    titleTa: "கனிவான சிகிச்சை",
    description: "Care performed with precision, modern hygiene standards, and focus on patient comfort.",
    descriptionTa: "நோயாளிக்கு சௌகரியமான முறையில் சுத்தமான சூழலில் துல்லியமாக வழங்கப்படும் சிகிச்சை."
  },
  {
    number: "04",
    step: "Follow-up",
    stepTa: "பின்தொடர் பராமரிப்பு",
    title: "Ongoing Follow-up",
    titleTa: "தொடர் கவனிப்பு",
    description: "Guidance and scheduled reviews to support healthy recovery and long-term smile care.",
    descriptionTa: "விரைவான குணமடைதல் மற்றும் தொடர் வாய் ஆரோக்கியத்திற்கான வழிகாட்டுதல்."
  }
];
