# Before this site goes live

Everything published on the site right now is taken from the centre's own price board,
its signage, and the client's own photographs of the 5 Sep 2026 SHAKTHI camp. Nothing has
been invented. The items below are facts only the trust can supply —
they are deliberately left out rather than guessed at, because a detail on the website that
contradicts the documents submitted to Meta is a common reason a verification is rejected.

## 1. Must fix — these affect the verification review

- [ ] **Confirm the exact address.** The price board reads *Indian Red Cross Bhavan, Ground
      Floor, Opposite Union Bank, Ashok Nagar, Karimnagar* and that is what the site uses.
      Google's own listing for the Indian Red Cross Society building records the locality as
      *Osmanpura / Sai Nagar, Karimnagar, 505001*. Pick the version that appears on the trust's
      registration papers, and then use that **identical** wording on the website, in Meta
      Business Manager, and on the Google Business Profile.
- [ ] **Working hours.** `contact.html` currently asks visitors to call and confirm timings.
      Replace that line with the actual opening days and hours — there is a `TODO` comment
      marking the spot.
- [ ] **Email address on the domain.** Create one (e.g. `info@<yourdomain>`), then uncomment
      the email block in `contact.html`, add it to the contact line in `privacy.html`, and use
      **that same address** as the business email in Meta Business Manager.
- [ ] **Trust registration details.** `about.html` has a commented-out "Registration &
      Governance" section. Filling it in — registered name, registration number, PAN, 12A/80G
      if held — is one of the strongest signals a reviewer can see. Fill in only what is real
      and leave out the rest.

## 2. Should fix — makes the site more credible and more useful

- [ ] **Radiologist and pathologist.** Name and qualification of the doctor reporting the CT
      scans and of the pathologist / lab in-charge. A diagnostic site without a named
      reporting doctor looks thin. Placeholders are in the commented block in `about.html`.
- [ ] **Regulatory registrations**, if the centre holds them: Clinical Establishments Act
      registration, and the AERB registration for the CT installation.
- [ ] **Consent for the camp photographs.** `camps.html` now publishes four photos from the
      5 Sep 2026 SHAKTHI camp. Two of them show identifiable young women, one of them mid
      blood-draw, which links a named-face to a medical activity. Confirm the college and the
      students consented to the photographs being published on a public website. If that
      consent is not clearly in hand, swap in the two photos that do not show students
      closely — `camp-shakthi-analyser.webp` and `camp-shakthi-team.webp` — or crop/blur faces.
      This is the one item on this list that is worth getting right before launch on its own
      merits, not just for the verification.
- [ ] **Confirm the Lions office-bearers' names** shown on the camp poster. I read them from a
      photograph and did **not** publish them, because a misspelt District Governor's name on a
      live site is worse than no name at all. The four names as they appeared are listed in a
      comment at the bottom of `camps.html`. Once the client confirms the spellings, adding
      "held under District Governor Lion ..." to the camp report strengthens the page.
- [ ] **Number of girls screened** at the 5 Sep camp, if the trust has the register. Add it to
      the "Camps held" table. Only a confirmed figure.
- [ ] **More camp records.** SHAKTHI runs through 2026–27. Append a row and photographs for each
      new camp — the markup to copy is in a comment at the bottom of `camps.html`.
- [ ] **Better photographs of the centre itself.** The three centre photos appear to have come
      from the Google listing. Ask the client for originals — the CT machine, the lab, the
      sample collection point, the staff. The camp photos are already originals and are good.
- [ ] **CT scanner make and slice count** (e.g. 16-slice). Patients and referring doctors
      both look for this, and it is easy to add to `services.html`.

## 3. Worth doing

- [ ] **Buy a real domain.** A `.org` or `.in` costs roughly ₹500–900 a year. A custom domain
      with a matching email address is a much stronger signal to a reviewer than a
      `*.vercel.app` subdomain, and the whole point of the exercise is to get through review
      the first time. This is the single cheapest thing on this list that improves the odds.
- [ ] **Claim / update the Google Business Profile** so its name, address, phone and hours
      match the website exactly, and add the website link to it.
- [ ] **Telugu version of the key pages.** Most of the people this centre serves read Telugu
      first — the board itself is in Telugu. At minimum, a Telugu version of the price list.
