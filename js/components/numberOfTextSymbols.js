import { DOM } from "../data/data.js"

const firstP = document.querySelectorAll('.first');
const secondP = document.querySelectorAll('.second');
const thirdP = document.querySelectorAll('.third');
const firstPLength = firstP[0].innerHTML.length;
const secondPLength = secondP[0].innerHTML.length;
const thirdPLength = thirdP[0].innerHTML.length;
const totalSymbols = firstPLength + secondPLength + thirdPLength;

console.log(totalSymbols);


export { totalSymbols }