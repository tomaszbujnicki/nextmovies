export const MOVIE_GENRES_OBJECT = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

export const MOVIE_GENRES_ARRAY = [
  { 'id': 28, 'name': 'Action' },
  { 'id': 12, 'name': 'Adventure' },
  { 'id': 16, 'name': 'Animation' },
  { 'id': 35, 'name': 'Comedy' },
  { 'id': 80, 'name': 'Crime' },
  { 'id': 99, 'name': 'Documentary' },
  { 'id': 18, 'name': 'Drama' },
  { 'id': 10751, 'name': 'Family' },
  { 'id': 14, 'name': 'Fantasy' },
  { 'id': 36, 'name': 'History' },
  { 'id': 27, 'name': 'Horror' },
  { 'id': 10402, 'name': 'Music' },
  { 'id': 9648, 'name': 'Mystery' },
  { 'id': 10749, 'name': 'Romance' },
  { 'id': 878, 'name': 'Science Fiction' },
  { 'id': 10770, 'name': 'TV Movie' },
  { 'id': 53, 'name': 'Thriller' },
  { 'id': 10752, 'name': 'War' },
  { 'id': 37, 'name': 'Western' },
];

export const TV_GENRES_OBJECT = {
  10759: 'Action & Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  10762: 'Kids',
  9648: 'Mystery',
  10763: 'News',
  10764: 'Reality',
  10765: 'Sci-Fi & Fantasy',
  10766: 'Soap',
  10767: 'Talk',
  10768: 'War & Politics',
  37: 'Western',
};

export const TV_GENRES_ARRAY = [
  { 'id': 10759, 'name': 'Action & Adventure' },
  { 'id': 16, 'name': 'Animation' },
  { 'id': 35, 'name': 'Comedy' },
  { 'id': 80, 'name': 'Crime' },
  { 'id': 99, 'name': 'Documentary' },
  { 'id': 18, 'name': 'Drama' },
  { 'id': 10751, 'name': 'Family' },
  { 'id': 10762, 'name': 'Kids' },
  { 'id': 9648, 'name': 'Mystery' },
  { 'id': 10763, 'name': 'News' },
  { 'id': 10764, 'name': 'Reality' },
  { 'id': 10765, 'name': 'Sci-Fi & Fantasy' },
  { 'id': 10766, 'name': 'Soap' },
  { 'id': 10767, 'name': 'Talk' },
  { 'id': 10768, 'name': 'War & Politics' },
  { 'id': 37, 'name': 'Western' },
];

export const MOVIE_CERTIFICATION_OBJECT = {
  // US
  // 0: 'NR',
  1: 'G',
  2: 'PG',
  3: 'PG-13',
  4: 'R',
  5: 'NC-17',
};

export const MOVIE_CERTIFICATION_ARRAY = [
  {
    'certification': 'G',
    'meaning':
      'All ages admitted. There is no content that would be objectionable to most parents. This is one of only two ratings dating back to 1968 that still exists today.',
    'order': 1,
  },
  {
    'certification': 'PG',
    'meaning':
      'Some material may not be suitable for children under 10. These films may contain some mild language, crude/suggestive humor, scary moments and/or violence. No drug content is present. There are a few exceptions to this rule. A few racial insults may also be heard.',
    'order': 2,
  },
  {
    'certification': 'PG-13',
    'meaning':
      'Some material may be inappropriate for children under 13. Films given this rating may contain sexual content, brief or partial nudity, some strong language and innuendo, humor, mature themes, political themes, terror and/or intense action violence. However, bloodshed is rarely present. This is the minimum rating at which drug content is present.',
    'order': 3,
  },
  {
    'certification': 'R',
    'meaning':
      'Under 17 requires accompanying parent or adult guardian 21 or older. The parent/guardian is required to stay with the child under 17 through the entire movie, even if the parent gives the child/teenager permission to see the film alone. These films may contain strong profanity, graphic sexuality, nudity, strong violence, horror, gore, and strong drug use. A movie rated R for profanity often has more severe or frequent language than the PG-13 rating would permit. An R-rated movie may have more blood, gore, drug use, nudity, or graphic sexuality than a PG-13 movie would admit.',
    'order': 4,
  },
  {
    'certification': 'NC-17',
    'meaning':
      'These films contain excessive graphic violence, intense or explicit sex, depraved, abhorrent behavior, explicit drug abuse, strong language, explicit nudity, or any other elements which, at present, most parents would consider too strong and therefore off-limits for viewing by their children and teens. NC-17 does not necessarily mean obscene or pornographic in the oft-accepted or legal meaning of those words.',
    'order': 5,
  },

  // { 'certification': 'NR', 'meaning': 'No rating information.', 'order': 0 },
];

export const TV_CERTIFICATION_OBJECT = {
  // US
  // 0: 'NR',
  1: 'TV-Y',
  2: 'TV-Y7',
  3: 'TV-G',
  4: 'TV-PG',
  5: 'TV-14',
  6: 'TV-MA',
};

export const TV_CERTIFICATION_ARRAY = [
  // US
  {
    certification: 'TV-MA',
    meaning:
      'This program is specifically designed to be viewed by adults and therefore may be unsuitable for children under 17.',
    order: 6,
  },
  {
    certification: 'TV-Y',
    meaning: 'This program is designed to be appropriate for all children.',
    order: 1,
  },
  {
    certification: 'TV-14',
    meaning:
      'This program contains some material that many parents would find unsuitable for children under 14 years of age.',
    order: 5,
  },
  /*   {
    certification: 'NR',
    meaning: 'No rating information.',
    order: 0,
  }, */
  {
    certification: 'TV-PG',
    meaning:
      'This program contains material that parents may find unsuitable for younger children.',
    order: 4,
  },
  {
    certification: 'TV-Y7',
    meaning: 'This program is designed for children age 7 and above.',
    order: 2,
  },
  {
    certification: 'TV-G',
    meaning: 'Most parents would find this program suitable for all ages.',
    order: 3,
  },
];

export const RELEASE_DATE_TYPES = {
  1: 'Premiere',
  2: 'Theatrical (limited)',
  3: 'Theatrical',
  4: 'Digital',
  5: 'Physical',
  6: 'TV',
};

export const LANGUAGES = {
  bi: 'Bislama',
  cs: 'Czech',
  ba: 'Bashkir',
  ae: 'Avestan',
  av: 'Avaric',
  de: 'German',
  mt: 'Maltese',
  om: 'Oromo',
  rm: 'Raeto-Romance',
  so: 'Somali',
  ts: 'Tsonga',
  vi: 'Vietnamese',
  gn: 'Guarani',
  ig: 'Igbo',
  it: 'Italian',
  ki: 'Kikuyu',
  ku: 'Kurdish',
  la: 'Latin',
  ln: 'Lingala',
  lb: 'Letzeburgesch',
  ny: 'Chichewa; Nyanja',
  pl: 'Polish',
  si: 'Sinhalese',
  to: 'Tonga',
  az: 'Azerbaijani',
  ce: 'Chechen',
  cu: 'Slavic',
  da: 'Danish',
  hz: 'Herero',
  ie: 'Interlingue',
  rw: 'Kinyarwanda',
  mi: 'Maori',
  no: 'Norwegian',
  pi: 'Pali',
  sk: 'Slovak',
  se: 'Northern Sami',
  sm: 'Samoan',
  uk: 'Ukrainian',
  en: 'English',
  ay: 'Aymara',
  ca: 'Catalan',
  eo: 'Esperanto',
  ha: 'Hausa',
  ho: 'Hiri Motu',
  hu: 'Hungarian',
  io: 'Ido',
  ii: 'Yi',
  kn: 'Kannada',
  kv: 'Komi',
  li: 'Limburgish',
  oj: 'Ojibwa',
  ru: 'Russian',
  sr: 'Serbian',
  sv: 'Swedish',
  ty: 'Tahitian',
  zu: 'Zulu',
  ka: 'Georgian',
  ch: 'Chamorro',
  be: 'Belarusian',
  br: 'Breton',
  kw: 'Cornish',
  fi: 'Finnish',
  sh: 'Serbo-Croatian',
  nn: 'Norwegian Nynorsk',
  tt: 'Tatar',
  tg: 'Tajik',
  vo: 'Volapük',
  ps: 'Pushto',
  mk: 'Macedonian',
  fr: 'French',
  bm: 'Bambara',
  eu: 'Basque',
  fj: ':Fijian',

  id: 'Indonesian',

  mg: 'Malagasy',
  na: 'Nauru',
  xx: 'No Language',
  qu: 'Quechua',
  sq: 'Albanian',
  ti: 'Tigrinya',
  tw: 'Twi',
  wa: 'Walloon',
  ab: 'Abkhazian',
  bs: 'Bosnian',
  af: 'Afrikaans',
  an: 'Aragonese',
  fy: 'Frisian',
  gu: 'Gujarati',
  ik: 'Inupiaq',
  ja: 'Japanese',
  ko: 'Korean',
  lg: 'Ganda',
  nl: 'Dutch',
  os: 'Ossetian',
  el: 'Greek',
  bn: 'Bengali',
  cr: 'Cree',
  km: 'Khmer',
  lo: 'Lao',
  nd: 'Ndebele',
  ne: 'Nepali',
  sc: 'Sardinian',
  sw: 'Swahili',
  tl: 'Tagalog',
  ur: 'Urdu',
  ee: 'Ewe',
  aa: 'Afar',
  co: 'Corsican',
  et: 'Estonian',
  is: 'Icelandic',
  ks: 'Kashmiri',
  kr: 'Kanuri',
  ky: 'Kirghiz',
  kj: 'Kuanyama',
  nr: 'Ndebele',
  or: 'Oriya',
  wo: 'Wolof',
  za: 'Zhuang',
  ar: 'Arabic',
  cv: 'Chuvash',
  fo: 'Faroese',
  hr: 'Croatian',
  ms: 'Malay',
  nb: 'Norwegian Bokmål',
  rn: 'Rundi',
  sn: 'Shona',
  st: 'Sotho',
  tr: 'Turkish',
  am: 'Amharic',
  fa: 'Persian',
  hy: 'Armenian',
  pa: 'Punjabi',
  as: 'Assamese',
  ia: 'Interlingua',
  lv: 'Latvian',
  lu: 'Luba-Katanga',
  mr: 'Marathi',
  mn: 'Mongolian',
  pt: 'Portuguese',
  th: 'Thai',
  tk: 'Turkmen',
  ve: 'Venda',
  dv: 'Divehi',
  gv: 'Manx',
  kl: 'Kalaallisut',
  kk: 'Kazakh',
  lt: 'Lithuanian',
  my: 'Burmese',
  sl: 'Slovenian',
  sd: 'Sindhi',
  cn: 'Cantonese',
  hi: 'Hindi',
  cy: 'Welsh',
  ht: 'Haitian',
  iu: 'Inuktitut',
  jv: 'Javanese',
  mh: 'Marshall',
  sa: 'Sanskrit',
  ss: 'Swati',
  te: 'Telugu',
  kg: 'Kongo',
  ml: 'Malayalam',
  uz: 'Uzbek',
  sg: 'Sango',
  xh: 'Xhosa',
  es: 'Spanish',
  su: 'Sundanese',
  ug: 'Uighur',
  yi: 'Yiddish',
  yo: 'Yoruba',
  zh: 'Mandarin',
  he: 'Hebrew',
  bo: 'Tibetan',
  ak: 'Akan',
  mo: 'Moldavian',
  ng: 'Ndonga',
  dz: 'Dzongkha',
  ff: 'Fulah',
  gd: 'Gaelic',
  ga: 'Irish',
  gl: 'Galician',
  nv: 'Navajo',
  oc: 'Occitan',
  ro: 'Romanian',
  ta: 'Tamil',
  tn: 'Tswana',
  bg: 'Bulgarian',
};
