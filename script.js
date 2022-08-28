let gifts = [
  {name: 'Teddy Bear', price: '10', id: '1'},
  {name: 'Big Red Ball', price: '5', id: '2'},
  {name: 'Huge Bear', price: '50', id: '3'},
  {name: 'Candy', price: '8', id: '4'},
  {name: 'Stuffed Tiger', price: '15', id: '5'},
  {name: 'Stuffed Dragon', price: '30', id: '6'},
  {name: 'Skateboard', price: '100', id: '7'},
  {name: 'Toy Car', price: '25', id: '8'},
  {name: 'Basketball', price: '20', id: '9'},
  {name: 'Scary Mask', price: '75', id: '10'}
];

function printWelcoming() {
  console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!`);
}

function printGifts() {
  console.log(`Here's the list of gifts:\n`);
  gifts.forEach( gift => {
    console.log(`${gift.id}- ${gift.name}, Cost: ${gift.price} tickets`)
  });
}

printWelcoming();
printGifts();