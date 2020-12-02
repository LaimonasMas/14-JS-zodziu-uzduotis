import { firstPText, secondPText, thirdPText } from "./numberOfSentences.js";


const alphabet = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
let letterCountP1 = 0;

function countLetterP1(sakinys) {
    for (let letter of firstPText) {
        if (alphabet.includes(letter)) {
        letterCountP1++;
        }
    }
    return letterCountP1;
}
const LetterNumberP1 = countLetterP1(firstPText);

let letterCountP2 = 0;

function countLetterP2(sakinys) {
    for (let letter of secondPText) {
        if (alphabet.includes(letter)) {
        letterCountP2++;
        }
    }
    return letterCountP2;
}
const letterNumberP2 = countLetterP2(secondPText);

let letterCountP3 = 0;

function countLetterP3(sakinys) {
    for (let letter of thirdPText) {
        if (alphabet.includes(letter)) {
        letterCountP3++;
        }
    }
    return letterCountP3;
}
const letterNumberP3 = countLetterP3(thirdPText);

const allLetterCount = LetterNumberP1 + letterNumberP2 + letterNumberP3;

export { allLetterCount }





