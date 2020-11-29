import { firstPText, secondPText, thirdPText } from "./numberOfSentences.js"


const p1 = /\d+/g;
const s1 = firstPText;
const skaitmenuSkaiciusP1 = s1.match(p1).length;

const p2 = /\d+/g;
const s2 = secondPText;
const skaitmenuSkaiciusP2 = s2.match(p2).length;

const p3 = /\d+/g;
const s3 = thirdPText;
const skaitmenuSkaiciusP3 = s3.match(p3).length;

const kiekSkaiciuTekste = skaitmenuSkaiciusP1 + skaitmenuSkaiciusP2 + skaitmenuSkaiciusP3;

export { kiekSkaiciuTekste, skaitmenuSkaiciusP1, skaitmenuSkaiciusP2, skaitmenuSkaiciusP3 }