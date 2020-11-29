import { firstPText, secondPText, thirdPText } from "./numberOfSentences.js"




function WordCountP1(str) { 
    return str.split(" ").length;
  }
console.log(WordCountP1(firstPText));

function WordCountP2(str) { 
    return str.split(" ").length;
  }
console.log(WordCountP2(secondPText));


function WordCountP3(str) { 
    for (let i=0; i<str.split(" ").length; i++) {
            console.log(str.split(" ")[i]);
        }
    return
}
  
WordCountP3(thirdPText);

const arrayP3 = WordCountP3(thirdPText);

console.log(arrayP3);

