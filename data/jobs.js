/*
 * Avana Medical open positions
 * ---------------------------------------------------------------
 * This file drives the "Open positions" list on careers.html.
 * Edit, save, refresh. Remove a job by deleting its block; add one
 * by copying a block (mind the comma between blocks).
 *
 * ALL JOBS BELOW ARE DUMMY (lorem ipsum) AND MUST BE REPLACED.
 *
 * Fields
 *   id                 lowercase-with-hyphens, unique
 *   title              job title
 *   department         used for the department filter
 *   location           used for the location filter
 *   type               e.g. "Full-time"
 *   experience         e.g. "2–4 years"
 *   posted             date in YYYY-MM-DD (newest jobs are listed first)
 *   summary            one or two sentences shown on the closed card
 *   responsibilities   bullet list
 *   requirements       bullet list
 */
window.AVANA_JOBS = [
  {
    id: 'territory-manager-sports-medicine-mumbai',
    title: 'Territory Manager – Sports Medicine',
    department: 'Sales',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '3–6 years',
    posted: '2026-09-28',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
    responsibilities: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
      'Duis aute irure dolor in reprehenderit in voluptate velit'
    ],
    requirements: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Excepteur sint occaecat cupidatat non proident',
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur'
    ]
  },
  {
    id: 'product-specialist-arthroplasty-delhi',
    title: 'Product Specialist – Arthroplasty',
    department: 'Sales',
    location: 'Delhi',
    type: 'Full-time',
    experience: '2–5 years',
    posted: '2026-09-24',
    summary: 'Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur, praesent commodo cursus magna.',
    responsibilities: [
      'Vestibulum id ligula porta felis euismod semper',
      'Aenean lacinia bibendum nulla sed consectetur',
      'Praesent commodo cursus magna, vel scelerisque nisl',
      'Curabitur blandit tempus porttitor'
    ],
    requirements: [
      'Etiam porta sem malesuada magna mollis euismod',
      'Morbi leo risus, porta ac consectetur ac',
      'Fusce dapibus, tellus ac cursus commodo'
    ]
  },
  {
    id: 'clinical-education-specialist-chennai',
    title: 'Clinical Education Specialist',
    department: 'Medical Education',
    location: 'Chennai',
    type: 'Full-time',
    experience: '3–5 years',
    posted: '2026-09-20',
    summary: 'Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod, morbi leo risus porta ac consectetur.',
    responsibilities: [
      'Curabitur blandit tempus porttitor',
      'Etiam porta sem malesuada magna mollis euismod',
      'Donec ullamcorper nulla non metus auctor fringilla',
      'Maecenas faucibus mollis interdum'
    ],
    requirements: [
      'Nullam quis risus eget urna mollis ornare vel eu leo',
      'Cras mattis consectetur purus sit amet fermentum',
      'Integer posuere erat a ante venenatis dapibus'
    ]
  },
  {
    id: 'service-engineer-capital-equipment-bengaluru',
    title: 'Service Engineer – Capital Equipment',
    department: 'Technical Service',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: '1–4 years',
    posted: '2026-09-17',
    summary: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
    responsibilities: [
      'Fusce dapibus, tellus ac cursus commodo',
      'Tortor mauris condimentum nibh, ut fermentum massa',
      'Nulla vitae elit libero, a pharetra augue',
      'Sed posuere consectetur est at lobortis'
    ],
    requirements: [
      'Maecenas sed diam eget risus varius blandit',
      'Aenean eu leo quam, pellentesque ornare sem',
      'Donec sed odio dui, cras justo odio'
    ]
  },
  {
    id: 'territory-manager-distal-extremities-chennai',
    title: 'Territory Manager – Distal Extremities',
    department: 'Sales',
    location: 'Chennai',
    type: 'Full-time',
    experience: '3–6 years',
    posted: '2026-09-12',
    summary: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
    responsibilities: [
      'Duis mollis, est non commodo luctus',
      'Nisi erat porttitor ligula, eget lacinia odio',
      'Cum sociis natoque penatibus et magnis dis parturient',
      'Nascetur ridiculus mus, donec sed odio dui'
    ],
    requirements: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Vivamus sagittis lacus vel augue laoreet rutrum',
      'Faucibus dolor auctor, nullam id dolor id nibh'
    ]
  },
  {
    id: 'marketing-executive-chennai',
    title: 'Marketing Executive',
    department: 'Marketing',
    location: 'Chennai',
    type: 'Full-time',
    experience: '2–4 years',
    posted: '2026-09-08',
    summary: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
    responsibilities: [
      'Nullam id dolor id nibh ultricies vehicula ut id elit',
      'Cras justo odio, dapibus ac facilisis in',
      'Egestas eget quam, morbi leo risus',
      'Porta ac consectetur ac, vestibulum at eros'
    ],
    requirements: [
      'Aenean lacinia bibendum nulla sed consectetur',
      'Donec id elit non mi porta gravida at eget metus',
      'Sed posuere consectetur est at lobortis'
    ]
  },
  {
    id: 'logistics-coordinator-chennai',
    title: 'Logistics Coordinator',
    department: 'Operations',
    location: 'Chennai',
    type: 'Full-time',
    experience: '1–3 years',
    posted: '2026-09-03',
    summary: 'Maecenas faucibus mollis interdum. Donec sed odio dui, vestibulum id ligula porta felis euismod semper.',
    responsibilities: [
      'Maecenas faucibus mollis interdum',
      'Donec sed odio dui, vestibulum id ligula porta',
      'Integer posuere erat a ante venenatis dapibus',
      'Cum sociis natoque penatibus et magnis'
    ],
    requirements: [
      'Etiam porta sem malesuada magna mollis euismod',
      'Vestibulum id ligula porta felis euismod semper',
      'Aenean eu leo quam, pellentesque ornare'
    ]
  },
  {
    id: 'accounts-executive-chennai',
    title: 'Accounts Executive',
    department: 'Finance',
    location: 'Chennai',
    type: 'Full-time',
    experience: '2–4 years',
    posted: '2026-08-29',
    summary: 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.',
    responsibilities: [
      'Etiam porta sem malesuada magna mollis euismod',
      'Cras mattis consectetur purus sit amet fermentum',
      'Morbi leo risus, porta ac consectetur ac',
      'Vestibulum at eros, donec ullamcorper nulla'
    ],
    requirements: [
      'Nulla vitae elit libero, a pharetra augue',
      'Curabitur blandit tempus porttitor',
      'Donec sed odio dui, maecenas sed diam'
    ]
  }
];
