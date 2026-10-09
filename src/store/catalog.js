export const money = (value) =>
  `$${Number(value || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export const products = [
  {
    id: 'apex',
    name: 'Apex',
    fa: 'حلقه هندسی',
    kind: 'facet',
    price: 320,
    code: 'a. 925',
    group: 'shop',
    note: 'cast in metal',
  },
  {
    id: 'organic',
    name: 'Organic',
    fa: 'دستبند مهره‌ای',
    kind: 'beads',
    price: 180,
    code: 'a. 925',
    group: 'shop',
    note: 'polished by hand',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    fa: 'حلقه باریک',
    kind: 'thin',
    price: 140,
    code: 'a. 925',
    group: 'shop',
    note: 'a single line',
  },
  {
    id: 'brutal',
    name: 'Brutal',
    fa: 'انگشتر حجیم',
    kind: 'signet',
    price: 260,
    code: 'a. 925',
    group: 'shop',
    note: 'weight, then light',
  },
  {
    id: 'fractured',
    name: 'Fractured',
    fa: 'دستبند نقره',
    kind: 'broken',
    price: 210,
    code: 'a. 925',
    group: 'featured',
    note: 'an opening left on purpose',
  },
  {
    id: 'pulse',
    name: 'Pulse',
    fa: 'حلقه دوخط',
    kind: 'double',
    price: 190,
    code: 'a. 925',
    group: 'shop',
    note: 'rhythm carved in metal',
  },
  {
    id: 'origin',
    name: 'Origin',
    fa: 'حلقه صاف',
    kind: 'smooth',
    price: 160,
    code: 'a. 925',
    group: 'story',
    note: 'silence turned into geometry',
  },
  {
    id: 'flux',
    name: 'Flux',
    fa: 'حلقه زنجیری',
    kind: 'chain',
    price: 240,
    code: 'a. 925',
    group: 'story',
    note: 'links held in a circle',
  },
];

export const shopCards = ['organic', 'minimal', 'brutal', 'apex', 'pulse', 'flux'].map((id) =>
  products.find((item) => item.id === id)
);

export const chapters = [
  { id: 'origin', name: 'Origin', text: 'Pure minimalism in metal: silence turned into geometry.' },
  { id: 'void', name: 'Void', text: 'The empty center is the part that fits the hand.' },
  { id: 'pulse', name: 'Pulse', text: 'Geometry in motion: rhythm carved in metal.' },
  { id: 'ratio', name: 'Ratio', text: 'Proportion first. Ornament never arrives.' },
  { id: 'apex', name: 'Apex', text: 'One plane, cut until it catches the light.' },
  { id: 'flux', name: 'Flux', text: 'Separate links, asked to become a circle.' },
];

export const regions = ['Iran', 'France', 'United Arab Emirates', 'Germany'];

export const sizes = ['S', 'M', 'L'];

export function findProduct(id) {
  return products.find((item) => item.id === id);
}
