/* -------------------------------------------------------------------------
   COMPANY MASTER DATA  —  EDIT THIS FILE FIRST
   Every figure, address and contact detail used across the site is read from
   here. Placeholder values are marked with  // TODO  — replace them with the
   verified company information before the site goes live.
   ------------------------------------------------------------------------- */

export const company = {
  legalName: 'Sterling Ventilation Asia Pacific Pte Ltd',
  shortName: 'Sterling Ventilation',
  initials: 'SV',
  strapline: 'Engineered Smoke Control Systems',
  promise: 'Protecting People. Preserving Life.',
  positioning: 'We Engineer Life Safety Smoke Management Systems.',
  values: ['Engineered', 'Reliable', 'Innovative', 'Life Safety'],
};

// TODO — confirm all counters with management before publishing.
export const metrics = [
  { value: 18, suffix: '+', label: 'Years of engineering experience' },
  { value: 640, suffix: '+', label: 'Projects delivered' },
  { value: 14, suffix: '', label: 'Countries served' },
  { value: 25000, suffix: '+', label: 'Systems installed' },
];

// TODO — replace with the registered office details.
export const offices = [
  {
    id: 'singapore',
    country: 'Singapore',
    label: 'Singapore — Head Office',
    role: 'Regional headquarters, engineering & commercial',
    lines: ['Sterling Ventilation Asia Pacific Pte Ltd', '[Street address]', 'Singapore [postal code]'],
    phone: '+65 0000 0000',
    email: 'enquiry@sterlingventilation.com',
    map: 'https://www.google.com/maps?q=Singapore&output=embed',
  },
  {
    id: 'india',
    country: 'India',
    label: 'India — Engineering & Operations',
    role: 'Design office, project delivery & service',
    lines: ['Sterling Ventilation India', '[Street address]', '[City] [PIN]'],
    phone: '+91 00000 00000',
    email: 'india@sterlingventilation.com',
    map: 'https://www.google.com/maps?q=Chennai&output=embed',
  },
];

export const contactChannels = {
  general: 'enquiry@sterlingventilation.com',
  engineering: 'engineering@sterlingventilation.com',
  service: 'service@sterlingventilation.com',
  careers: 'careers@sterlingventilation.com',
};

// Territories where the business is active / actively developing.
export const presence = [
  { region: 'Singapore', status: 'Head office', x: 71.5, y: 62 },
  { region: 'Malaysia', status: 'Projects & service', x: 69.5, y: 58.5 },
  { region: 'Indonesia', status: 'Projects', x: 74, y: 66 },
  { region: 'India', status: 'Engineering centre', x: 63, y: 47 },
  { region: 'UAE & Middle East', status: 'Projects', x: 56, y: 44 },
  { region: 'Vietnam', status: 'Projects', x: 73, y: 47 },
  { region: 'Thailand', status: 'Projects', x: 70.5, y: 47 },
  { region: 'Philippines', status: 'Projects', x: 78, y: 48 },
  { region: 'Australia', status: 'Partner network', x: 82, y: 78 },
  { region: 'Sri Lanka', status: 'Projects', x: 64.5, y: 54 },
];
