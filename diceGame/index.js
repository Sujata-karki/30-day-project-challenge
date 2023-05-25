const randomNumEl = Math.floor(Math.random()*6)+1 ;
const randomDiceEl = "dice" + randomNumEl + ".png";
const randomImgEl = `images\\` + randomDiceEl;

var image1 = document.querySelectorAll("img")[0];
console.log(image1);
image1.setAttribute("src" , randomImgEl);