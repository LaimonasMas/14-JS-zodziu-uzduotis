import { DOM, firstP, secondP, thirdP }  from "../data/data.js"

const firstPText = firstP[0].innerHTML;
const secondPText = secondP[0].innerHTML
const thirdPText = thirdP[0].innerHTML

function wordCountP1(str) {
    let sentences = 0;
    for (let i=0; i<str.length; i++) {
        if (str[i] === '.' || str[i] === '!' || str[i] === '?') {
            sentences += 1;
        }
    }
    return sentences;
}

function wordCountP2(str) {
    let sentences = 0;
    for (let i=0; i<str.length; i++) {
        if (str[i] === '.' || str[i] === '!' || str[i] === '?') {
            sentences += 1;
        }
    }
    return sentences;
}
/* blogai skaiciuoja "g."*/
function wordCountP3(str) {
    let sentences = 0;
    for (let i=0; i<str.length; i++) {
        if (str[i] === '.' || str[i] === '!' || str[i] === '?') {
            sentences += 1;
        }
    }
    return sentences;
}

const totalSentences = wordCountP1(firstPText) + wordCountP2(secondPText) + wordCountP3(thirdPText);


export { firstPText, secondPText, thirdPText, totalSentences }








