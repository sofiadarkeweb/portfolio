console.log("hey");

const modal = document.getElementById("myModal");
// Get the button that opens the modal
const btn = document.querySelector(".myBtn");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const adjectives = ["Moody", "Delerious", "Crazy"];
const verbs = ["Ninja", "Doll", "Apple"];
const generatorBtn = document.querySelector(".generator-btn");
const nameOneText = document.querySelector(".name1");
const nameTwoText = document.querySelector(".name2");
const answerText = document.querySelector(".answer");

// eventlisterners
generatorBtn.addEventListener("click", generateName);

// generatorBtn.addEventListener("click", addAnswerText);

//functions
function generateName(){
    generatorBtn.style.color = "transparent";
    generatorBtn.style.fontSize = "50%";
    const nameOne = adjectives[Math.floor(Math.random()*adjectives.length)];
    nameOneText.innerText = nameOne;
    const nameTwo = verbs[Math.floor(Math.random()*verbs.length)];
    nameTwoText.innerText = nameTwo;
    const answer = ["Not you? Try again", "Fits perfect, no?"]
    answerText.innerText = answer[Math.floor(Math.random()*answer.length)];
    
    
    if (nameOne == nameTwo) {
        console.log('samma namn');
        generateName();
    }     
}

// function addAnswerText(){
//     const answer = "Not you?"
//     answerText.innerText = answer;
// }

// function changeButtonText(){
//     const generatorBtn = "Not you?"
//     generatorBtn.innerText.value = newButtonText;
// }

// changeButtonText();



// addAnswerText();