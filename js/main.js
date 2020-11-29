/*

*DARBAS SU TEKSTAIS

Turime teksta (gali buti keli paragrafai).
Jame yra sakiniu.

Isspausdinti lentele:
- kiek yra paragrafu +
- kiek yra sakiniu
- kiek yra zodziu +
- kiek yra tekstiniu simboliu (iskaitant tarpus) + 
- kiek yra raidziu
- kiek yra skaiciu + 
- kiek yra tikriniu zodziu (ivardziai (vardas, pavarde) ir vietovardziai)
*/

import { numberParagraphs } from "./components/numberOfParagraphs.js";
import { totalSymbols } from "./components/numberOfTextSymbols.js";
import { kiekSkaiciuTekste } from "./components/howManyNumbersInTheText.js";
import { zodziuKiekisTekste } from "./components/numberOfWords.js";

console.log(`Tekste yra: 
${numberParagraphs} paragrafai, 
${totalSymbols} tekstiniai simboliai,
${kiekSkaiciuTekste} skaičiai,
${zodziuKiekisTekste} žodžiai,`);

