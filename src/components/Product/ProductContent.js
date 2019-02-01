import * as lorem from 'lorem-ipsum';

const tz1 = {src: 'http://tabliczki-znamionowe.eu/images/thumbs/big/wytl3.jpg'};
const tz2 = {src: 'https://oznacznik.com.pl/images/fullsizeoutput_3681.jpg'};
const tz3 = {src: 'https://www.grawernia.pl/galerie/t/tabliczka-znamionowa-wym_3111.jpg'};
const tz4 = {src: 'https://www.sangraf.pl/Files/images/tabliczki%20znamionowe/Tabliczka-znamionowa-samoprzylepna-1.jpg'};
const tz5 = {src: 'https://www.grawernia.pl/galerie/t/tabliczka-znamionowa-z-a_4622.jpg'};
const tz6 = {src: 'http://www.atic.com.pl/tabliczki-znamionowe/d/zastepcza-tabliczka-znamionowa2.jpg'};

export const productContent = {
  'tabliczki-znamionowe': {
    heading: "Tabliczki znamionowe",
    description: lorem({count: 10}),
    photos: [tz1, tz2, tz3, tz4, tz5, tz6],
    features: {
      adv: ['Niska cena', 'Niski czas'],
      dAdv: ['Slaby produkt']
    }

  }
};