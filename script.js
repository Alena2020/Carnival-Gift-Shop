let input = require('sync-input');
let tickets = 0;
let exitStatus = false;

class Gift {
    constructor(name, price, id) {
        this.name = name;
        this.price = price;
        this.id = id;
    }

    buy() {
      if (tickets >= this.price) {
        console.log(`Here you go, one ${this.name}!`);
        tickets -= this.price;        
      } else {
        console.log(`You don't have enough tickets to buy this gift.`);        
      }       
    }
}

let gifts = [
  new Gift("Teddy Bear", 10, 1),
  new Gift("Big Red Ball", 5, 2),
  new Gift("Huge Bear", 50, 3),
  new Gift("Candy", 8, 4),
  new Gift("Stuffed Tiger", 15, 5),
  new Gift("Stuffed Dragon", 30, 6),
  new Gift("Skateboard", 100, 7),
  new Gift("Toy Car", 25, 8),
  new Gift("Basketball", 20, 9),
  new Gift("Scary Mask", 75, 10),
];

function printWelcoming() {
  console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!`);
}

function buyGift() {  
  if (gifts.length == 0) {
    console.log(`Wow! There are no gifts to buy.`);
  } else {
    let id = Number(input(`Enter the number of the gift you want to get:`));
    if (isNaN(id)) {
      console.log(`Please enter a valid number!`);
    } else if (id > 10) {
      console.log(`There is no gift with that number!`);
    } else {
    let gift = gifts.find(el => el.id === id);
    gift.buy();
    let index = gifts.findIndex(el => el.id === id);
    gifts.splice(index, 1);
    checkTickets();
    }
  }
}

function addTickets() {
  let amountTickets = Number(input(`Enter the ticket amount:`));
  if (isNaN(amountTickets) ) {
    console.log(`Please enter a valid number between 0 and 1000.`);
  } else if (amountTickets < 0 || amountTickets > 1000) {
    console.log(`Please enter a valid number between 0 and 1000.`);
  } else {
    tickets += amountTickets;
    checkTickets(); 
  } 
}

function checkTickets() {
  console.log(`Total tickets: ${tickets}`);
}

function showGifts() {
  console.log(`Here's the list of gifts:\n`);
    if (gifts.length == 0) {
    console.log(`Wow! There are no gifts to buy.`);
  } else {
    gifts.forEach( gift => {
      console.log(`${gift.id}- ${gift.name}, Cost: ${gift.price} tickets`)
    });
  }
}

function printMessage() {
  console.log(`Have a nice day!`);
  console.log(`\nProcess finished with exit code 0`);  
}

function selectAction() {
  let action = Number(input(`\nWhat do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop`));

  switch (action) {
    case 1:
      buyGift();        
      break;

    case 2:
      addTickets();       
      break;

    case 3:
      checkTickets();      
      break;

    case 4:
      showGifts();   
      break;
    
    case 5:
      printMessage();
      exitStatus = true;
      break;
  
    default:
      console.log(`Please enter a valid number!`);
      break;
  }
  
}

  printWelcoming();
  showGifts();

while (!exitStatus) { 
  selectAction();
}