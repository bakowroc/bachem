import  lorem from 'lorem-ipsum';

export const  ProductRoute = {
	TABLICZKI_ZNAMIONOWE: 'tabliczki-znamionowe',
	TABLICZKI_FIRMOWE: 'tabliczki-firmowe',
	TABLICZKI_FABRYCZNE: 'tabliczki-fabryczne',
	PANELE_STEROWNICZE: 'panele-sterownicze',
	TABLICE_CZOLOWE_MASZYN: 'tablice-czolowe-maszyn',
	SKALE_LINIALY_SCHEMATY: 'skale-linialy-schematy',
	TABLICZKI_ROZNE: 'tabliczki-rozne',
	TABLICE_INFORMACYJNE: 'tablice-informacyjne',
	WYWIESZKI_ETYKIETY: 'wywieszki-i-etykiety',
	NUMERATORY: 'numeratory'
};


const tz1 = {src: 'http://tabliczki-znamionowe.eu/images/thumbs/big/wytl3.jpg'};
const tz2 = {src: 'https://oznacznik.com.pl/images/fullsizeoutput_3681.jpg'};
const tz3 = {src: 'https://www.grawernia.pl/galerie/t/tabliczka-znamionowa-wym_3111.jpg'};
const tz4 = {src: 'https://www.sangraf.pl/Files/images/tabliczki%20znamionowe/Tabliczka-znamionowa-samoprzylepna-1.jpg'};
const tz5 = {src: 'https://www.grawernia.pl/galerie/t/tabliczka-znamionowa-z-a_4622.jpg'};
const tz6 = {src: 'http://www.atic.com.pl/tabliczki-znamionowe/d/zastepcza-tabliczka-znamionowa2.jpg'};

export const productContent = {
	[ProductRoute.TABLICZKI_ZNAMIONOWE]: {
		heading: "Tabliczki znamionowe",
		description: lorem({count: 10}),
		photos: [tz1, tz2, tz3, tz4, tz5, tz6],
		methods: [
			{name: 'Anodowanie', href: '/anodowanie'},
			{name: 'Trawienie', href: '/trawienie'}
		]
	},
	[ProductRoute.TABLICZKI_FIRMOWE]: {
		heading: "Tabliczki firmowe",
		description: lorem({count: 10}),
		photos: [tz1, tz2, tz3, tz4, tz5, tz6],
    methods: [
      {name: 'Anodowanie', href: '/anodowanie'},
      {name: 'Trawienie', href: '/trawienie'}
    ]
	},
	[ProductRoute.TABLICZKI_FABRYCZNE]: {
		heading: "Tabliczki fabryczne",
		description: lorem({count: 10}),
		photos: [tz1, tz2, tz3, tz4, tz5, tz6],
    methods: [
      {name: 'Anodowanie', href: '/anodowanie'},
      {name: 'Trawienie', href: '/trawienie'}
    ]
	},
	[ProductRoute.PANELE_STEROWNICZE]: {
		heading: "Panele sterownicze",
		description: lorem({count: 10}),
		photos: [tz1, tz2, tz3, tz4, tz5, tz6],
    methods: [
      {name: 'Anodowanie', href: '/anodowanie'},
      {name: 'Trawienie', href: '/trawienie'}
    ]
	},
	[ProductRoute.TABLICE_CZOLOWE_MASZYN]: {
		heading: "Tablice czolowe maszyn",
		description: lorem({count: 10}),
		photos: [tz1, tz2, tz3, tz4, tz5, tz6],
    methods: [
      {name: 'Anodowanie', href: '/anodowanie'},
      {name: 'Trawienie', href: '/trawienie'}
    ]
	},
	[ProductRoute.SKALE_LINIALY_SCHEMATY]: {
		heading: "Skale, linialy i schematy",
		description: lorem({count: 10}),
		photos: [tz1, tz2, tz3, tz4, tz5, tz6],
    methods: [
      {name: 'Anodowanie', href: '/anodowanie'},
      {name: 'Trawienie', href: '/trawienie'}
    ]
	},
	[ProductRoute.TABLICZKI_ROZNE]: {
		heading: "Tabliczki roznego typu",
		description: lorem({count: 10}),
		photos: [tz1, tz2, tz3, tz4, tz5, tz6],
    methods: [
      {name: 'Anodowanie', href: '/anodowanie'},
      {name: 'Trawienie', href: '/trawienie'}
    ]
	},
	[ProductRoute.TABLICE_INFORMACYJNE]: {
		heading: "Tablice informacyjne",
		description: lorem({count: 10}),
		photos: [tz1, tz2, tz3, tz4, tz5, tz6],
    methods: [
      {name: 'Anodowanie', href: '/anodowanie'},
      {name: 'Trawienie', href: '/trawienie'}
    ]
	},
	[ProductRoute.WYWIESZKI_ETYKIETY]: {
		heading: "Wywieszki i etykiety",
		description: lorem({count: 10}),
		photos: [tz1, tz2, tz3, tz4, tz5, tz6],
    methods: [
      {name: 'Anodowanie', href: '/anodowanie'},
      {name: 'Trawienie', href: '/trawienie'}
    ]
	},
	[ProductRoute.NUMERATORY]: {
		heading: "Numeratory",
		description: lorem({count: 10}),
		photos: [tz1, tz2, tz3, tz4, tz5, tz6],
    methods: [
      {name: 'Anodowanie', href: '/anodowanie'},
      {name: 'Trawienie', href: '/trawienie'}
    ]
	}
};