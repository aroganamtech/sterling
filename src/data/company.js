/* -------------------------------------------------------------------------
   COMPANY MASTER DATA  —  EDIT THIS FILE FIRST
   Every address and contact detail used across the site is read from here.

   NOTE — no telephone number or email address has been supplied in the
   approved content. Rather than publish placeholders, the site routes all
   enquiries through the contact form. Add the verified details to
   `offices[0].phone` / `offices[0].email` and the UI will surface them
   automatically (see Header, Footer, Contact and Global Coverage).
   ------------------------------------------------------------------------- */

export const company = {
  legalName: 'Sterling Ventilation Asia Pacific Pte Ltd',
  shortName: 'Sterling Ventilation',
  initials: 'SV',
  strapline: 'Engineered Smoke Control Systems',
  promise: 'Protecting People. Preserving Life.',
  positioning: 'We Engineer Life Safety Smoke Management Systems.',
  values: ['Innovation', 'Integrity', 'Engineering Excellence', 'Quality', 'Customer Commitment'],
};

// Founder / Managing Director experience — see src/pages/about/Leadership.jsx.
export const metrics = [
  { value: 10, suffix: '+', label: 'Years of smoke control engineering experience' },
];

export const offices = [
  {
    id: 'singapore',
    country: 'Singapore',
    label: 'Singapore — Head Office',
    role: 'Engineering, manufacturing and regional distribution base',
    lines: ['Sterling Ventilation Asia Pacific Pte Ltd', 'No. 6, Tuas Basin Close', 'Singapore 638799'],
    phone: '',
    email: '',
    map: 'https://www.google.com/maps?q=No.+6+Tuas+Basin+Close+Singapore+638799&output=embed',
  },
];

/* Distribution and support territory. Sterling operates from Singapore and is
   authorised by its manufacturing partners to market and distribute their
   ventilation products across Asia and Australia. */
export const presence = [
  { region: 'Singapore', status: 'Head office, engineering & manufacturing', x: 71.5, y: 62 },
  { region: 'Malaysia', status: 'Authorised distribution territory', x: 69.5, y: 58.5 },
  { region: 'Indonesia', status: 'Authorised distribution territory', x: 74, y: 66 },
  { region: 'Vietnam', status: 'Authorised distribution territory', x: 73, y: 47 },
  { region: 'Thailand', status: 'Authorised distribution territory', x: 70.5, y: 47 },
  { region: 'Philippines', status: 'Authorised distribution territory', x: 78, y: 48 },
  { region: 'India', status: 'Authorised distribution territory', x: 63, y: 47 },
  { region: 'Australia', status: 'Authorised distribution territory', x: 82, y: 78 },
];
