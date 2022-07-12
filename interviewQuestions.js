const carOne = {
  color: 'blue',
  status: {
    running: true,
    passengers: 4,
    wiperFluid: 'empty'
  },
  age: 5,
  miles: 50000,
  value: '8000'
}

const carTwo = {
  color: 'green',
  status: {
    running: 'yes',
    passengers: 2,
    fuelTank: 'empty'
  },
  value: 9000
}

const combinedCar = {
...carOne,
...carTwo
}


const myMoney = {
  quarters: 4,
  dimes: 10,
  nickels: 20,
  pennies: 100
}

for (const coin of myMoney){
  console.log(`${coin}: ${myMoney[coin]}`);
}