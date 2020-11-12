console.log("hey");

const popUp1 = document.getElementById("myPopUp1");
const popUp2 = document.getElementById("myPopUp2");
const popUpBlack = document.getElementById("myPopUpBlackBox");
// Get the button that opens the modal
const projectBtn = document.querySelector(".myProjectBtn");
const projectBtn2 = document.querySelector(".myProjectBtn2");
const hamburgerBtn = document.querySelector(".hamburgerBtn");
const hamburgerBtnMobile = document.querySelector(".hamburgerBtnMobile");
// Get the <span> element that closes the modal
const span1 = document.getElementsByClassName("close1")[0];
const span2 = document.getElementsByClassName("close2")[0];
const span3 = document.getElementsByClassName("close3")[0];



// When the user clicks on the button, open the modal
projectBtn.onclick = function() {
    popUp1.style.display = "block";
}
projectBtn2.onclick = function() {
    popUp2.style.display = "block";
}
hamburgerBtn.onclick = function() {
    popUpBlack.style.display = "block";
    // hamburgerBtn.style.display = "none";
}
hamburgerBtnMobile.onclick = function() {
    popUpBlack.style.display = "block";
    console.log("popup");
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    popUp1.style.display = "none";
}
span2.onclick = function() {
    popUp2.style.display = "none";
}
span3.onclick = function() {
    popUpBlack.style.display = "none";
    // hamburgerBtn.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == popUp1) {
    popUp1.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == popUp2) {
    popUp2.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == popUpBlack) {
    popUpBlack.style.display = "none";
  }
}

const adjectives = ["Moody", "Delerious", "Crazy", "Cute", "Sad", "Fishy"];
const verbs = ["Ninja", "Doll", "Cat", "Boi", "Hippo"];
const generatorBtn = document.querySelector(".generator-btn");
const nameOneText = document.querySelector(".name1");
const nameTwoText = document.querySelector(".name2");
const answerText = document.querySelector(".answer");
const yellowBox = document.querySelector('.box5')
// eventlisterners
yellowBox.addEventListener("click", generateName);

// generatorBtn.addEventListener("click", addAnswerText);

//functions
function generateName(e){
    console.log(e.target)
    generatorBtn.style.color = "transparent";
    generatorBtn.style.fontSize = "0%";
    const nameOne = adjectives[Math.floor(Math.random()*adjectives.length)];
    nameOneText.innerText = nameOne;
    const nameTwo = verbs[Math.floor(Math.random()*verbs.length)];
    nameTwoText.innerText = nameTwo;
    const answer = ["Not you? Try again", "Fits perfect, no?", "Really? CLick again", "That is soo you!"]
    answerText.innerText = answer[Math.floor(Math.random()*answer.length)];
    
    
    if (nameOne == nameTwo) {
        console.log('samma namn');
        generateName();
    }     
}

