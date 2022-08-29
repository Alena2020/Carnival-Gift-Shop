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
      console.log(`Here you go, one ${this.name}!`);
      tickets -= this.price; 
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
  let id = Number(input(`Enter the number of the gift you want to get:`));
  let gift = gifts.find(el => el.id === id);
  gift.buy();
  let index = gifts.findIndex(el => el.id === id);
  gifts.splice(index, 1);
  checkTickets();
}

function addTickets() {
  tickets += Number(input(`Enter the ticket amount:`));
  checkTickets();  
}

function checkTickets() {
  console.log(`Total tickets: ${tickets}`);
}

function showGifts() {
  console.log(`Here's the list of gifts:\n`);
  gifts.forEach( gift => {
    console.log(`${gift.id}- ${gift.name}, Cost: ${gift.price} tickets`)
  });
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
      console.log(`Wrong input`);
      break;
  }
  
}

  printWelcoming();
  showGifts();

while (!exitStatus) { 
  selectAction();
}