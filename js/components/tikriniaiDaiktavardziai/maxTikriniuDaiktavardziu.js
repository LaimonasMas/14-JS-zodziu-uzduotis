import { firstPText, secondPText, thirdPText } from "../numberOfSentences.js"

function WordCountP33(str) { 
    const b = str.split(" ");
    return b;
 }
WordCountP33(thirdPText);
 const arrayP3 = WordCountP33(thirdPText);
 let countCapitals = 0;
// kiekvieno zodzio pirmoji raide
 for (let i=0; i<arrayP3.length; i++) {
    console.log(arrayP3[i][0]);
    if (arrayP3[i][0] === '0' || arrayP3[i][0] === '1' || arrayP3[i][0] === '2' || arrayP3[i][0] === '3' || arrayP3[i][0] === '4' || arrayP3[i][0] === '5' || arrayP3[i][0] === '6' || arrayP3[i][0] === '7' || arrayP3[i][0] === '8' || arrayP3[i][0] === '9' || arrayP3[i][0] === '-') {
        countCapitals--;
    }

    if (arrayP3[i][0] === arrayP3[i][0].toUpperCase()) {
        countCapitals++
        console.log(true);
    }
 }
 console.log(countCapitals);