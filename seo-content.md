# SEO CONTENT & POSITIONING BLUEPRINT: SIX7 PLUMBING DISPATCH NETWORK
This document contains the exact copy, structure, and schema rules to rewrite the entire `plumbing.six7.lk` codebase. 

## CORE POSITIONING SHIFT
We are no longer a "local plumbing team". We are **Colombo’s Premier Emergency Plumbing Dispatch Network**. 
- We connect properties with vetted, independent plumbing contractors.
- We operate a **Positive Dispatch Model**: We only deploy to verified, pre-authorized emergencies to guarantee 60-minute arrivals.
- **Pricing:** LKR 5,000 Deployment Fee + LKR 3,000/hr Contractor Rate.
- **Guarantee:** 6-Month Workmanship Shield.

---

## SECTION 1: GLOBAL BOILERPLATE (APPLY TO ALL 58 PAGES)

### 1.1 Sticky Emergency Banner (Top of all pages)
**Copy:** `🚨 24/7 EMERGENCY DISPATCH: +94 75 824 4216 • 60-Min Arrival Guarantee • LKR 5,000 Base Dispatch Fee Applies`
*(Make the phone number a `tel:` link. Keep it dismissible on inner pages via localStorage).*

### 1.2 Navigation Menu
**Links:** Home `/` | Services `/services/` | Commercial `/commercial/` | Areas `/areas/` | Pricing & Terms `/pricing/` | FAQ `/faq/` | Contact `/contact/`
*(Remove "Disclaimer" as a separate nav item; it is now merged conceptually into "Pricing & Terms").*

### 1.3 Footer Copyright & Trust Line
**Copy:** `© 2026 SIX7 Plumbing Dispatch Network. All rights reserved. | 6-Month Workmanship Shield | LKR 5,000 Dispatch + LKR 3,000/hr`

### 1.4 Emergency Popup (`emergency.js` injection)
- **Title:** Emergency Plumbing Dispatch
- **Subtitle:** Water damage spreads fast. We deploy vetted contractors to your location in 60 minutes.
- **Primary CTA:** Call Dispatch Center (`tel:+94758244216`)
- **Secondary CTA:** WhatsApp Emergency (`wa.me/94758244216?text=EMERGENCY%20DISPATCH%20NEEDED`)
- **Tertiary Link:** View Dispatch Terms & Rates (`/pricing/`)

---

## SECTION 2: HUB PAGES (EXACT REWRITE COPY)

### 2.1 HOME (`index.html`)
- **H1:** Colombo’s Premier Emergency Plumbing Dispatch Network.
- **Hero Lead:** Burst pipe? Flooding? We deploy Colombo’s top-rated, vetted plumbing contractors immediately. Transparent base rates. 6-month workmanship shield.
- **H2 #1:** How Our Dispatch Network Works
  - *Step 1:* **Request Dispatch.** WhatsApp us a 10-second video of the issue. We verify the emergency and quote the exact scope.
  - *Step 2:* **60-Minute Arrival.** We deploy the nearest vetted contractor. Our positive dispatch model guarantees rapid response for verified emergencies.
  - *Step 3:* **Contractor Fixes, You Pay After.** The contractor isolates the issue and completes the job. You pay the transparent hourly rate only after you approve the work.
- **H2 #2:** The SIX7 Dispatch Advantage
  - *Vetted Network:* We don't send random handymen. Every contractor in our network is licensed, insured, and background-checked.
  - *Transparent Rates:* No hidden fees. LKR 5,000 deployment fee + LKR 3,000/hr standard labor. You know the cost before we dispatch.
  - *The 6-Month Shield:* All contractor repairs are backed by our 6-month workmanship warranty. If the joint fails, we return free.
- **H2 #3:** What Needs Fixing? (Service Categories Grid)
- **H2 #4:** Plumbers Near You (Location Grid)

### 2.2 PRICING & TERMS (`pricing/index.html`)
- **H1:** Transparent Dispatch Rates & Network Terms
- **Hero Lead:** Plumbing is unpredictable. Our pricing isn't. We operate a positive dispatch model with standardized rates across our entire contractor network. No surprises. No haggling.
- **H2 #1:** The LKR 5,000 Deployment Fee
  - *Copy:* This base fee covers immediate vehicle dispatch, fuel, and the contractor's first-hour diagnostic. It guarantees your 60-minute arrival slot. It is non-refundable but ensures we only dispatch to serious, verified emergencies.
- **H2 #2:** Standard Contractor Hourly Rates
  - *Standard Plumbing (Taps, Leaks, Visible Pipes):* LKR 3,000/hr
  - *Wastewater Blockages (Jetting, Camera):* LKR 5,000/hr
  - *Sewer / Raw Sewage / Biohazard:* LKR 8,000/hr (Hazard premium applies)
  - *After-Hours / Weekend Surcharge:* +40%
- **H2 #3:** The 6-Month Workmanship Shield
  - *Copy:* We stand behind our network. If a contractor's repair fails within 6 months, we dispatch a fix for free. *Exclusions: Pre-existing pipe degradation, acts of nature (e.g., falling trees, extreme weather), or third-party damage.*
- **H2 #4:** Zero-Tolerance Dispute Policy
  - *Copy:* By requesting dispatch, you agree to our verbal and digital contract. Rates are confirmed via WhatsApp before deployment. "Price too high" complaints after work is completed will not be entertained. We operate a strict blacklist for non-payment or fraudulent claims.

### 2.3 EMERGENCY (`emergency/index.html`)
- **H1:** 24/7 Emergency Plumbing Dispatch. 60-Minute Arrival.
- **Hero Lead:** Water emergencies destroy properties in minutes. We deploy specialized contractors immediately. Transparent rates. 6-month shield.
- **H2 #1:** What's Your Emergency? (Triage Grid)
  - *Burst Pipe / Major Leak* → Deploy Leak Specialist (LKR 3,000/hr)
  - *Flood / Sewage Backup* → Deploy Biohazard Team (LKR 8,000/hr)
  - *No Water / Pump Failure* → Deploy Pump Technician (LKR 5,000/hr)
- **H2 #2:** The Positive Dispatch Model
  - *Copy:* To guarantee 60-minute arrivals, we only dispatch to verified emergencies. Send us a 10-second WhatsApp video. We assess, quote, and deploy immediately. This filters out tire-kickers and ensures our contractors are always available for real crises.

### 2.4 COMMERCIAL (`commercial/index.html`)
- **H1:** Commercial Plumbing Dispatch & Maintenance Contracts
- **Hero Lead:** Running a business? Don't let plumbing disrupt operations. We deploy specialized commercial contractors for office maintenance, restaurant kitchens, and industrial pipe systems. Consolidated billing. SLA guaranteed.
- **H2 #1:** Industries We Serve (Grid: Offices, Hotels, Restaurants, Hospitals, Retail, Industrial)
- **H2 #2:** Commercial Service Models
  - *Preventive Maintenance Contracts:* Scheduled network dispatches to prevent disasters.
  - *Emergency Response Retainers:* Guaranteed 2-hour SLA for commercial properties.
- **H2 #3:** Request Commercial Dispatch (Form)

### 2.5 ABOUT (`about-us/index.html`)
- **H1:** About SIX7: Colombo’s Trusted Plumbing Dispatch Network
- **Hero Lead:** We aren't a single plumber in a van. We are a managed network of Colombo's top independent plumbing contractors, unified under one dispatch center, one pricing standard, and one 6-month guarantee.
- **H2 #1:** Why We Built The Dispatch Model
  - *Copy:* Homeowners were tired of unreliable handymen, hidden fees, and ghosting. Plumbers were tired of chasing payments and tire-kickers. SIX7 bridges the gap. We handle the dispatch, the vetting, and the legal terms. Our contractors handle the tools.
- **H2 #2:** Verified Contractors – Not Call Center Agents
- **H2 #3:** The SIX7 Guarantee (5,000+ Dispatches, 4.9★ Network Rating)

### 2.6 MISSING PAGES TO CREATE
- **`/faq/index.html`**: H1: "Plumbing Dispatch & Pricing FAQs". Pull the best 8 questions from the Pricing and Emergency pages. Add FAQPage schema.
- **`/thank-you/index.html`**: H1: "Dispatch Request Received". Copy: "We've got your details. A dispatch coordinator will WhatsApp you within 3 minutes to verify the emergency and authorize the LKR 5,000 deployment hold. Need us faster? Call +94 75 824 4216." (Set meta robots to `noindex, follow`).

---

## SECTION 3: SERVICE PAGE TEMPLATE (APPLY TO ALL 34 PAGES)

*Instructions for OpenCode: Apply this exact H1/H2 structure to every service page. Replace `{Service}` with the specific service name (e.g., "Leak Repair", "Drain Cleaning"). Replace `{Rate}` with the specific rate from the pricing page.*

- **H1:** {Service} in Colombo | 60-Min Emergency Dispatch
- **Hero Lead:** Need {Service} fast? We deploy vetted plumbing contractors in 60 minutes. LKR 5,000 dispatch fee + {Rate}/hr. 6-month workmanship shield.
- **H2 #1:** Professional {Service} Dispatch in Colombo
  - *Body:* Brief overview of the service. Emphasize that we deploy *specialists* for this specific issue, not general handymen.
- **H2 #2:** Common {Service} Issues Our Contractors Resolve
  - *Body:* 3-4 bullet points of specific symptoms (e.g., for Leak Repair: hidden wall leaks, burst mains, dripping joints).
- **H2 #3:** The SIX7 Dispatch Advantage for {Service}
  - *Body:* Why use our network instead of a random directory? (Vetted techs, thermal/acoustic tools, tile-safe methods, 6-month shield).
- **H2 #4:** Transparent {Service} Rates
  - *Body:* Clearly state the LKR 5,000 deployment fee + the specific hourly rate for this service. Reiterate the "Pay after you approve the work" model.
- **H2 #5:** {Service} FAQs (3 questions specific to the service + schema)
- **H2 #6:** Secure Your Dispatch Slot (Form + WhatsApp CTA)

---

## SECTION 4: LOCATION PAGE TEMPLATE (APPLY TO ALL 14 PAGES)

*Instructions for OpenCode: Apply this exact H1/H2 structure to every location page. Replace `{Town}` with the specific town name (e.g., "Battaramulla", "Nugegoda"). Replace `{Suburbs}` with the 2-3 neighboring areas mentioned in the current meta.*

- **H1:** Emergency Plumber {Town} | 60-Min Dispatch Network
- **Hero Lead:** Fast, reliable plumbing contractors deployed across {Town}, {Suburbs}, and surrounding areas. LKR 5,000 dispatch fee + LKR 3,000/hr. 6-month shield.
- **H2 #1:** 24/7 Emergency Dispatch in {Town}
  - *Body:* We have contractors staged near {Town} ready for immediate deployment. Burst pipes, sewage backups, and pump failures handled in 60 minutes.
- **H2 #2:** Residential & Commercial Contractors in {Town}
  - *Body:* Brief mention of the specific property types in this area (e.g., government housing in Battaramulla, coastal properties in Dehiwala, new estates in Kaduwela).
- **H2 #3:** Why {Town} Properties Trust Our Network
  - *Body:* Local expertise. Our contractors know the specific water pressure issues, monsoon drainage challenges, and pipe materials common in {Town}.
- **H2 #4:** {Town} Dispatch FAQs (3 questions + schema)
  - *Q1:* How fast can you dispatch a plumber to {Town}? (A: 60 minutes or less for verified emergencies).
  - *Q2:* Do you charge extra for traveling to {Town}? (A: No. The LKR 5,000 deployment fee covers travel across our entire Western Province network).
  - *Q3:* Are your contractors familiar with {Town} properties? (A: Yes, we route {Town} calls to contractors who specialize in this specific suburb's infrastructure).
- **H2 #5:** Get a Plumbing Quote for Your {Town} Property (Form + WhatsApp CTA)

---

## SECTION 5: META TAGS & SCHEMA DIRECTIVES

### 5.1 Meta Titles (Formulas)
- **Home:** `SIX7 Plumbing | 24/7 Emergency Dispatch Network Colombo`
- **Services:** `{Service} Colombo | 60-Min Emergency Plumber – SIX7 Network`
- **Locations:** `Emergency Plumber {Town} | 60-Min Dispatch Network – SIX7`
- **Hubs:** `{Hub Name} | SIX7 Plumbing Dispatch Network`

### 5.2 Meta Descriptions (Formulas)
- **Services:** `Need {Service} in Colombo? We deploy vetted contractors in 60 mins. LKR 5,000 dispatch + LKR 3,000/hr. 6-month shield. WhatsApp now.`
- **Locations:** `Need a plumber in {Town}? We deploy vetted contractors in 60 mins. LKR 5,000 dispatch + LKR 3,000/hr. 6-month shield. WhatsApp now.`

### 5.3 JSON-LD Schema Rules (CRITICAL FIXES)
1. **Change all `@type: "PlumbingService"` to `@type: "Plumber"`.** (PlumbingService is invalid and drops rich results).
2. **Standardize `addressLocality`:** MUST be `"Mount Lavinia"` on EVERY single page. Do not change it to the target town on location pages.
3. **Use `areaServed`:** Put the target towns/suburbs in the `areaServed` array on location pages.
4. **Standardize `priceRange`:** `"LKR 5,000 - LKR 18,000"` everywhere.
5. **Add `LocalBusiness` node** to the Home, About, and Emergency pages if missing.

---

## SECTION 6: CLEANUP DIRECTIVES
1. **Strip all remaining `Keywords: ...` visible text blocks.** Zero exceptions.
2. **Strip all `<meta name="keywords">` tags.**
3. **Fix internal links:** Ensure all `/faq/` links point to the newly created `/faq/index.html`.
4. **Fix `/pipe-repair/indx.html`:** The file must be renamed to `index.html` internally, and all references updated.