# Sindhu's Multispeciality Dental Clinic — Premium Web Application

A modern, responsive, production-quality React Single Page Application (SPA) built for **Sindhu's Multispeciality Dental Clinic** located on Palladam Main Road, Tiruppur, Tamil Nadu.

---

## 🌟 Clinic Highlights & Information

- **Clinic Name:** Sindhu's Multispeciality Dental Clinic
- **Doctor:** Dr. Selvam Palani, BDS (Dental Surgeon)
- **Established:** January 2022
- **Rating:** 4.9 ★ (39 Verified Patient Ratings)
- **Location:** 4/52, VV Giri Complex, Palladam Main Road, Near Tamil Nadu Theater, Tiruppur, Tamil Nadu – 641605
- **Phone:** `+91 63839 66001` (Direct `tel:` & WhatsApp integrated)
- **Email:** `drsindhudental@gmail.com`

---

## 🚀 Key Features Implemented

### 1. Transparent Official Logo & Premium Header
- Clean vector transparent logo (`smdc-logo.svg`) on white navbar without black rectangular containers or boxes.
- Header displays exact branding: **Sindhu's Multispeciality Dental Clinic**, center navigation, EN / தமிழ் toggle, and Book a Call CTA button.

### 2. Redesigned Modern Appointment Experience
- Beautifully balanced two-column layout on desktop:
  - **Left:** Request an Appointment, supporting text, custom modern form fields (custom icons, floating focus rings, custom dropdown chevron, date picker with min validation, interactive time slot chips, message textarea), "Submit Appointment Request", and 1-click WhatsApp booking (`wa.me/916383966001`).
  - **Right:** Clinic Location card with Tiruppur address, Copy Address clipboard button, embedded Google Map, Get Directions button, and direct phone link.
- Smooth responsive behavior (2-column on desktop, stacked on mobile).

### 3. Prestigious Doctor Credentials & Clean Healthcare Crest
- Doctor card redesigned with a pure healthcare credentials crest and clinical commitments for **Dr. Selvam Palani, BDS**, omitting photographs and maintaining strict medical integrity.
- Zero registration numbers anywhere in code, metadata, or JSON.

### 4. Bilingual Architecture (English & தமிழ்)
- Full bilingual translation system for navigation, hero, treatments, reviews, FAQs, contact details, and booking forms.
- **Tamil Font Integration:** Google Font **Hind Madurai** seamlessly applied for Tamil text alongside **Plus Jakarta Sans** for English headings and body copy.
- **State Persistence:** User language selection persisted via `localStorage`.

### 5. Live Dynamic Clinic Open/Closed Calculation
- Real-time JavaScript engine calculates open/closed status based on user's current local time:
  - **Mon – Sat Morning:** 9:30 AM – 2:00 PM
  - **Mon – Sat Evening:** 5:00 PM – 9:30 PM
  - **Sunday Morning:** 10:00 AM – 2:00 PM
  - **Sunday Evening:** *Appointment Only*
- Displays pulsing status badge (`Open Now`, `Closed`, `Appointment Only`, etc.) with contextual time information.

### 6. Comprehensive SPA Routing (React Router v7)
- `/` — **Home:** Hero, marquee process strip, about intro with verified feedback highlights, statistics, featured treatment showcase, doctor profile card, clinic hours spotlight, review themes, accordion FAQ, booking & interactive map.
- `/services` — **Services:** All 11 confirmed treatments + Straightening Teeth categorized into 6 visual categories (*General & Preventive, Restorative, Orthodontic, Gum & Implant, Oral Surgery, Oral Diagnostics*), 4-stage clinical pathway, and clinical safety notice.
- `/about` — **About & Doctor:** Clinic founding story (Est. Jan 2022), lead surgeon profile (Dr. Selvam Palani, BDS), patient experience values, 6 core principles, and facility gallery showcase.
- `/reviews` — **Reviews:** 4.9 ★ rating summary breakdown, verified patient review themes (cleanliness, gentle care, affordable pricing, short-notice booking), and verified review platform modal.
- `/contact` — **Contact & Appointment:** Two-column appointment suite with validated booking form, query parameter preselection (`?service=...`), WhatsApp booking, and Google Maps embed.

---

## 🎨 Design System & Color Palette

| Token | Hex Value | Role |
|---|---|---|
| **Primary Green** | `#1d6b44` | Primary brand color, main CTA buttons, badges |
| **Dark Deep Green** | `#12492e` | Footer, spotlight banner, strong typography |
| **Soft Mint** | `#e4f2ea` | Section backgrounds, card accents, pills |
| **Base White** | `#fbfdfb` | Clean canvas background |
| **Text Primary** | `#16261d` | High-contrast readable typography |

---

## 🛠️ Development & Build Commands

```bash
# Start Vite Development Server
npm run dev

# Run Production Build
npm run build

# Run Code Quality & Linter Checks (Oxlint)
npm run lint
```
