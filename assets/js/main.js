let time = 0
let price = 0
const name = prompt('enter your name')
alert(`Hi ${name} Welcome to Disney`)

let attraction = prompt('which attraction do you want to go to? (roller coaster, horror labyrinth or go-kart)').toLowerCase()

while(attraction !='roller coaster' && attraction !='horror labyrinth' && attraction !='go-kart'){
    alert('that attraction is under maintenance')
    attraction = prompt('which attraction do you want to go to? (roller coaster, horror labyrinth or go-kart)').toLowerCase()
}
if(attraction == 'roller coaster'){
    price = 20
    time= 40
}else if(attraction == 'horror labyrinth'){
    price = 30
    time = 20
}else{
    price = 45
    time = 30
}

alert(`the total is ${price} and your waiting time is ${time} minutes`)

let money = prompt ('how much will you pay?')

while(money < price){
    alert('not enough money')
    money= prompt ('how much will you pay?')
}

let change = money - price
while(money > price){
    alert(`your payment is ${money} and his change is ${change} enjoy the attraction!!!`)
}
















