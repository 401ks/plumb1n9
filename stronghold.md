# STRONGHOLD — CURRENT ON-PAGE SEO CONTENT EXTRACTION (SIX7 PLUMBING)

**Extraction type:** Current-state snapshot of every on-page SEO element. Read-only. No rewriting, no optimization suggestions — only the exact current content, verbatim.
**Source domain:** https://plumbing.six7.lk (site root: `F:\OpenCode\Projects\wildcards\plumbing.six7.lk`)
**Business:** SIX7 Plumbing — 24/7 emergency plumbing, Colombo & Western Province, Sri Lanka
**Contact constants (sitewide):** Tel `+94 75 824 4216` / `+94758244216` · Email `plumbing@six7.lk` · WhatsApp `wa.me/94758244216` · formSubmit `formsubmit.co/plumbing@six7.lk`
**Sitewide NAP:** Mt Lavinia, Colombo · Western Province · LK
**Copyright:** © 2026 SIX7 Plumbing. All rights reserved.
**Keywords on-page in <meta name="keywords">:** NONE. All 1,288 `Keywords:` spam blocks were stripped from all pages in a prior cleanup. Verified 0 occurrences of `Keywords:` in every HTML file (including no `<meta name="keywords">` tags). If 5 distinct "Keywords: ..." spam-block examples are needed, they must be recovered from git history or the old site archive — they do not exist in the current files.

---

## SECTION 1 — GLOBAL BOILERPLATE & CONFIG (sitewide, verbatim)

### 1a. Sticky emergency banner (sitewide)
Two variants exist (index.html differs from all other pages):

**Variant A — index.html (Home):** non-dismissible, static
```
<i class="fas fa-exclamation-triangle mr-1"></i> 24/7 EMERGENCY: +94 75 824 4216
<span class="ml-2 text-xs opacity-90">• Callout fee LKR 2,500 applies to all dispatches</span>
```
Also contains: "60-min arrival guarantee" red badge in hero, and footer line `Callout fee LKR 2,500 applies.`

**Variant B — all other pages:** dismissible via localStorage key `<page>Dismissed`
```
<i class="fas fa-exclamation-triangle mr-1"></i> 24/7 EMERGENCY: <a href="tel:+94758244216" class="underline font-bold">+94 75 824 4216</a>
<span class="ml-2 text-xs opacity-90">• Callout fee applies to ALL dispatches regardless of outcome</span>
[✕ Dismiss] button → localStorage.setItem('<page>Dismissed','1')
```
Example dismiss keys: `aboutDismissed`, `commercialDismissed`, `contactDismissed`, `emergDismissed`, `leakRepairDismissed`, `colomboDismissed`, `battaramullaDismissed`. Pages with the plain (non-dismissible) banner: index.html, areas, pricing, services.

### 1b. Navigation — desktop (sitewide)
**Logo:** `<i class="fas fa-wrench text-[#F97316] mr-2"></i>SIX7.PLUMBING` (Work Sans, font-black, `#0A2647`)

**Desktop links (7 tabs):**
`Home` `/` · `Services` `/services/` · `Commercial` `/commercial/` · `Areas` `/areas/` · `Pricing` `/pricing/` · `FAQ` `/faq/` · `Disclaimer` `/disclaimer/` · `Contact` `/contact/`

**Header CTAs (right):**
- `Call Now` — `tel:+94758244216` (btn-call red pill) — on all pages
- `WhatsApp` — `https://wa.me/94758244216` (btn-whatsapp green pill) — shown on index.html, pricing (as `WhatsApp`), hidden on some inner pages
- `mobileMenuBtn` hamburger (md:hidden)

**Active-tab treatment:** active link gets `text-[#F97316] border-b-2 border-[#F97316] pb-1 font-bold`. Some pages (commercial, contact, emergency, faq, disclaimer) omit the `Disclaimer` tab from desktop nav.

**Mobile slide menu:** `#mobileMenu` (right slide, max-width 320px, overlay `#mobileMenuOverlay`). Links mirror desktop + always adds `Leave a Review` `/review/` (index.html) or `Emergency Call` bottom button. Some mobile menus omit `Disclaimer`.

### 1c. Breadcrumbs (inner pages, verbatim pattern)
Pattern: `Home › [Parent if any] › CurrentPage`
Examples:
- index.html: none (homepage)
- leak-repair: `Home › Services › Leak Repair`
- colombo: `Home › Colombo Plumbing Services`
- areas: `Home › Service Areas`
- pricing: `Home › Pricing`
- services: `Home › Services`
- about-us: `Home › About Us`
- commercial: `Home › Commercial`
- contact: `Home › Contact`
- emergency: `Home › Emergency`
- 404: `Home › Page Not Found`

### 1d. Footer — index.html (full verbatim structure)
4-column grid:
1. **Areas we serve** (13 links): Colombo `/colombo/`, Dehiwala `/dehiwala/`, Piliyandala `/piliyandala/`, Kotte `/kotte/`, Battaramulla `/battaramulla/`, Maharagama `/maharagama/`, Homagama `/homagama/`, Kaduwela `/kaduwela/`, Nugegoda `/nugegoda/`, Padukka `/padukka/`, Rathmalana `/rathmalana/`, Mt Lavinia `/mt-lavinia/`, Boralesgamuwa `/boralasgamuwa/`
2. **Services** (categorized):
   - *Leak & Pipe:* Detection `/leak-detection/`, Repair `/leak-repair/`, Pipe Repair `/pipe-repair/`
   - *Fixtures:* Tap Install `/tap-installation/`, Repair `/tap-repair/`, Shower `/shower-installation/`, Toilet `/toilet-installation/`
   - *Water Heating:* Heater Install `/water-heater-installation/`, Repair `/water-heater-repair/`
   - *Drain & Sewer:* Drain Cleaning `/drain-cleaning/`, Sewer Cleaning `/sewer-cleaning/`
   - *Tanks & Pumps:* Tank Install `/water-tank-installation/`, Cleaning `/water-tank-cleaning/`, Replacement `/water-tank-replacement/`, Pump Repair `/sump-pump-repair/`
   - *Specialized:* Water Filter `/whole-house-water-filter/`, Pool Plumbing `/pool-plumbing-repair/`, Disposal Repair `/waste-disposal-repair/`, Grease Traps `/grease-trap-cleaning/`
   - `+ all 32 services →` `/services/`
3. **Quick Links:** Emergency Hub `/emergency/` · Services Index `/services/` · Pricing & Callout `/pricing/` · Coverage & ETAs `/areas/` · Trust + Team `/about-us/` · Terms & Policy `/disclaimer/` · FAQ `/faq/` · Leave a Review `/review/`
4. **Contact:** `tel:+94758244216` +94 75 824 4216 · `mailto:plumbing@six7.lk` · `wa.me/94758244216` WhatsApp · `/contact/` Contact Form

**Copyright bar (index.html):** `© 2026 SIX7 Plumbing. All rights reserved. Callout fee LKR 2,500 applies.` + `Made with ❤ by SIX7 Team`

**Footer variants — other pages:** Different hubs use lighter footers. Examples:
- pricing footer: brand blurb "Professional emergency plumbing available 24/7. Transparent pricing, zero surprises." + Quick Links (Pricing/Services/Contact/Disclaimer) + Contact + Base Location: `Mt Lavinia, Colombo — Serving Western Province with 45-min avg response`. Copyright: `2026 Six7 Plumbing. All rights reserved.` + `Pricing Policy & Zero-Tolerance Disclaimer` + `Full Service Coverage`
- Location/service pages (e.g., colombo): 4-col: Areas we serve (13 links), Services (categorized), Quick Links, Contact — same structure as index.

### 1e. Global scripts
- **Tailwind:** `https://cdn.tailwindcss.com`
- **Font Awesome:** `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css`
- **Fonts:** `Inter` (opsz 14..32, 300-700) + `Work Sans` (500-900)
- **emergency.js:** loaded sitewide: `<script src="/emergency.js"></script>` before `</body>`
- **Mobile menu script** (inline, per-page): openMenu/closeMenu with `body.style.overflow` lock.

### 1f. emergency.js — popup & floating widget config (verbatim CONFIG + copy)
```
CONFIG = {
  phoneNumber: '+94758244216',
  phoneDisplay: '+94 75 824 4216',
  whatsappNumber: '94758244216',
  pricingPageUrl: '/pricing/',
  popupDelay: 1500,
  popupDuration: 300,
  bannerDismissedKey: 'six7EmergencyPopupDismissed',
  floatingDismissedKey: 'six7FloatingDismissed'
}
```
**Popup copy (verbatim, injected by createPopup):**
- Title (h2): `Emergency Plumbing?`
- Subtitle: `Don't wait for water damage to get worse.<br>Our team is ready 24/7 for all plumbing emergencies.`
- Number pill: `<span>Call Now: +94 75 824 4216</span>` (with ⚠ icon)
- Primary CTA (red): `Call Emergency Line` → `tel:+94758244216`
- Secondary CTA (green): `WhatsApp Emergency` → `https://wa.me/94758244216?text=EMERGENCY%20PLUMBING%20NEEDED`
- Tertiary link: `View Our Pricing & Rates →` → `/pricing/`
- Close: ✕ button top-right

**Floating buttons:** bottom-right stack (56px circles): red phone FAB → `tel:+94758244216`; green WhatsApp FAB → `wa.me/94758244216?text=EMERGENCY%20PLUMBING%20NEEDED`.

**Behavior:** popup shows after 1500ms if not dismissed this session (sessionStorage); dismissal reveals floating buttons; popup fade duration 300ms. gtag events: `emergency`/`click`/`call_emergency` and `emergency`/`click`/`whatsapp_emergency`.

**Ad system:** entirely commented out (tailor, electrical, cleaning, junk, review ads). `reviewUrl` (commented) = `https://plumbing.six7.lk/review/`.

### 1g. Five distinct "Keywords: ..." spam blocks
**NOT PRESENT.** All `Keywords:` spam blocks were removed sitewide in the prior cleanup (1,288 occurrences deleted; verified 0 remaining across all 60 HTML files, including `<meta name="keywords">`). Stronghold can only confirm: no keyword meta tags exist anywhere; the visible spam blocks (previously embedded in-page, typically `<span class="font-bold text-white">Keywords: ...` styled text) no longer exist. Restore from git history/old build if needed.

---

## SECTION 2 — HUB PAGES FULL EXTRACTION (9 pages)

### 2.1 HOME — `https://plumbing.six7.lk/` (`index.html`)

**Meta (verbatim):**
- `<title>SIX7 Plumbing | 24/7 Emergency Plumber Colombo – Leak Repair, Water Tanks</title>`
- `<meta name="description" content="Emergency plumber Colombo 24/7 – burst pipe, leak detection, water heater repair, drain cleaning. 60-min arrival guarantee. Call +94 75 824 4216">`
- `<link rel="canonical" href="https://plumbing.six7.lk/" />`
- `<meta property="og:type" content="website">`
- `<meta property="og:url" content="https://plumbing.six7.lk/">`
- `<meta property="og:title" content="Emergency Plumber Colombo | 24/7 Fast Response | SIX7 Plumbing">`
- `<meta property="og:description" content="Emergency plumber Colombo 24/7 – burst pipe, leak detection, water heater repair, drain cleaning. 60-min arrival guarantee. Call +94 75 824 4216">`
- `<meta property="og:image" content="https://plumbing.six7.lk/assets/img/og-plumbing-default.jpg">`
- `<meta name="twitter:card" content="summary_large_image">`

**JSON-LD (verbatim, `@type: "Plumber"`):**
```
{"@context":"https://schema.org","@type":"Plumber","name":"SIX7 Plumbing","telephone":"+94758244216",
"priceRange":"LKR 1,500 - LKR 18,000","url":"https://plumbing.six7.lk/",
"areaServed":["Colombo","Dehiwala","Piliyandala","Kotte","Battaramulla","Maharagama","Homagama","Kaduwela","Nugegoda","Padukka","Rathmalana","Mt Lavinia","Boralesgamuwa"],
"openingHours":"Mo-Su 00:00-23:59"}
```
NOTE: home schema priceRange is `LKR 1,500 - LKR 18,000` (all other Plumber schemas use `LKR 3,500 - LKR 18,000`).

**Hero:**
- Badge: `60-min arrival guarantee`
- H1: `Emergency plumber, anytime — even 1AM.`
- Lead: `Colombo's most direct & fair-priced plumbing. We handle everything from tap leaks to large commercial projects.`

**H2 sections (in order):** `Why Choose SIX7 Plumbing?` · `How Our Plumbing Service Works` · `Professional Plumbing Services in Colombo — Fast, Affordable & Reliable` · `What needs fixing?` · `Plumbers near you` · `Quick answers` · `Trusted by Colombo`

**CTA inventory (verbatim):** WhatsApp `wa.me/94758244216` (nav) · `Call Now` `tel:+94758244216` (nav+hero) · hero cards for service categories · pricing/faq/contact links · footer quick links · emergency.js popup + floating FABs.

**Footer:** full 4-column footer (Section 1d), copyright line includes `Callout fee LKR 2,500 applies.`

### 2.2 SERVICES INDEX — `https://plumbing.six7.lk/services/`

**Meta:**
- `<title>SIX7 Plumbing | Professional Plumbing Services in Colombo – 24/7 Emergency</title>`
- `<meta name="description" content="Expert plumbing services in Colombo: emergency leak repair, drain cleaning, water heater, tank repair, water filters. 60-min arrival, transparent pricing.">`
- canonical: `https://plumbing.six7.lk/services/`
- og:url `.../services/` · og:title `All Plumbing Services Colombo | 24/7 Emergency | SIX7 Plumbing` · og:description `Browse all 23+ plumbing services: leaks, drains, tanks, filters, commercial & more. From LKR 3,500/hr. Pay after service. WhatsApp +94 75 824 4216.` · og:image default OG

**JSON-LD (verbatim, `@type: "CollectionPage"`):**
```
"name":"Professional Plumbing Services Colombo","description":"32+ plumbing services in Colombo & Western Province. Emergency response, leak detection, tank repair, water filters. Transparent hourly billing.",
"mainEntity":{"@type":"ItemList","itemListElement":[
 {"@type":"ListItem","position":1,"item":{"@type":"Service","name":"Emergency Plumbing"}},
 {"@type":"ListItem","position":2,"item":{"@type":"Service","name":"Leak Detection"}},
 {"@type":"ListItem","position":3,"item":{"@type":"Service","name":"Water Tank Repair"}},
 {"@type":"ListItem","position":4,"item":{"@type":"Service","name":"Whole House Water Filter"}}]}
```

**H1:** `Professional Plumbing Services in Colombo — Fast, Affordable & Reliable`

**H2 categories (verbatim, 12):**
1. `Emergency Plumbing Services (24/7)`
2. `Leak Detection & Repair`
3. `Drain & Toilet Services`
4. `Tap, Faucet & Fixture Installation`
5. `Water Tank, Pump & Supply Systems`
6. `Commercial & Industrial Plumbing`
7. `Why Choose SIX7 Plumbing?`
8. `Service Areas — Plumbers Near You`
9. `Need a Plumbing Service?`
10. `Frequently Asked Questions — Plumbing Services Colombo`
11. `Ready to Fix Your Plumbing Issue?`
12. (service cards grid with sub-headings per category)

**Note:** copy uses both "23+" (og) and "32+" (schema) / "all 32 services" (footer) service counts — inconsistent counts exist in current copy.

### 2.3 COMMERCIAL — `https://plumbing.six7.lk/commercial/`

**Meta:**
- `<title>Commercial Plumbing Colombo | Office, Hotel & Industrial Plumbing – SIX7 Plumbing</title>`
- `<meta name="description" content="Commercial plumbing services in Colombo. Office maintenance, restaurant kitchen plumbing, hotel bathroom fit-outs, industrial pipe repair. Maintenance contracts & emergency response. Callout fee applies.">`
- canonical: `.../commercial/` · og:title `Commercial Plumbing Colombo | 24/7 Emergency Service | SIX7 Plumbing` · og:image default OG

**JSON-LD:** `["LocalBusiness", "Plumber"]` + embedded FAQPage (Q: "What if we have multiple locations?" → "Multi-site contracts with consolidated billing, volume discounts, one account manager.")

**H1:** `Commercial Plumbing Services in Colombo`

**Lead (verbatim):** `Running a business? Don't let plumbing issues disrupt your operations. SIX7 Plumbing provides dedicated commercial and industrial plumbing services across Colombo and the Western Province. From office building maintenance contracts to hotel bathroom renovations, restaurant kitchen plumbing, and factory pipe systems — our direct-work model delivers professional results at transparent, bulk-friendly pricing. After-hours work available to minimize downtime. Written proposals before project start.`

**H2 sections (verbatim):** `Industries We Serve — Commercial Plumbing Solutions` · `Our Commercial Service Models` · `Request Commercial Quote` · `Why Businesses Choose SIX7 Plumbing` · `Transparent Commercial Pricing` · `Commercial Service Coverage` · `Commercial FAQs` · `Ready to Discuss Your Commercial Plumbing Needs?`

**Industries (8, verbatim H3):** Office Buildings & Corporate Spaces · Hotels, Resorts & Hospitality · Restaurants, Cafes & Food Service · Hospitals, Clinics & Healthcare · Schools, Universities & Institutions · Retail, Malls & Commercial Centers · Industrial & Manufacturing · Construction & Property Development

**Service models (4, verbatim H3):** Preventive Maintenance Contracts ("Save up to 40% vs. reactive repairs") · Project-Based Plumbing · Emergency Response Retainers (red card; "Guaranteed SLA (2h/4h)") · Consultation & Compliance Audits

**Hero stat chips:** `100+ Commercial Clients` · `After-Hours Available` · `PO/Invoice Terms` · `Callout fee applies to all dispatches`

**Form:** formSubmit to plumbing@six7.lk, `_subject=Commercial Quote Request - plumbing.six7.lk`, `_next=thank-you/`, `_autoresponse=Thanks! Our commercial team will contact you within 2 business hours.` Fields: business_name, contact_person, phone (+94 pattern), email, suburb, service type, message, terms checkbox.

### 2.4 AREAS — `https://plumbing.six7.lk/areas/`

**Meta:**
- `<title>Plumbing Service Areas Colombo | 24/7 Plumber Near Me – SIX7 Plumbing</title>`
- `<meta name="description" content="Emergency plumbing service areas across Colombo & Western Province. 60-min arrival guarantee. Serving Dehiwala, Kotte, Battaramulla, Maharagama, Piliyandala & more. Callout fee applies.">`
- canonical: `.../areas/` · og:title `Emergency And Commercial Plumber | SIX7 Plumbing` (note: og:title differs from title tag) · og:image default OG

**JSON-LD:** `@type: "LocalBusiness"` (only hub with LocalBusiness alone)

**H1:** `Plumbing Service Areas – Colombo & Western Province`

**H2 sections (verbatim):** `Areas We Serve – Reliable Plumbing When You Need It` · `Colombo City (1–15)` · `Suburbs & Major Towns` · `Google Map – SIX7 Plumbing Coverage` · `Need a plumber in your area?` · `Quick Area Questions` · `Don't see your area? Call us 24/7` · `Explore our services in your area`

**Hero key copy:** `60-minute arrival guarantee. 24/7 emergency plumber near you.` + `Serving plumbers near me, plumber colombo, plumber dehiwala, plumber in piliyandala, and water tank repair near me searches across Western Province.`

**Area chips (20, verbatim):** Colombo · Dehiwala · Mount Lavinia · Nugegoda · Rajagiriya · Battaramulla · Maharagama · Kotte · Wellawatte · Bambalapitiya · Kirulapone · Kohuwala · Wattala · Kelaniya · Moratuwa · Ja-Ela · Peliyagoda · Borella · Narahenpita · Dematagoda

**Service list (9):** Emergency plumbing repairs · Drain cleaning and blockage removal · Leak detection and repair · Water heater installation and repairs · Water purification system installation · Pipe repairs and replacements · Bathroom and kitchen plumbing · Annual plumbing inspections · General plumbing maintenance

### 2.5 PRICING — `https://plumbing.six7.lk/pricing/`

**Meta:**
- `<title>SIX7 Plumbing | Pricing & Callout Policy – Transparent Plumbing Rates Colombo</title>`
- `<meta name="description" content="Clear plumbing pricing in Colombo. Callout fee LKR 2,500+ applies to all dispatches. Hourly rates from LKR 3,500/hr. Emergency service 24/7. Zero-tolerance policy.">`
- canonical: `.../pricing/` · og:title `Plumbing Pricing Colombo | Transparent Rates | SIX7 Plumbing` · og:image default OG

**JSON-LD:** `@type: "WebPage"` + FAQPage embed

**H1:** `Plumbers On Call Now` + `EMERGENCY PLUMBING. FAST. RELIABLE. 24/7.`

**Hero lead:** `Water leaking? Pipe burst? Drain backing up? Don't wait. We're on-site in 30-60 mins.` (note: hero says "30-60 mins")

**H2 sections (verbatim):** `PRICING THAT REFLECTS REALITY` · `Visiting and Inspection Charges` · `Standard Service Rates (Hourly)` · `THIS IS NOT A QUOTATION PAGE. THIS IS A REALITY CHECK.` · `Pre-Booking FAQ` · `Before You Book` · `Request Emergency Dispatch` · `Service Areas (Western Province)`

**Travel/inspection fee table (verbatim):**
- 0-5 km → LKR 2,500 (highlighted red)
- 5-10 km → LKR 2,950
- 10-15 km → LKR 3,400
- Each additional 5 km → +LKR 450
- Note: `May be waived if same-day repair proceeds — at our sole discretion.`

**Standard service rates (verbatim cards):**
- Standard Plumbing (taps, leaks, visible pipes) → **LKR 3,500/hr**
- Wastewater Blockages (jetting, camera, chemical escalation) → **LKR 5,400/hr**
- Sewer / Raw Sewage / Septic Work → **LKR 18,000 minimum + LKR 7,500-9,500/hr (from 3rd hour)** (red card)
- Water Pump Callout → **LKR 5,000 diagnosis** (may be waived if repair done same-day)

**Emergency / After-Hours:** `+40% surcharge (outside 8AM-6PM or weekends)`. `Billing starts on arrival. Minimum 1-hour billing. Callout fee applies to all dispatches regardless of repair outcome.`

**Zero-Tolerance Policy bullets (verbatim):**
- `You pay for what gets done — not what you called for. Third-party services (gully bowser, camera) are your responsibility.`
- `We do not provide fixed quotes for hidden-work categories. We assess, then bill for actual work.`
- `"Price too high" complaints after work completed will not be entertained. No refund. No negotiation. Blacklisting applies.`
- `Wastewater/sewage work carries inherent unpredictability. You pay for bowser, labor, hazard premium. No exceptions.`
- Confirmation line: `"I understand plumbing is unpredictable. I agree to pay for actual work performed at Six7's published rates. I will not dispute charges after service based on my own assumptions."`

**Pre-Booking FAQ (4, verbatim questions):** `Can I get a fixed price before you come?` · `What if you can't fix it?` · `Why is sewage work so expensive?` · `What if I think the price is unfair after the job?`

**Before You Book checkboxes (5, disabled-checked):** read Pricing+Disclaimer · hidden problems may increase costs · agree to pay actual work at published rates · will not dispute charges · accept wastewater/sewage premium rates.

**Emergency dispatch form:** formSubmit to plumbing@six7.lk, `_subject=Pricing Page Dispatch Request`, `_next=thank-you/`, `_autoresponse=Thanks! We'll WhatsApp you within 3 mins to confirm dispatch.` Fields: name, phone, address, lat/long (geolocation button `getLocationBtn`), distance, service_type select (standard/leak/blockage/sewer/pump/emergency), issue, terms. Submit button: `SEND REQUEST - NO REDIRECT`.

**Service area badges (6):** Mt Lavinia · Dehiwala · Moratuwa · Colombo 1-15 · Nugegoda · Battaramulla. Copy: `Nominal travel fee may apply beyond 5km from central dispatch hubs.`

### 2.6 DISCLAIMER — `https://plumbing.six7.lk/disclaimer/`

**Meta:**
- `<title>SIX7 Plumbing | Service Disclaimer & Terms – Transparent Plumbing Policy Colombo</title>`
- `<meta name="description" content="Legal service disclaimer, zero-tolerance policy, and pricing terms for SIX7 Plumbing. Callout fees, diagnostic nature of plumbing work, biohazard premiums explained.">`
- canonical: `.../disclaimer/` · og:title `Pricing Policy & Disclaimer | SIX7 Plumbing Colombo` · og:image default OG

**JSON-LD:** `@type: "WebPage"`

**H1:** `Legal & Service Terms`

**H2 sections (verbatim):**
1. `Service Disclaimer & Terms of Engagement`
2. `1. Diagnostic Nature of Plumbing Work`
3. `2. Payment Policy: You Pay for What Gets Done`
4. `3. Travel & Inspection Charges`
5. `4. Premium & Biohazard Service Rates`
6. `5. Zero-Tolerance Dispute Policy`
7. `6. Limitation of Liability & Customer Responsibilities`
8. `By Submitting a Service Request, You Confirm:`
9. `Have questions before booking?`

### 2.7 ABOUT — `https://plumbing.six7.lk/about-us/`

**Meta:**
- `<title>About SIX7 Plumbing | Colombo's Trusted 24/7 Emergency Plumbers</title>`
- `<meta name="description" content="Local Colombo plumbing team since 2020. 5,000+ jobs completed, 4.9★ rating. Verified technicians, transparent hourly billing from LKR 3,500/hr. 24/7 emergency response.">`
- canonical: `.../about-us/` · og:url `.../about-us/` · og:title `About Us | SIX7 Plumbing` · og:description `24/7 fast response. From LKR 3,500/hr. Pay after service. WhatsApp +94 75 824 4216.` · og:image default OG

**JSON-LD (verbatim, `["AboutPage", "LocalBusiness", "Plumber"]`):**
```
"name":"About Six7 Plumbing","description":"Local Colombo plumbing team since 2020. 24/7 emergency response, verified technicians, transparent hourly billing from LKR 3,500/hr.",
"telephone":"+94758244216","priceRange":"LKR 3,500 - LKR 18,000","foundingDate":"2020",
"address":PostalAddress(Mount Lavinia, Western Province, LK),"geo":(6.8235, 79.8645),
"areaServed":["Colombo","Dehiwala","Piliyandala","Kotte","Battaramulla","Maharagama","Homagama","Kaduwela","Negombo"],
"openingHours":"Mo-Su 00:00-23:59",
"aggregateRating":{"ratingValue":"4.9","reviewCount":"500","bestRating":"5","worstRating":"1"},
"employee":[Nimal-Lead Technician (leak detection, burst pipe, thermal tracing), Saman-Emergency Specialist (flood control, sewage backup, no-water), Kasun-Installation Expert (bathroom & tank, tile-safe)]
```

**H1:** `About Six7 Plumbing – Colombo's Trusted 24/7 Emergency Plumbers`

**Hero:** badge `Local Since 2020` · lead `Local team • Verified technicians • Transparent hourly billing • Pay after service. We've fixed 5,000+ plumbing emergencies across Colombo & Western Province.` · stat chips: `5,000+ Jobs Completed` · `4.9★ Google Reviews` · `Licensed & Insured` · `Callout fee applies to all visits`

**H2 sections (verbatim):** `About Six7 Plumbing – Built Around One Simple Idea: Do The Job Properly` · `Real Photos – Our Team, Our Work` · `Verified Technicians – Not Call Center Agents` · `Six7 Plumbing in Numbers` · `Why Customers Choose Six7 Plumbing` · `Our Guarantees – Built on Trust` · `Proudly Serving Colombo & Western Province` · `Trust Signals – Why We're Colombo's Choice` · `Ready to Fix Your Plumbing Issue?`

**Story H3s:** `Why We Started` (problems: repairs that didn't last, unexpected charges, poor communication, missed appointments, temporary fixes) · `What We Do` (residential + commercial, list of services) — mission quote: `Diagnose the problem correctly, explain it clearly, and fix it properly. No unnecessary upselling. No confusing technical jargon. No pressure.`

**Team (verbatim, matches schema):** Nimal (Lead Technician), Saman (Emergency Specialist), Kasun (Installation Expert)

### 2.8 CONTACT — `https://plumbing.six7.lk/contact/`

**Meta:**
- `<title>Contact SIX7 Plumbing | 24/7 Emergency Plumber Colombo – Free Quote</title>`
- `<meta name="description" content="Contact SIX7 Plumbing for emergency plumbing services in Colombo & Western Province. 24/7 phone, WhatsApp, email. Free quotes, transparent pricing. Callout fee applies.">`
- canonical: `.../contact/` · og:title `Contact SIX7 Plumbing | 24/7 Emergency Plumber Colombo` · og:image default OG

**JSON-LD:** `["ContactPage", "LocalBusiness", "Plumber"]`

**H1:** `Contact SIX7 Plumbing — Fast Response & Free Quotes`

**Hero lead (verbatim):** `Need a plumber in Colombo fast? SIX7 Plumbing is just one call away. Whether you have a burst pipe at 2AM, a blocked drain, or need a quote for a bathroom renovation, our team is ready to help. We operate on a direct-work model, meaning you speak directly to our team—not a call center—ensuring fair pricing and quick decisions. We serve all Colombo suburbs including Kotte, Dehiwala, Nugegoda, and Maharagama. Contact us today for a transparent quote with no hidden fees. Emergency lines are open 24/7.`

**H2 sections (verbatim):** `PLUMBING EMERGENCY? DON'T WAIT.` · `Request a Free Quote` · `Our Service Coverage` · `Frequently Asked Questions — Contact & Booking` · `Complete Service Area List` · `Partner With SIX7 Plumbing` · `Ready to Fix Your Plumbing Issue?`

**Emergency contact cards:** Call Emergency Line `+94 75 824 4216` (24/7, `Average Response Time: 60 Minutes (Colombo 1-10)`) · WhatsApp Emergency `+94 75 824 4216` (photos for instant quote, `Email: plumbing@six7.lk (Response within 2h)`)

**Hours of operation (verbatim):** `Emergency Line: 24/7 (Including Public Holidays)` · `Business Inquiries: 8AM-8PM Mon-Sat` · `Service Area: Colombo & Western Province`

**Trust chips:** `No Call Centers` · `Instant Quotes via WhatsApp` · `Direct Work = Fair Pricing`

**Quote form:** formSubmit, `_subject=Contact Page Quote Request`, `_next=thank-you/`, `_autoresponse=Thanks! We'll WhatsApp you within 15 mins to confirm your quote.` Fields: name, phone (+94 pattern), suburb, service_type select (16 options incl. emergency, leak detection/repair, drain cleaning, tap/shower/toilet install/repair, water heater install/repair, tank repair/cleaning, commercial, other), file upload (image/video), message, terms checkbox → `Get My Free Quote`. Note: `We reply within 15 minutes during business hours.`

### 2.9 EMERGENCY — `https://plumbing.six7.lk/emergency/`

**Meta:**
- `<title>24/7 Emergency Plumber Colombo | Burst Pipe, Flood, Sewage – SIX7 Plumbing</title>`
- `<meta name="description" content="Emergency plumber Colombo – 24/7 dispatch for burst pipes, flooding, sewage backup, no water. 60-min avg arrival. Transparent callout fee. WhatsApp for instant quote.">`
- canonical: `.../emergency/` · og:url `.../emergency/` · og:title `24/7 Emergency Plumber Colombo | Fast Response | SIX7 Plumbing` · og:image default OG

**JSON-LD:** `["EmergencyService", "Plumber", "LocalBusiness", "FAQPage"]`

**H1:** `24/7 Emergency Plumber Colombo – Fixed Fast or Free Callout`

**Hero:** badge `24/7 LIVE DISPATCH` · lead `Burst pipes, floods, sewage backup, or no water? We dispatch within 60 minutes avg. Transparent callout fee. From LKR 3,500/hr. Pay after service.` · stat chips: `Avg Arrival: 60 mins` · `24/7 Live Answer` · `Licensed & Insured` · `Callout fee applies to all visits`

**H2 sections (verbatim):** `What's Your Emergency? Tap for Instant Dispatch` · `How We Handle Your Emergency` · `Transparent Emergency Dispatch Fees` · `Emergency Response Times – Colombo & Outskirts` · `Recent Emergency Dispatches` · `Emergency Plumbing Services in Colombo` · `Emergency Plumbing FAQs` · `Can't WhatsApp? Send Details Now` · `Water Emergency? Don't Wait for Damage to Spread.`

**Triage cards (6, verbatim):**
1. Burst Pipe / Major Leak — `From LKR 3,500/hr` → /leak-repair/
2. Flood / Sewage Backup — `From LKR 7,500/hr` → /drain-cleaning/
3. No Water / Pump Failure — `From LKR 5,000/hr` → /sump-pump-repair/
4. Geyser Leak / Hot Water Fail — `From LKR 4,500/hr` → /water-heater-repair/
5. Toilet Overflow / Blocked — `From LKR 6,500/hr` → /toilet-repair/
6. Gas / Safety Shut-Off — `Priority Dispatch` → tel:

**3-step dispatch (verbatim):** `1. Send 10-Second Video` (WhatsApp) · `2. Get Quote + ETA` — body text says `Avg. 38 min arrival. Transparent rate confirmed before dispatch. Callout fee applies.` (NOTE: 38 min — inconsistent with 60-min guarantee elsewhere) · `3. Tech Fixes • You Pay After` — `Verified plumber arrives, isolates issue, completes job. 6-month warranty.`

**Callout fee copy (verbatim):** `Standard callout/dispatch fee applies to ALL emergency visits (regardless of repair outcome). This covers: Technician travel & fuel to your location · Initial on-site diagnostics & pressure testing · Tool deployment & safety prep`. Trust bullets: `Fee is clearly quoted BEFORE dispatch` · `Absorbed into your first service hour if you proceed with repair` · `Full work scope + hourly rate confirmed on arrival before any work begins` · `Pay only after you approve the completed job`.

---

## SECTION 3 — SERVICE PAGES (34 pages)

### 3.1 Service page slugs (34, canonical URLs)
1. /annual-plumbing-inspections/ · 2. /backflow-preventer-installation/ · 3. /drain-cleaning/ · 4. /drinking-water-purification/ · 5. /grease-trap-cleaning/ · 6. /grease-trap-installation/ · 7. /greywater-system-installation/ · 8. /house-plumbing/ · 9. /leak-detection/ · 10. /leak-repair/ · 11. /low-water-pressure-diagnostic/ · 12. /outdoor-plumbing-repair/ · 13. /pipe-repair/ · 14. /pool-plumbing-repair/ · 15. /sewer-cleaning/ · 16. /sewer-repair/ · 17. /shower-installation/ · 18. /shower-repair/ · 19. /sump-pump-installation/ · 20. /sump-pump-repair/ · 21. /tap-installation/ · 22. /tap-repair/ · 23. /toilet-installation/ · 24. /toilet-repair/ · 25. /waste-disposal-installation/ · 26. /waste-disposal-repair/ · 27. /water-heater-installation/ · 28. /water-heater-repair/ · 29. /water-tank-cleaning/ · 30. /water-tank-installation/ · 31. /water-tank-repair/ · 32. /water-tank-replacement/ · 33. /whole-house-water-filter/ · 34. /emergency/ (also indexed as hub in Section 2)

### 3.2 Service page HTML template structure (sitewide, verbatim)
```
<head>
  <title>[Service] Colombo | [keyword-rich alt title] – SIX7 Plumbing</title>
  <link rel="canonical" href="https://plumbing.six7.lk/[slug]/" />
  <meta name="description" content="Professional [service] in Colombo. [capabilities list]. From LKR [X]/hr[+ fee]. [warranty]. WhatsApp for quote.">
  og:type=website · og:url=.../[slug]/ · og:title=[Service] Colombo | [short tagline] | SIX7 Plumbing · og:description=[repeats service type] · og:image=https://plumbing.six7.lk/assets/img/og-plumbing-default.jpg · twitter:card=summary_large_image
  Tailwind CDN · Font Awesome 6.0.0-beta3 · Inter + Work Sans
  <script type="application/ld+json"> {"@type":"Service", ...hasFAQ} </script>
</head>
<body>
  STICKY EMERGENCY BANNER (Variant B, dismissible, key <camelSlug>Dismissed)
  NAV (desktop 7 tabs + mobile slide menu + Call Now CTA)
  BREADCRUMB: Home › Services › [Service]
  HERO: gradient (#0A2647→#1E3A5F→#2C4A6E or →red-800 for emergency-type), pulse badge, H1, lead (From LKR X/hr. Pay after service.), WhatsApp video-quote CTA + Call Now CTA, checklist bullets (permanent fix / warranty / callout fee notice / "Serving plumber near me searches across Colombo, Dehiwala, Piliyandala")
  H2 "Professional [Service] in Colombo" — overview + "Is a [problem] Damaging Your Home?" H3 + 2-4 feature cards + "How Our [Service] Works" numbered steps (1. WhatsApp 10-sec video 2. Tech arrives 3. Approve, warranty) + price callout box "From LKR X/hr" + WhatsApp CTA
  H2 "Common [issues] We [handle] in Colombo Homes" — 4-6 scenario cards with service links
  H2 "Why Colombo Homeowners/Properties Trust Six7 for [Service]" — bullet list
  H2 "[Service] Across Colombo & Outskirts" — area chips + CTA
  H2 "[Service] FAQs — Colombo" — <details> accordion (3 questions)
  H2 "Get a [Service] Quote" — formSubmit form (name, phone +94, suburb, service, issue, terms)
  H2 "Related Plumbing Services" — 3-4 cross-links
  FOOTER (full 4-col)
  <script src="/emergency.js"></script>
</body>
```
**Template JSON-LD (`@type: "Service"`):** `name`, `serviceType`, `provider` → Plumber (Six7 Plumbing, +94758244216, priceRange, PostalAddress Mount Lavinia/Western Province/LK), `areaServed` [8 suburbs], `description` (mirrors meta), `offers` → Offer (price, priceCurrency LKR, unitText HOUR, availability InStock), `hasFAQ` → FAQPage (3 questions). Pages with base+fee pricing use `priceSpecification` (UnitPriceSpecification) instead of plain Offer.

**Service page pricing structure patterns (verbatim):**
- Flat hourly: `From LKR X/hr` (e.g., leak-repair 3,500 · tap-repair 3,500 · shower-repair 3,500 · house-plumbing 3,500 · water-tank-repair 6,500 · toilet-repair 6,500 · waste-disposal-repair 7,500 · water-heater-repair 5,700 · sump-pump 8,500 · pool-plumbing 8,500)
- Labor-only installs: `Labor from LKR X/hr. Customer-supplied fixtures welcome` (tap-install 3,500 · shower-install 3,500 · toilet-install 4,500 · water-heater-install 4,500)
- Base + hourly: `From LKR X,XXX + LKR X,XXX/hr` (water-tank-install 12,000+3,500 · water-tank-replacement 12,000+3,500 · drinking-water-purification 12,000+5,400 · whole-house-water-filter 12,000+5,400 · greywater-system 12,000+3,500 · grease-trap 18,000+8,900 · sewer-cleaning 18,000+8,900 · sewer-repair 18,000+7,900)
- Special: annual-inspections `From LKR 4,500 (waived with repair)` · low-water-pressure `LKR 5,500 diagnostic (waived with repair)` · backflow `From LKR 8,500/hr` · outdoor-plumbing `LKR 3,500/hr (LKR 5,400/hr excavation)`

**Warranty standard (verbatim pattern):** `6-month workmanship warranty` / `6-month warranty` / `6-month guarantee` — stated in meta, schema, hero bullets, and FAQs ("If the same [issue] recurs within 6 months, we return free.").

### 3.3 FULL EXTRACTION — LEAK REPAIR (`/leak-repair/`)

**Meta:**
- `<title>Leak Repair Colombo | Burst Pipe & Tap Leak Sealing – SIX7 Plumbing</title>`
- `<meta name="description" content="Professional plumbing leak repair in Colombo. Burst pipe sealing, tap leak fixes, joint repair. Permanent sealing, 6-month warranty. From LKR 3,500/hr. WhatsApp for quote.">`
- canonical `.../leak-repair/` · og:title `Leak Repair Colombo | Emergency Pipe Fix | SIX7 Plumbing`

**JSON-LD:** `"@type":"Service"` — name `Plumbing Leak Repair Colombo`, serviceType `leak repair`, provider Plumber (Six7 Plumbing, +94758244216, `LKR 3,500 - LKR 18,000`, Mount Lavinia), areaServed [8 suburbs], offers `3500 LKR HOUR InStock`, hasFAQ:
- Q: `How do you repair leaks without breaking walls?` → `For accessible leaks, we seal joints or replace sections directly. For hidden leaks, we use thermal/acoustic detection first to pinpoint the source, then make minimal, targeted access.`
- Q: `How much does leak repair cost in Colombo?` → `From LKR 3,500/hr, billed only for actual time spent repairing. Parts priced separately. Callout fee applies to all dispatches regardless of outcome.`
- Q: `Do you guarantee the repair?` → `Yes. 6-month workmanship warranty on all leak repairs. If the same leak recurs within 6 months, we return free.`

**H1:** `Plumbing Leak Repair Colombo – Burst Pipe & Joint Sealing Fixed Fast`

**Hero lead:** `From dripping taps to burst mains – we seal leaks permanently. No temporary patches. From LKR 3,500/hr. Pay after service.`

**H2 sections (verbatim):** `Professional Leak Repair in Colombo` · `Common Leaks We Repair in Colombo Homes` · `Why Colombo Homeowners Trust Six7 for Leak Repair` · `Leak Repair Across Colombo & Outskirts` · `Leak Repair FAQs — Colombo` · `Get a Leak Repair Quote` · `Related Plumbing Services`

**Overview H3s:** `Is a Leak Damaging Your Home?` · feature cards `Pipe Joint Sealing & Replacement` (PVC, copper, PPR, older galvanized) + `Burst Pipe Emergency Sealing` · `How Our Leak Repair Works` (3-step: WhatsApp 10-sec video → tech isolates/seals/pressure-tests → approve, 6-month warranty, pay after satisfied)

**Price callout:** `From LKR 3,500/hr — Billed only for actual time spent on repair. Parts priced separately or bring your own (labor-only rate).`

### 3.4 FULL EXTRACTION — DRAIN CLEANING (`/drain-cleaning/`)

**Meta:**
- `<title>Drain Cleaning Colombo | Blocked Drains, Sewer & Sink Unclogging – SIX7 Plumbing</title>`
- `<meta name="description" content="Professional drain cleaning in Colombo. Blocked drain unclogging, high-pressure jetting, sewer clearing. No harsh chemicals. From LKR 7,500/hr. 6-month warranty. WhatsApp for quote.">`
- canonical `.../drain-cleaning/` · og:title `Drain Cleaning Colombo | Emergency Unclogging | SIX7 Plumbing`

**JSON-LD:** `"@type":"Service"` — name `Drain Cleaning Colombo`, serviceType `drain cleaning`, provider Plumber (priceRange `LKR 7,500 - LKR 18,000`), offers `7500 LKR HOUR`, hasFAQ:
- Q: `Why is drain cleaning priced higher than standard plumbing?` → `Drain cleaning requires specialized equipment like high-pressure jetters and professional rodding tools, plus expertise for complex blockages. The LKR 7,500/hr rate reflects this specialized service.`
- Q: `Do you use chemicals to clear drains?` → `No. We avoid harsh chemicals that can damage pipes or the environment. Instead, we use high-pressure water jetting and professional rodding to clear blockages safely and effectively.`
- Q: `Do you guarantee the drain will stay clear?` → `Yes. 6-month workmanship warranty on all drain cleaning. If the same drain clogs again within 6 months due to incomplete clearing, we return free.`

**H1:** `Drain Cleaning Colombo – Blocked Drains, Sinks & Sewer Unclogging`

**H2 sections (verbatim):** `Professional Drain Cleaning in Colombo` · `Common Drain Issues We Clear in Colombo Homes` · `Why Colombo Homeowners Trust Six7 for Drain Cleaning` · `Why Does My Drain Keep Getting Blocked?` · `Drain Cleaning Across Colombo & Outskirts` · `Drain Cleaning FAQs — Colombo` · `Get a Drain Cleaning Quote` · `Related Plumbing Services`

### 3.5 FULL EXTRACTION — WATER TANK INSTALLATION (`/water-tank-installation/`)

**Meta:**
- `<title>Water Tank Installation Colombo | Overhead & Underground Tank Supply & Fitting – SIX7 Plumbing</title>`
- `<meta name="description" content="Professional water tank installation in Colombo. Overhead/underground tank supply & fitting, full plumbing integration. UV-resistant materials. From LKR 12,000 + LKR 3,500/hr. 6-month warranty. WhatsApp for quote.">`
- canonical `.../water-tank-installation/` · og:title `Water Tank Installation Colombo | Overhead & Underground Tanks | SIX7 Plumbing`

**JSON-LD:** `"@type":"Service"` — name `Water Tank Installation Colombo`, serviceType `water tank installation`, provider Plumber (priceRange `LKR 12,000 - LKR 12,000 + LKR 3,500/hr`), offers uses `priceSpecification` (UnitPriceSpecification 3500 LKR HOUR, eligibleQuantity minValue 1) + price `12000`, hasFAQ:
- Q: `Why is water tank installation priced higher than standard plumbing?` → `Tank installation requires specialized equipment for handling/installation, site preparation, plumbing integration expertise, and heavy lifting. The LKR 12,000 + LKR 3,500/hr rate reflects this specialized service.`
- Q: `Do you supply the new tank or do I buy it?` → `We can supply tanks in various capacities and materials (polyethylene, fiberglass) or install a tank you've purchased. Labor is billed separately from tank supply.`
- Q: `Do you guarantee the installation?` → `Yes. 6-month workmanship warranty on all water tank installations. If the same tank leaks or fails within 6 months due to installation, we return free.`

**H1:** `Water Tank Installation Colombo – Overhead & Underground Tank Supply & Fitting`

**H2 sections (verbatim):** `Professional Water Tank Installation in Colombo` · `Common Water Tank Installation Scenarios in Colombo` · `Why Colombo Properties Trust Six7 for Water Tank Installation` · `Water Tank Installation Across Colombo & Outskirts` · `Water Tank Installation FAQs — Colombo` · `Get a Water Tank Installation Quote` · `Related Water Storage Services`

---

## SECTION 4 — LOCATION PAGES (14 pages)

### 4.1 Location page slugs (14, canonical URLs)
1. /battaramulla/ · 2. /boralasgamuwa/ · 3. /colombo/ · 4. /dehiwala/ · 5. /homagama/ · 6. /kaduwela/ · 7. /kotte/ · 8. /maharagama/ · 9. /mt-lavinia/ · 10. /nugegoda/ · 11. /padukka/ · 12. /piliyandala/ · 13. /rathmalana/ · 14. /thalagala/

### 4.2 Location page HTML template structure (sitewide, verbatim)
```
<head>
  <title>Plumber [Town] | 24/7 Emergency Plumbing Services[ + in [Suburbs]] – SIX7 Plumbing</title>
  <link rel="canonical" href="https://plumbing.six7.lk/[slug]/" />
  <meta name="description" content="Emergency plumber [Town] 24/7 serving [Town] & [Suburbs]. Burst pipes, leak repair, drain cleaning, water heaters, whole house filters. [niche specialist]. From LKR 3,500/hr. WhatsApp for quote.">
  og:title=Emergency Plumber [Town] | [niche tagline] | SIX7 Plumbing · og:image default OG
  <script type="application/ld+json"> {"@type":"Plumber","name":"Six7 Plumbing [Town]",...,"areaServed":[...],"openingHoursSpecification":24/7,"hasFAQ":3 Qs} </script>
</head>
<body>
  STICKY EMERGENCY BANNER (Variant B, key <townSlug>Dismissed)
  NAV + mobile menu
  BREADCRUMB: Home › [Town] Plumbing Services
  HERO: badge "Serving All [Town]", H1 "Emergency Plumber [Town] – 24/7 Plumbing Services[ for X, Y & Z]", lead (From LKR 3,500/hr. Pay after service.), WhatsApp emergency CTA + Call CTA, anchor chips (#emergency #residential #commercial #water-quality), checklist (24/7 across area, licensed/insured, 6-month warranty, callout fee notice)
  H2 #emergency "Emergency Plumbing Services in [Town]" — 6 emergency cards (leak repair, drain cleaning, toilet repair, water heater repair, sewer cleaning, sump pump) + red "We Respond Within XX Minutes" CTA bar
  H2 #residential "Residential Plumbing Services in [Town]" — cards
  H2 #commercial "Commercial Plumbing Services in [Town]" — cards
  H2 #water-quality "Water Quality & Storage Services in [Town]" — cards
  H2 "Maintenance & Preventive Services in [Town]" — cards
  REAL PHOTOS (battaramulla only, variant)
  GOOGLE MAP embed (colombo/battaramulla, variant)
  H2 "Serving [Town] & [Area descriptor] Areas" — area chips
  H2 "[Town] Plumbing FAQs" — details accordion (3 Qs mirroring schema)
  H2 "Get a Plumbing Quote for Your [Town] Property" — formSubmit form
  H2 "Other Service Areas Near [Town]" — location links
  FOOTER
  <script src="/emergency.js"></script>
</body>
```
**Template JSON-LD (`@type: "Plumber"`):** `name` = `Six7 Plumbing [Town]`, telephone, url, `priceRange LKR 3,500 - LKR 18,000`, PostalAddress addressLocality **Mount Lavinia** (always, never the town itself), `areaServed` (7-15 towns), `openingHoursSpecification` 00:00-23:59 Mon-Sun, `hasFAQ` 3 questions (areas served · response time · local expertise).

### 4.3 FULL EXTRACTION — COLOMBO (`/colombo/`)

**Meta:**
- `<title>Plumber Colombo | 24/7 Emergency Plumbing Services Across Colombo 1-15 – SIX7 Plumbing</title>`
- `<meta name="description" content="Emergency plumber Colombo 24/7 serving all Colombo suburbs. Burst pipes, leak repair, drain cleaning, water heaters, whole house filters. Licensed local plumbers. From LKR 3,500/hr. WhatsApp for quote.">`
- canonical `.../colombo/` · og:title `Emergency Plumber Colombo | SIX7 Plumbing`

**JSON-LD:** `"@type":"Plumber"` — name `Six7 Plumbing Colombo`, url `.../colombo/`, priceRange `LKR 3,500 - LKR 18,000`, addressLocality Mount Lavinia, areaServed [15 postal codes + 10 suburbs: Colombo 1-15, Dehiwala, Mount Lavinia, Kotte, Nugegoda, Battaramulla, Rajagiriya, Kaduwela, Malabe, Moratuwa, Piliyandala, Maharagama, Homagama], openingHoursSpecification 24/7, hasFAQ:
- Q: `What areas in Colombo do you serve?` → `We serve all Colombo postal codes (1-15) plus Dehiwala, Mount Lavinia, Kotte, Nugegoda, Battaramulla, Rajagiriya, Kaduwela, Malabe, Moratuwa, and surrounding Western Province areas.`
- Q: `How quickly can you respond to emergencies in Colombo?` → `For emergencies in central Colombo (1-10), we aim to arrive within 60 minutes. For outer suburbs, response time is typically 90 minutes.`
- Q: `Are your plumbers licensed and insured in Colombo?` → `Yes. All our plumbers are licensed, insured, and trained in Colombo-specific plumbing codes and challenges.`

**H1:** `Emergency Plumber Colombo – 24/7 Plumbing Services Across Colombo 1-15`

**Hero lead:** `Fast, reliable plumbing repairs & installations across Colombo. From leaky taps to burst pipes, water heaters to drain cleaning – we handle it all. Licensed, insured, local plumbers. From LKR 3,500/hr. Pay after service.`

**Anchor chips:** `Emergency` · `Residential` · `Commercial` · `Water Quality`

**H2 sections (verbatim):** `Emergency Plumbing Services in Colombo` · `Residential Plumbing Services in Colombo` · `Commercial Plumbing Services in Colombo` · `Water Quality & Storage Services in Colombo` · `Maintenance & Preventive Services in Colombo` · `Serving All Colombo Suburbs` · `Colombo Plumbing FAQs` · `Get a Plumbing Quote for Your Colombo Property` · `Other Service Areas Near Colombo`

**Emergency cards (6):** Emergency Leak Repair (3,500) · Emergency Drain Cleaning (7,500) · Emergency Toilet Repair (6,500) · Emergency Water Heater Repair (5,700) · Emergency Sewer Cleaning (18,000 + 8,900) · Emergency Sump Pump Repair (8,500) — red bar: `Colombo Emergency? We Respond Within 60 Minutes`

### 4.4 FULL EXTRACTION — BATTARAMULLA (`/battaramulla/`)

**Meta:**
- `<title>Plumber Battaramulla | 24/7 Emergency Plumbing Services in Battaramulla, Rajagiriya & Kotte – SIX7 Plumbing</title>`
- `<meta name="description" content="Emergency plumber Battaramulla 24/7 serving Battaramulla, Rajagiriya & Kotte. Burst pipes, leak repair, drain cleaning, water heaters, whole house filters. Government housing & commercial specialists. From LKR 3,500/hr. WhatsApp for quote.">`
- canonical `.../battaramulla/` · og:title `Emergency Plumber Battaramulla | SIX7 Plumbing`

**JSON-LD:** `"@type":"Plumber"` — name `Six7 Plumbing Battaramulla`, url, priceRange `LKR 3,500 - LKR 18,000`, addressLocality Mount Lavinia, areaServed [Battaramulla, Rajagiriya, Kotte, Nugegoda, Borella, Kirulapone, Colombo 05, Colombo 08, Kaduwela, Maharagama, Piliyandala], openingHoursSpecification 24/7, hasFAQ:
- Q: `What areas around Battaramulla do you serve?` → [list as above]
- Q: `How quickly can you respond to emergencies in Battaramulla?` → `For emergencies in central Battaramulla and Rajagiriya, we aim to arrive within 35 minutes. For surrounding suburbs like Kotte or Nugegoda, response time is typically 45-55 minutes.`
- Q: `Are your plumbers familiar with government/parliamentary property plumbing?` → `Yes. Our plumbers are experienced with government/parliamentary property challenges: pressure regulation in official buildings, hard water treatment, monsoon drainage for parliamentary zone areas, and compliance with government plumbing standards.`

**H1:** `Emergency Plumber Battaramulla – 24/7 Plumbing Services for Battaramulla, Rajagiriya & Kotte`

**H2 sections (verbatim):** `Plumber in Battaramulla – Professional Plumbing Services for the Parliamentary Zone` · `Emergency Plumbing Services in Battaramulla` · `Residential Plumbing Services in Battaramulla` · `Commercial Plumbing Services in Battaramulla` · `Water Quality & Storage Services in Battaramulla` · `Maintenance & Preventive Services in Battaramulla` · `Real Photos – Our Work in Battaramulla & Parliamentary Zone` · `Google Map – Battaramulla Service Area` · `Serving Battaramulla & Administrative/Suburban Areas` · `Battaramulla Plumbing FAQs` · `Get a Plumbing Quote for Your Battaramulla Property` · `Other Service Areas Near Battaramulla`
(Battaramulla is the only location page with Real Photos + Google Map sections — 409 lines, the largest location page.)

### 4.5 FULL EXTRACTION — NUGEGODA (`/nugegoda/`)

**Meta:**
- `<title>Plumber Nugegoda | 24/7 Emergency Plumbing in Maharagama & Piliyandala – SIX7 Plumbing</title>`
- `<meta name="description" content="Emergency plumber Nugegoda 24/7 serving Nugegoda, Maharagama & Piliyandala. Burst pipes, leak repair, drain cleaning, water heaters, whole house filters. Local specialists. From LKR 3,500/hr. WhatsApp for quote.">`
- canonical `.../nugegoda/` · og:title `Emergency Plumber Nugegoda | 24/7 Plumbing Services | SIX7 Plumbing`

**JSON-LD:** `"@type":"Plumber"` — name `Six7 Plumbing Nugegoda`, url, priceRange `LKR 3,500 - LKR 18,000`, addressLocality Mount Lavinia, areaServed [Nugegoda, Maharagama, Piliyandala, Kottawa, Battaramulla, Kaduwela, Malabe, Homagama, Ratmalana, Moratuwa, Colombo 15], openingHoursSpecification 24/7, hasFAQ:
- Q: `What areas around Nugegoda do you serve?` → [list as above, incl. Battaramulla (South)]
- Q: `How quickly can you respond to emergencies in Nugegoda?` → `For emergencies in central Nugegoda and Maharagama, we aim to arrive within 45 minutes. For surrounding suburbs like Piliyandala or Kottawa, response time is typically 55-65 minutes.`
- Q: `Are your plumbers familiar with suburban property plumbing in Nugegoda?` → `Yes. Our plumbers are experienced with suburban property challenges: apartment complex pressure regulation, hard water treatment, monsoon drainage for developing areas, and aging infrastructure repairs common in Nugegoda and Maharagama properties.`

**H1:** `Emergency Plumber Nugegoda – 24/7 Plumbing Services for Nugegoda, Maharagama & Piliyandala`

**H2 sections (verbatim):** `Emergency Plumbing Services in Nugegoda` · `Residential Plumbing Services in Nugegoda` · `Commercial Plumbing Services in Nugegoda` · `Water Quality & Storage Services in Nugegoda` · `Maintenance & Preventive Services in Nugegoda` · `Serving Nugegoda & Central Suburban Areas` · `Nugegoda Plumbing FAQs` · `Get a Plumbing Quote for Your Nugegoda Property` · `Other Service Areas Near Nugegoda`

**Per-location niche positioning (verbatim meta/title hooks, all 14):**
- battaramulla: `Government housing & commercial specialists`
- boralasgamuwa: `serving Maharagama & Piliyandala South` / `elevated property specialists`
- colombo: `Across Colombo 1-15` / `Licensed local plumbers`
- dehiwala: `Dehiwala & Mount Lavinia` / `Coastal property specialists`
- homagama: `serving Padukka & Maharagama` / `well water & rural property specialists`
- kaduwela: `serving Malabe & Pannipitiya` / `new housing estate & developing suburb specialists`
- kotte: `Kotte, Battaramulla & Rajagiriya` / `Government housing & commercial specialists`
- maharagama: `serving Piliyandala & Homagama` / `suburban property specialists`
- mt-lavinia: `Beach Road, Dehiwala South & coastal areas` / `hotel & restaurant plumbing specialists`
- nugegoda: `Maharagama & Piliyandala` / `Local specialists`
- padukka: `Padukka, Homagama & Maharagama` / `Rural property & well water specialists`
- piliyandala: `Piliyandala & Maharagama` / (none extra)
- rathmalana: `Mount Lavinia South & Katukurunda` / `corrosion protection, coastal property specialists`
- thalagala: `Horana & Ingiriya` / `well water filters, rural property specialists`

---

## SECTION 5 — TRUST, PRICING & GUARANTEE INVENTORY (sitewide, current state)

### 5.1 Callout / dispatch fee — every claim in current copy
- **LKR 2,500**: index.html banner (`Callout fee LKR 2,500 applies to all dispatches`), index footer, pricing meta (`Callout fee LKR 2,500+`), pricing travel table 0-5km = LKR 2,500
- **"Callout fee applies to ALL dispatches regardless of outcome"**: all inner-page sticky banners, pricing/contact/areas hero notes, service + location pages
- **"Callout fee applies to all dispatches regardless of repair outcome"**: contact form terms, pricing Before You Book, service page footnotes
- **"Callout fee applies to all visits/dispatches"**: emergency hero chips, commercial hero
- **"Absorbed into your first service hour if you proceed with repair"**: emergency page
- **"Fee is clearly quoted BEFORE dispatch"**: emergency page
- **"May be waived if same-day repair proceeds — at our sole discretion"**: pricing travel table

### 5.2 Travel / inspection fee ladder (pricing page, verbatim)
0-5km LKR 2,500 · 5-10km LKR 2,950 · 10-15km LKR 3,400 · each +5km +LKR 450. `Nominal travel fee may apply beyond 5km from central dispatch hubs.`

### 5.3 Standard hourly rates (pricing page, verbatim)
- Standard Plumbing: **LKR 3,500/hr**
- Wastewater Blockages: **LKR 5,400/hr**
- Sewer / Raw Sewage / Septic: **LKR 18,000 min + LKR 7,500-9,500/hr** (from 3rd hour)
- Water Pump Callout: **LKR 5,000 diagnosis** (waivable same-day repair)
- Emergency / After-Hours: **+40% surcharge** (outside 8AM-6PM or weekends)
- Billing: `Billing starts on arrival. Minimum 1-hour billing.`

### 5.4 Per-service rates (from service page metas/heroes — every published number)
| Service | Published rate |
|---|---|
| Leak Repair, Tap Repair, Shower Repair, House Plumbing, Pipe Repair, Shower Install, Tap Install (labor) | LKR 3,500/hr |
| Leak Detection | From LKR 3,500/hr |
| Toilet Install, Water Heater Install (labor) | LKR 4,500/hr |
| Low Water Pressure Diagnostic | LKR 5,500 diagnostic (waived w/ repair) |
| Water Heater Repair | LKR 5,700/hr |
| Toilet Repair, Water Tank Cleaning, Water Tank Repair | LKR 6,500/hr |
| Drain Cleaning, Waste Disposal Install/Repair | LKR 7,500/hr |
| Backflow Preventer, Pool Plumbing, Sump Pump Install/Repair | LKR 8,500/hr |
| Annual Plumbing Inspections | LKR 4,500 (waived w/ repair) |
| Outdoor Plumbing | LKR 3,500/hr (LKR 5,400/hr excavation) |
| Water Tank Install / Replacement | LKR 12,000 + LKR 3,500/hr |
| Drinking Water Purification | LKR 12,000 + LKR 5,400/hr |
| Whole House Water Filter | LKR 12,000 + LKR 5,400/hr |
| Greywater System | LKR 12,000 + LKR 3,500/hr |
| Grease Trap Cleaning / Installation | LKR 18,000 + LKR 8,900/hr |
| Sewer Cleaning | LKR 18,000 + LKR 8,900/hr |
| Sewer Repair | LKR 18,000 + LKR 7,900/hr |

**Note:** rate cards in copy sometimes conflict (e.g., emergency triage shows "Flood/Sewage From LKR 7,500/hr" while pricing card says wastewater LKR 5,400/hr; sink/side pages repeat per-service rates above).

### 5.5 Arrival / response time claims — every variation currently on-page
- **"60-min arrival guarantee"** — index hero badge, index meta
- **"under 60 mins"** — pricing hero (`Avg. Response: under 60 mins`)
- **"30-60 mins"** — pricing hero lead (`We're on-site in 30-60 mins`)
- **"60 minutes avg"** / **"Avg Arrival: 60 mins"** — emergency page
- **"Average Response Time: 60 Minutes (Colombo 1-10)"** — contact page
- **"within 60 minutes"** (central Colombo 1-10), **"typically 90 minutes"** (outer suburbs) — colombo FAQ
- **"within 35 minutes"** (central), **"45-55 minutes"** (surrounding) — battaramulla FAQ
- **"within 45 minutes"** (central), **"55-65 minutes"** (surrounding) — nugegoda FAQ
- **"45-min avg response"** — pricing footer
- **"Avg. 38 min arrival"** — emergency page step 2 (STALE/INCONSISTENT — conflicts with 60-min guarantee)
- **"60-min avg arrival"** — emergency meta
- **"90 minutes max"** — (implied via colombo outer suburbs; not verbatim elsewhere)
- Emergency retainer SLA: **2h/4h guaranteed response** (commercial page)

### 5.6 Warranties & guarantees — every claim
- **"6-month workmanship warranty"** / **"6-month warranty"** / **"6-month guarantee"** — service pages (meta, schema, hero, FAQ "we return free")
- **"6-month warranty on all work"** — colombo location page hero
- **"Fixed Fast or Free Callout"** — emergency page H1 (implied callout-free on success; conflicts with "callout applies regardless of outcome" elsewhere)
- **"Permanent sealing – no temporary patches"** — leak-repair hero
- **"Leak-free guarantee"** — tap/shower/toilet install pages
- **"Tile-safe, leak-free guarantee"** — shower install
- **"95%+ first-visit success rate"** — leak-detection meta
- **"Timeline & milestone guarantees"** — commercial project-based
- **"Save up to 40% vs. reactive repairs"** — commercial maintenance contracts
- **"Guaranteed SLA (2h/4h)"** — commercial emergency retainers

### 5.7 Trust & social proof claims (sitewide)
- **5,000+ jobs completed** (about-us hero + meta + schema desc)
- **4.9★ rating / Google Reviews** (about-us), **"4.9★ rating"** (meta), **aggregateRating 4.9/500 reviews** (about schema)
- **Licensed & Insured** (all location pages + about + pricing hero)
- **Verified technicians – not call center agents** (about H2), **"No Call Centers"** (contact)
- **Direct-work model / direct work = fair pricing** (contact, commercial)
- **100+ Commercial Clients** (commercial)
- **Since 2020 / Local Since 2020 / foundingDate 2020** (about)
- **Pay after service** / **"Pay only after you approve the completed job"** (emergency) / **"You Pay After"** (emergency step 3)
- **3 named employees** (Nimal, Saman, Kasun) in about schema + team section
- **"Made with ❤ by SIX7 Team"** (footers)

### 5.8 Contact & conversion elements (sitewide)
- Sticky banner phone (all pages), nav `Call Now` (all), hero WhatsApp+Call CTAs (all), emergency.js popup + floating FABs (all), per-page formSubmit forms (contact, commercial, pricing dispatch, services, service pages, location pages) — all posting to plumbing@six7.lk with `_next` → /thank-you/, `_autoresponse` variants ("within 15 mins", "within 3 mins", "within 2 business hours").
- Phone link format: `tel:+94758244216`; WhatsApp: `https://wa.me/94758244216?text=<CONTEXT>` (per-page context strings like `QUOTE%20LEAK%20REPAIR%20Colombo`, `EMERGENCY%20PLUMBER%20Colombo`, `COMMERCIAL%20QUOTE%20Colombo`).

---

## SECTION 6 — META & SCHEMA TABLE (ALL PAGES)

**File Path** | **Title** | **Meta Description** | **Primary Schema @type**
---|---|---|---
/ (index.html) | SIX7 Plumbing | 24/7 Emergency Plumber Colombo – Leak Repair, Water Tanks | Emergency plumber Colombo 24/7 – burst pipe, leak detection, water heater repair, drain cleaning. 60-min arrival guarantee. Call +94 75 824 4216 | Plumber
/about-us/ | About SIX7 Plumbing | Colombo's Trusted 24/7 Emergency Plumbers | Local Colombo plumbing team since 2020. 5,000+ jobs completed, 4.9★ rating. Verified technicians, transparent hourly billing from LKR 3,500/hr. 24/7 emergency response. | ["AboutPage","LocalBusiness","Plumber"]
/services/ | SIX7 Plumbing | Professional Plumbing Services in Colombo – 24/7 Emergency | Expert plumbing services in Colombo: emergency leak repair, drain cleaning, water heater, tank repair, water filters. 60-min arrival, transparent pricing. | CollectionPage
/commercial/ | Commercial Plumbing Colombo | Office, Hotel & Industrial Plumbing – SIX7 Plumbing | Commercial plumbing services in Colombo. Office maintenance, restaurant kitchen plumbing, hotel bathroom fit-outs, industrial pipe repair. Maintenance contracts & emergency response. Callout fee applies. | ["LocalBusiness","Plumber"]
/areas/ | Plumbing Service Areas Colombo | 24/7 Plumber Near Me – SIX7 Plumbing | Emergency plumbing service areas across Colombo & Western Province. 60-min arrival guarantee. Serving Dehiwala, Kotte, Battaramulla, Maharagama, Piliyandala & more. Callout fee applies. | LocalBusiness
/pricing/ | SIX7 Plumbing | Pricing & Callout Policy – Transparent Plumbing Rates Colombo | Clear plumbing pricing in Colombo. Callout fee LKR 2,500+ applies to all dispatches. Hourly rates from LKR 3,500/hr. Emergency service 24/7. Zero-tolerance policy. | WebPage
/disclaimer/ | SIX7 Plumbing | Service Disclaimer & Terms – Transparent Plumbing Policy Colombo | Legal service disclaimer, zero-tolerance policy, and pricing terms for SIX7 Plumbing. Callout fees, diagnostic nature of plumbing work, biohazard premiums explained. | WebPage
/contact/ | Contact SIX7 Plumbing | 24/7 Emergency Plumber Colombo – Free Quote | Contact SIX7 Plumbing for emergency plumbing services in Colombo & Western Province. 24/7 phone, WhatsApp, email. Free quotes, transparent pricing. Callout fee applies. | ["ContactPage","LocalBusiness","Plumber"]
/emergency/ | 24/7 Emergency Plumber Colombo | Burst Pipe, Flood, Sewage – SIX7 Plumbing | Emergency plumber Colombo – 24/7 dispatch for burst pipes, flooding, sewage backup, no water. 60-min avg arrival. Transparent callout fee. WhatsApp for instant quote. | ["EmergencyService","Plumber","LocalBusiness","FAQPage"]
/faq/ | Plumbing FAQs Colombo | SIX7 Plumbing | Common plumbing questions in Colombo answered. Pricing, response times, warranties, callout fees, emergency services, commercial invoicing and more. 24/7 at +94 75 824 4216. | ["LocalBusiness","Plumber"]
/annual-plumbing-inspections/ | Annual Plumbing Inspections Colombo | Preventive Maintenance & Health Check – SIX7 Plumbing | Professional annual plumbing inspections in Colombo. Preventive maintenance, leak detection, code compliance checks. From LKR 4,500 (waived with repair). Detailed report with photos. WhatsApp to schedule. | ["Service","FAQPage"]
/backflow-preventer-installation/ | Backflow Preventer Installation Colombo | RPZ, DC & PVB Devices – SIX7 Plumbing | Professional backflow preventer installation in Colombo. RPZ, DC, PVB device installation for homes & businesses. Code-compliant, certified, tested. From LKR 8,500/hr. WhatsApp for quote. | Service
/drain-cleaning/ | Drain Cleaning Colombo | Blocked Drains, Sewer & Sink Unclogging – SIX7 Plumbing | Professional drain cleaning in Colombo. Blocked drain unclogging, high-pressure jetting, sewer clearing. No harsh chemicals. From LKR 7,500/hr. 6-month warranty. WhatsApp for quote. | Service
/drinking-water-purification/ | Drinking Water Purification Colombo | RO, UV & Under-Sink Filter Installation – SIX7 Plumbing | Professional drinking water purification in Colombo. RO, UV, carbon & multi-stage filtration systems. Under-sink & commercial installations. Water testing included. From LKR 12,000 + LKR 5,400/hr. 6-month guarantee. WhatsApp for quote. | Service
/grease-trap-cleaning/ | Grease Trap Cleaning Colombo | Restaurant Grease Interceptor Pumping & Maintenance – SIX7 Plumbing | Professional grease trap cleaning in Colombo. Pumping, maintenance & certification for restaurants, hotels, commercial kitchens. Biohazard-safe, code-compliant. From LKR 18,000 + LKR 8,900/hr. Maintenance contracts available. WhatsApp to schedule. | Service
/grease-trap-installation/ | Grease Trap Installation Colombo | Commercial Kitchen Compliance – SIX7 Plumbing | Professional grease trap installation in Colombo. Under-sink interceptors, in-ground traps for restaurants, hotels, commercial kitchens. Code-compliant, certified, biohazard-safe. From LKR 18,000 + LKR 8,900/hr. WhatsApp for quote. | Service
/greywater-system-installation/ | Greywater System Installation Colombo | Water Recycling & Eco Plumbing – SIX7 Plumbing | Professional greywater system installation in Colombo. Recycle sink, shower & laundry water for garden irrigation or toilet flushing. Code-compliant, eco-friendly. From LKR 12,000 + LKR 3,500/hr. WhatsApp for quote. | Service
/house-plumbing/ | House Plumbing Colombo | Complete Residential Plumbing Services – SIX7 Plumbing | Professional house plumbing services in Colombo. Leak repairs, tap installation, toilet repair, drain cleaning, water heater service. Licensed residential plumbers. From LKR 3,500/hr. 6-month warranty. WhatsApp for quote. | Service
/leak-detection/ | Leak Detection Colombo | Hidden Leak Specialists – SIX7 Plumbing | Professional leak detection in Colombo using thermal imaging & acoustic tracing. Non-destructive, accurate, from LKR 3,500/hr. 95%+ first-visit success rate. WhatsApp for quote. | Service
/leak-repair/ | Leak Repair Colombo | Burst Pipe & Tap Leak Sealing – SIX7 Plumbing | Professional plumbing leak repair in Colombo. Burst pipe sealing, tap leak fixes, joint repair. Permanent sealing, 6-month warranty. From LKR 3,500/hr. WhatsApp for quote. | Service
/low-water-pressure-diagnostic/ | Low Water Pressure Diagnostic Colombo | Expert Pressure Testing & Diagnosis – SIX7 Plumbing | Professional low water pressure diagnostics in Colombo. Identify causes of weak flow, inconsistent pressure, or pump issues. From LKR 5,500 diagnostic (waived with repair). Digital pressure gauges & flow meters. WhatsApp to schedule. | Service
/outdoor-plumbing-repair/ | Outdoor Plumbing Repair Colombo | Garden Taps, External Pipes & Drainage – SIX7 Plumbing | Professional outdoor plumbing repair in Colombo. Garden tap fixes, external pipe repairs, outdoor drain cleaning. Weather-resistant solutions. From LKR 3,500/hr (LKR 5,400/hr excavation). 6-month warranty. WhatsApp for quote. | Service
/pipe-repair/ | Pipe Repair Colombo | PVC, Copper & PPR Pipe Fixes – SIX7 Plumbing | Professional plumbing pipe repair in Colombo. PVC, copper, PPR, galvanized pipe fixes. Permanent, pressure-tested repairs. From LKR 3,500/hr. 6-month warranty. WhatsApp for quote. | Service
/pool-plumbing-repair/ | Pool Plumbing Repair Colombo | Circulation, Filtration & Leak Fixes – SIX7 Plumbing | Professional pool plumbing repair in Colombo. Circulation system fixes, filtration repairs, chemical line maintenance. Chemical/UV-resistant solutions. Residential & commercial pools. From LKR 8,500/hr. 6-month warranty. WhatsApp for quote. | Service
/sewer-cleaning/ | Sewer Cleaning Colombo | Main Line Jetting & Blockage Removal – SIX7 Plumbing | Professional sewer cleaning in Colombo. Main line jetting, blockage removal, sewer unclogging. Biohazard-safe protocols. From LKR 18,000 + LKR 8,900/hr. 6-month warranty. WhatsApp for quote. | Service
/sewer-repair/ | Sewer Repair Colombo | Pipe Break, Joint Leak & Collapse Fixes – SIX7 Plumbing | Professional sewer repair in Colombo. Pipe break fixes, joint leak sealing, collapsed pipe replacement. Biohazard-safe protocols. From LKR 18,000 + LKR 7,900/hr. 6-month warranty. WhatsApp for quote. | Service
/shower-installation/ | Shower Installation Colombo | Rainfall, Mixer & Handheld Shower Fitting – SIX7 Plumbing | Professional shower installation in Colombo. Rainfall heads, mixer valves, handheld combos. Tile-safe, leak-free guarantee. Labor from LKR 3,500/hr. Customer-supplied fixtures welcome. WhatsApp for quote. | Service
/shower-repair/ | Shower Repair Colombo | Mixer Valve, Head & Rail Fixes – SIX7 Plumbing | Professional shower repair in Colombo. Mixer valve fixes, shower head leaks, rail tightening, weak water pressure solutions. Permanent repairs. From LKR 3,500/hr. 6-month warranty. WhatsApp for quote. | Service
/sump-pump-installation/ | Sump Pump Installation Colombo | Basement Flood Prevention & Water Removal – SIX7 Plumbing | Professional sump pump installation in Colombo. Basement flood prevention, crawl space water management, commercial flood systems. Monsoon-tested solutions. From LKR 8,500/hr. 6-month warranty. WhatsApp for quote. | Service
/sump-pump-repair/ | Sump Pump Repair Colombo | Emergency Flood Pump Fixes & Water Removal – SIX7 Plumbing | Professional sump pump repair in Colombo. Flood pump fixes, motor repairs, float switch replacement, emergency response. Monsoon-ready solutions. From LKR 8,500/hr. 6-month warranty. WhatsApp for quote. | Service
/tap-installation/ | Tap Installation Colombo | Mixer, Basin & Kitchen Tap Fitting – SIX7 Plumbing | Professional tap installation in Colombo. Mixer taps, basin faucets, kitchen faucet fitting. Leak-free guarantee. Labor from LKR 3,500/hr. Customer-supplied fixtures welcome. WhatsApp for quote. | Service
/tap-repair/ | Tap Repair Colombo | Dripping Tap, Cartridge & Valve Fixes – SIX7 Plumbing | Professional tap repair in Colombo. Dripping tap fixes, cartridge replacement, valve repairs. Permanent solutions. From LKR 3,500/hr. 6-month warranty. WhatsApp for quote. | Service
/toilet-installation/ | Toilet Installation Colombo | WC, Cistern & Flush System Fitting – SIX7 Plumbing | Professional toilet installation in Colombo. WC fitting, cistern installation, flush system upgrades. Leak-free guarantee. Labor from LKR 4,500/hr. Customer-supplied fixtures welcome. WhatsApp for quote. | Service
/toilet-repair/ | Toilet Repair Colombo | Running Toilet, Cistern & Leak Fixes – SIX7 Plumbing | Professional toilet repair in Colombo. Running toilet fixes, cistern repairs, flush mechanism replacement. Permanent solutions. From LKR 6,500/hr. 6-month warranty. WhatsApp for quote. | Service
/waste-disposal-installation/ | Waste Disposal Installation Colombo | Garbage Disposals & Commercial Waste Systems – SIX7 Plumbing | Professional waste disposal installation in Colombo. Under-sink garbage disposals for homes, commercial waste management systems for restaurants. Hygienic, code-compliant. From LKR 7,500/hr. WhatsApp for quote. | Service
/waste-disposal-repair/ | Waste Disposal Repair Colombo | Garbage Disposer Fixes & Kitchen Waste Repairs – SIX7 Plumbing | Professional waste disposal repair in Colombo. Garbage disposal fixes, jammed blade clearing, leak repairs. Hygienic, permanent solutions. From LKR 7,500/hr. 6-month warranty. WhatsApp for quote. | Service
/water-heater-installation/ | Water Heater Installation Colombo | Geyser & Instant Heater Fitting – SIX7 Plumbing | Professional water heater installation in Colombo. Geyser fitting, instant heater installation, solar-compatible systems. Safe, code-compliant. Labor from LKR 4,500/hr. WhatsApp for quote. | Service
/water-heater-repair/ | Water Heater Repair Colombo | Geyser Element, Thermostat & Leak Fixes – SIX7 Plumbing | Professional water heater repair in Colombo. Geyser element replacement, thermostat fixes, leak repairs. Permanent solutions. From LKR 5,700/hr. 6-month warranty. WhatsApp for quote. | Service
/water-tank-cleaning/ | Water Tank Cleaning Colombo | Overhead & Underground Tank Scrub & Sanitize – SIX7 Plumbing | Professional water tank cleaning in Colombo. Overhead/underground tank scrub, sediment removal, algae cleaning, sanitizing. Eco-friendly solutions. From LKR 6,500/hr. 6-month guarantee. WhatsApp for quote. | Service
/water-tank-installation/ | Water Tank Installation Colombo | Overhead & Underground Tank Supply & Fitting – SIX7 Plumbing | Professional water tank installation in Colombo. Overhead/underground tank supply & fitting, full plumbing integration. UV-resistant materials. From LKR 12,000 + LKR 3,500/hr. 6-month warranty. WhatsApp for quote. | Service
/water-tank-repair/ | Water Tank Repair Colombo | Leak Fixes, Valve Replacement & Overflow Repairs – SIX7 Plumbing | Professional water tank repair in Colombo. Leak fixes, valve replacement, overflow repairs, cracked tank sealing. Permanent solutions. From LKR 6,500/hr. 6-month warranty. WhatsApp for quote. | Service
/water-tank-replacement/ | Water Tank Replacement Colombo | Overhead & Underground Tank Supply & Fitting – SIX7 Plumbing | Professional water tank replacement in Colombo. Overhead/underground tank supply & fitting, full plumbing integration. Remove old, install new. From LKR 12,000 + LKR 3,500/hr. 6-month warranty. WhatsApp for quote. | Service
/whole-house-water-filter/ | Whole House Water Filter Colombo | Hard Water & Iron Removal Systems – SIX7 Plumbing | Professional whole house water filter installation in Colombo. Hard water softening, iron removal, sediment filtration, multi-stage systems. From LKR 12,000 + LKR 5,400/hr. 6-month guarantee. WhatsApp for quote. | Service
/battaramulla/ | Plumber Battaramulla | 24/7 Emergency Plumbing Services in Battaramulla, Rajagiriya & Kotte – SIX7 Plumbing | Emergency plumber Battaramulla 24/7 serving Battaramulla, Rajagiriya & Kotte. Burst pipes, leak repair, drain cleaning, water heaters, whole house filters. Government housing & commercial specialists. From LKR 3,500/hr. WhatsApp for quote. | Plumber
/boralasgamuwa/ | Plumber Boralasgamuwa | 24/7 Emergency Plumbing Services – SIX7 Plumbing | Emergency plumber Boralasgamuwa 24/7 serving Maharagama & Piliyandala South. Burst pipes, leak repair, drain cleaning, water heaters, elevated property specialists. From LKR 3,500/hr. WhatsApp for quote. | Plumber
/colombo/ | Plumber Colombo | 24/7 Emergency Plumbing Services Across Colombo 1-15 – SIX7 Plumbing | Emergency plumber Colombo 24/7 serving all Colombo suburbs. Burst pipes, leak repair, drain cleaning, water heaters, whole house filters. Licensed local plumbers. From LKR 3,500/hr. WhatsApp for quote. | Plumber
/dehiwala/ | Plumber Dehiwala | 24/7 Emergency Plumbing Services in Dehiwala & Mount Lavinia – SIX7 Plumbing | Emergency plumber Dehiwala 24/7 serving Dehiwala, Mount Lavinia & Wellawatte. Burst pipes, leak repair, drain cleaning, water heaters, whole house filters. Coastal property specialists. From LKR 3,500/hr. WhatsApp for quote. | Plumber
/homagama/ | Plumber Homagama | 24/7 Emergency Plumbing Services – SIX7 Plumbing | Emergency plumber Homagama 24/7 serving Padukka & Maharagama. Burst pipes, leak repair, drain cleaning, water heaters, well water & rural property specialists. From LKR 3,500/hr. WhatsApp for quote. | Plumber
/kaduwela/ | Plumber Kaduwela | 24/7 Emergency Plumbing Services – SIX7 Plumbing | Emergency plumber Kaduwela 24/7 serving Malabe & Pannipitiya. Burst pipes, leak repair, drain cleaning, water heaters, new housing estate & developing suburb specialists. From LKR 3,500/hr. WhatsApp for quote. | Plumber
/kotte/ | Plumber Kotte | 24/7 Emergency Plumbing Services in Kotte, Battaramulla & Rajagiriya – SIX7 Plumbing | Emergency plumber Kotte 24/7 serving Kotte, Battaramulla & Rajagiriya. Burst pipes, leak repair, drain cleaning, water heaters, whole house filters. Government housing & commercial specialists. From LKR 3,500/hr. WhatsApp for quote. | Plumber
/maharagama/ | Plumber Maharagama | 24/7 Emergency Plumbing Services – SIX7 Plumbing | Emergency plumber Maharagama 24/7 serving Piliyandala & Homagama. Burst pipes, leak repair, drain cleaning, water heaters, suburban property specialists. From LKR 3,500/hr. WhatsApp for quote. | Plumber
/mt-lavinia/ | Plumber Mount Lavinia | 24/7 Emergency Plumbing Services – SIX7 Plumbing | Emergency plumber Mount Lavinia 24/7 serving Beach Road, Dehiwala South & coastal areas. Burst pipes, leak repair, drain cleaning, water heaters, hotel & restaurant plumbing specialists. From LKR 3,500/hr. WhatsApp for quote. | Plumber
/nugegoda/ | Plumber Nugegoda | 24/7 Emergency Plumbing in Maharagama & Piliyandala – SIX7 Plumbing | Emergency plumber Nugegoda 24/7 serving Nugegoda, Maharagama & Piliyandala. Burst pipes, leak repair, drain cleaning, water heaters, whole house filters. Local specialists. From LKR 3,500/hr. WhatsApp for quote. | Plumber
/padukka/ | Plumber Padukka | 24/7 Emergency Plumbing Services in Padukka, Homagama & Maharagama – SIX7 Plumbing | Emergency plumber Padukka 24/7 serving Padukka, Homagama & Maharagama. Burst pipes, leak repair, drain cleaning, water heaters, whole house filters. Rural property & well water specialists. From LKR 3,500/hr. WhatsApp for quote. | Plumber
/piliyandala/ | Plumber Piliyandala | 24/7 Emergency Plumbing Services in Piliyandala & Maharagama – SIX7 Plumbing | Emergency plumber Piliyandala 24/7 serving Piliyandala, Maharagama & Homagama. Burst pipes, leak repair, drain cleaning, water heaters, whole house filters. From LKR 3,500/hr. WhatsApp for quote. | Plumber
/rathmalana/ | Plumber Rathmalana | 24/7 Emergency Plumbing in Mount Lavinia South & Katukurunda – SIX7 Plumbing | Emergency plumber Rathmalana 24/7 serving Rathmalana, Mount Lavinia South & Katukurunda. Burst pipes, leak repair, drain cleaning, water heaters, corrosion protection, coastal property specialists. From LKR 3,500/hr. WhatsApp for quote. | Plumber
/thalagala/ | Plumber Thalagala | 24/7 Emergency Plumbing in Horana & Ingiriya – SIX7 Plumbing | Emergency plumber Thalagala 24/7 serving Thalagala, Horana & Ingiriya. Burst pipes, leak repair, drain cleaning, water heaters, well water filters, rural property specialists. From LKR 3,500/hr. WhatsApp for quote. | Plumber

**Non-indexed / utility pages (noindex, excluded from primary table):**
- `/review/` — TITLE `SIX7 Plumbing Reviews` · no meta description · **noindex, nofollow** · no schema
- `/thank-you/` — TITLE `Got It — We're On It | SIX7 Plumbing` · DESC `We've received your plumbing request. SIX7 Plumbing will WhatsApp your confirmed appointment shortly. Need faster help? Call +94 75 824 4216.` · **noindex, follow** · no schema
- `/404.html` — TITLE `Page Not Found | 404 - SIX7 Plumbing` · DESC `The page you're looking for doesn't exist. Return to SIX7 Plumbing for 24/7 emergency plumbing services in Colombo and suburbs. From LKR 3,500/hr.` · **noindex, follow** · no schema
- OG images: all pages use `https://plumbing.six7.lk/assets/img/og-plumbing-default.jpg`; all pages set `twitter:card=summary_large_image`.

---

**NOTES ON DISCREPANCIES (extracted as-is, not modified):**
1. Service count claims differ: "23+" (services og), "32+" (services schema), "all 32 services" (index footer + emergency page link). Actual service page count on disk: 34 (incl. /emergency/).
2. Response-time claims vary by page: 60-min guarantee (index), under 60 (pricing hero), 30-60 (pricing lead), 38 min (emergency step 2), 35/45-min central + 45-55/55-65 outer (location FAQs), 90 min outer (colombo FAQ), 45-min avg (pricing footer).
3. Homepage schema priceRange `LKR 1,500 - LKR 18,000` vs `LKR 3,500 - LKR 18,000` everywhere else.
4. Index banner/footer say `Callout fee LKR 2,500`; every other page says `Callout fee applies to ALL dispatches regardless of outcome` (amount not stated).
5. Emergency H1 says `Fixed Fast or Free Callout` but emergency body + all policies say callout applies regardless of outcome.
6. about-us og:title `About Us | SIX7 Plumbing` does not include keyword "Colombo"; areas og:title `Emergency And Commercial Plumber | SIX7 Plumbing` differs from its title tag.
7. Location pages' `address.addressLocality` is always **Mount Lavinia** (business base), never the target town.
8. Nugegoda title omits "Services" ("Emergency Plumbing in Maharagama & Piliyandala") — no "Services" word.
9. water-tank-replacement shares the same H1 as water-tank-installation (`...Overhead & Underground Tank Supply & Fitting`) and same canonical pattern; differentiation only in meta/body.
10. `sewer-cleaning` og:title is `Sewer Repair Colombo | Pipe Replacement & Relining | SIX7 Plumbing` (copy of sewer-repair og:title).

---

_End of extraction. Every element above was read directly from the current HTML files at `F:\OpenCode\Projects\wildcards\plumbing.six7.lk`. No content was rewritten._
