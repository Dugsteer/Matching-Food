// LOADER, SIDEBAR and ABOUT INFO
const sidey = document.getElementById('sidebar');
const loader = document.getElementById("loaderDiv");
const extra = document.getElementById('info');
const mainpic = document.getElementById('mainpic');
const blue = window.matchMedia("(max-width: 800px)");

//Change Intropic

function changeBoy(){
  switch (mainpic.innerHTML){
    case '<img src="img/Boy/boy1.png">':
    mainpic.innerHTML = '<img src="img/Boy/boy2.png">';
    break;
    case '<img src="img/Boy/boy2.png">':
    mainpic.innerHTML = '<img src="img/Boy/boy3.png">';
    break;
    case '<img src="img/Boy/boy3.png">':
    mainpic.innerHTML = '<img src="img/Boy/boy4.png">';
    break;
    case '<img src="img/Boy/boy4.png">':
    mainpic.innerHTML = '<img src="img/Boy/boy5.png">';
    break;
    default: mainpic.innerHTML = '<img src="img/Boy/boy1.png">';
  }
}


// Say "Cool"
// function coolKid(){
//   const coolkid = new Audio('sounds/cool.mp3');
//   coolkid.play();
// }

// Show and hide about info
function show(){info.classList.toggle('xxc');};
function unshow(){info.classList.remove('xxc');};

//Center the loader wherever the page is
function checkForTop (){loader.style.top = (window.pageYOffset) + "px";}
checkForTop();

//Manage the loader
function stopLoader() {loader.classList.add("stop");}
function startLoader(){loader.classList.remove("stop"); setTimeout(stopLoader, 1000);}
setTimeout(stopLoader, 1000);

//Stop the sidebar appearing on small screens with matchmedia
function myFunction(x) {if (blue.matches) {sidey.classList.remove("block");}}
function toggler() {sidey.classList.toggle("block");}
myFunction(blue);

//GAME FUNCTIONALITY
// There are three different sets of words/images used in the game
const firstSet = document.getElementById("set1");
const secondSet = document.getElementById("set2");
const thirdSet = document.getElementById("set3");

// These are the other DOM elements
const instructions = document.getElementById("instructions");
const gameContainer = document.getElementById("game-tiles");
const sideBar = document.getElementById("sidebar");

// Each image and word in a set array has the same data-framework number, in order to check for pairs.
// The data-name is a string, which can be used in the second case as innerHTML.
const set1 = [
  { number: "1", name: "belt" },
  { number: "1", name: "<img src = 'img/belt.png' alt='belt' class='image'>" },
  { number: "2", name: "boots" },
  {
    number: "2",
    name: "<img src = 'img/boots.png' alt='boots' class='image'>",
  },
  { number: "3", name: "cap" },
  { number: "3", name: "<img src = 'img/cap.png' alt='cap' class='image'>" },
  { number: "4", name: "dress" },
  {
    number: "4",
    name: "<img src = 'img/dress.png' alt='dress' class='image'>",
  },
  { number: "5", name: "flip-flops" },
  {
    number: "5",
    name: "<img src = 'img/flipflops.png' alt='flip-flops' class='image'>",
  },
  { number: "6", name: "gloves" },
  {
    number: "6",
    name: "<img src = 'img/gloves.png' alt='gloves' class='image'>",
  },
  { number: "7", name: "hat" },
  { number: "7", name: "<img src = 'img/hat.png' alt='hat' class='image'>" },
  { number: "8", name: "hoodie" },
  {
    number: "8",
    name: "<img src = 'img/hoodie.png' alt='hoodie' class='image'>",
  },
];
const set2 = [
  { number: "9", name: "jacket" },
  {
    number: "9",
    name: "<img src = 'img/jacket.png' alt='jacket' class='image'>",
  },
  { number: "10", name: "jeans" },
  {
    number: "10",
    name: "<img src = 'img/jeans.png' alt='jeans' class='image'>",
  },
  { number: "11", name: "jumper" },
  {
    number: "11",
    name: "<img src = 'img/jumper.png' alt='jumper' class='image'>",
  },
  { number: "12", name: "pyjamas" },
  {
    number: "12",
    name: "<img src = 'img/pyjamas.png' alt='pyjamas' class='image'>",
  },
  { number: "13", name: "raincoat" },
  {
    number: "13",
    name: "<img src = 'img/raincoat.png' alt='raincoat' class='image'>",
  },
  { number: "14", name: "sandals" },
  {
    number: "14",
    name: "<img src = 'img/sandals.png' alt='sandals' class='image'>",
  },
  { number: "15", name: "scarf" },
  {
    number: "15",
    name: "<img src = 'img/scarf.png' alt='scarf' class='image'>",
  },
  { number: "16", name: "shirt" },
  {
    number: "16",
    name: "<img src = 'img/shirt.png' alt='shirt' class='image'>",
  },
];
const set3 = [
  { number: "17", name: "shoe" },
  { number: "17", name: "<img src = 'img/shoe.png' alt='shoe' class='image'>" },
  { number: "18", name: "skirt" },
  {
    number: "18",
    name: "<img src = 'img/skirt.png' alt='skirt' class='image'>",
  },
  { number: "19", name: "socks" },
  {
    number: "19",
    name: "<img src = 'img/socks.png' alt='socks' class='image'>",
  },
  { number: "20", name: "trainer" },
  {
    number: "20",
    name: "<img src = 'img/trainer.png' alt='trainers' class='image'>",
  },
  { number: "21", name: "trousers" },
  {
    number: "21",
    name: "<img src = 'img/trousers.png' alt='trousers' class='image'>",
  },
  { number: "22", name: "t-shirt" },
  {
    number: "22",
    name: "<img src = 'img/tshirt.png' alt='tshirt' class='image'>",
  },
  { number: "23", name: "umbrella" },
  {
    number: "23",
    name: "<img src = 'img/umbrella.png' alt='umbrella' class='image'>",
  },
  { number: "24", name: "jacket" },
  {
    number: "24",
    name: "<img src = 'img/jacket.png' alt='jacket' class='image'>",
  },
];

// By Default the game plays set1
playGame(set1);

// In the sidebar, different sets can be chosen by clicking
firstSet.addEventListener("click", () => {
  startLoader();
  gameContainer.innerHTML = "";
  pageTitle.textContent = "ANIMAL MATCH: SET 1";
  playGame(set1);
});

secondSet.addEventListener("click", () => {
  startLoader();
  gameContainer.innerHTML = "";
  pageTitle.textContent = "ANIMAL MATCH: SET 2";
  playGame(set2);
});

thirdSet.addEventListener("click", () => {
  startLoader();
  gameContainer.innerHTML = "";
  pageTitle.textContent = "ANIMAL MATCH: SET 3";

  playGame(set3);
});

// PLAY THE GAME
// SHUFFLE THE GAME ARRAY for the chosen SET 1, 2 or 3.
function playGame(array) {
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  // call the shuffle function & assign the array to "contents"
  shuffle(array);
  let contents = array;

  // Create 16 Playing cards by using forEach on the array contents.
  contents.forEach((data, index) => createCard(data, index));

  // Call the createCard function turn the cards into DIV elements.
  function createCard(data, index) {
    let card = document.createElement("div");
    // Add a classname so the cards can be styled with CSS
    card.classList.add("card");
    //  Include the data-famework (data.number) of the cards so they can be checked plus the necessary HTML.

    card.innerHTML = `<div class="memory-card" tabindex=0 data-framework="${data.number}"><div class="front-face">${data.name}</div><div class="back-face"><img src = "img/clothesBG.png" alt="picture of a basket of food" class="imgBg smaller" id="imgBg"></div></div>`;

    // Append the card divs to the game container so they appear on the page.
    gameContainer.appendChild(card);
  }

  // Select all instances of the class 'memory-card' and assign it to a constant
  const cards = document.querySelectorAll(".memory-card");

  // Set the initial boolean conditions to make the game work
  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  // Prevent card flipping, add the 'flip' CSS class to flip the card if it's alright to do so.
  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    // Allowing two cards to be flipped and calling the check function
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;

    checkForMatch();
  }

  // The check function
  function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
      return;
    }

    unflipCards();
  }

  // Make pairs vanish by killing their innerHTML
  function disableCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.innerHTML = "";
      secondCard.innerHTML = "";
      resetBoard();
    }, 1000);
  }

  // Unflip cards if they don't match by removing the flip class.
  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetBoard();
    }, 1000);
  }

  // Set the board to continue the game, setting the constants to their original state
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  // Event listener added to the cards
  cards.forEach((card) => card.addEventListener("click", flipCard));


}