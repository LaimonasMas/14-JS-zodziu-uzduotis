import { firstPText, secondPText, thirdPText } from "./numberOfSentences.js"
import { kiekSkaiciuTekste, skaitmenuSkaiciusP1, skaitmenuSkaiciusP2, skaitmenuSkaiciusP3 } from "./howManyNumbersInTheText.js"


function WordCountP1(str) { 
    const b = str.split(" ");
    return b;
  }
const firstPArray = WordCountP1(firstPText);
const firstPArrayLength = firstPArray.length;


function WordCountP2(str) { 
    const b = str.split(" ");
    return b;
  }
const secondPArray = WordCountP2(secondPText);
const secondPArrayLength = secondPArray.length;


function WordCountP3(str) { 
   const b = str.split(" ");
   return b;
}
const thirdPArray = WordCountP3(thirdPText);
const thirdPArrayLength = thirdPArray.length;

const zodziuKiekisP1 = (firstPArrayLength - skaitmenuSkaiciusP1);
const zodziuKiekisP2 = (secondPArrayLength - skaitmenuSkaiciusP2);
const zodziuKiekisP3 = (thirdPArrayLength - skaitmenuSkaiciusP3);
const zodziuKiekisTekste = zodziuKiekisP1 + zodziuKiekisP2 + zodziuKiekisP3;

export { zodziuKiekisTekste }







