/*

*DARBAS SU TEKSTAIS

Turime teksta (gali buti keli paragrafai).
Jame yra sakiniu.

Isspausdinti lentele:
- kiek yra paragrafu +
- kiek yra sakiniu + (kol kas vis dar blogai skaiciuoja del "g.")
- kiek yra zodziu +
- kiek yra tekstiniu simboliu (iskaitant tarpus) + 
- kiek yra raidziu +
- kiek yra skaiciu + 
- kiek yra tikriniu zodziu (ivardziai (vardas, pavarde) ir vietovardziai) +-
*/

import { numberParagraphs } from "./components/numberOfParagraphs.js";
import { totalSymbols } from "./components/numberOfTextSymbols.js";
import { kiekSkaiciuTekste } from "./components/howManyNumbersInTheText.js";
import { zodziuKiekisTekste } from "./components/numberOfWords.js";
import { totalSentences } from "./components/numberOfSentences.js";
import { allLetterCount } from "./components/numberOfLetters.js";
import { siunciam } from "./components/renderText.js";



console.log(`Tekste yra: 
${numberParagraphs} paragrafai,
${totalSentences} sakiniai,
${totalSymbols} tekstiniai simboliai,
${kiekSkaiciuTekste} skaičiai,
${zodziuKiekisTekste} žodžiai,
${allLetterCount} raidės,`);

