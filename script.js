// function changeColor(params) {
//     document.getElementById("main").style.background = "red";
// }
// let  firstEI = Number(document.getElementById("firstEI"))

// if (firstEI === 1) {
//     document.getElementById(firstE1).style.display = "block";
// }


// const objOne = {
//  name:"Aram",
//  lastName:"Artur",
// }

// console.log(objOne)
// console.log(objOne.lastName = "Xuskasyan")
// console.log(objOne);

// const user = {
//     name:"Artak",
//     lastName:"Xukasyan",
//     age:24,
//     city: "Vanadzor",
//     avatar:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonarchive.com%2Fshow%2Fdragon-soft-icons-by-artua%2Fuser-icon.html&psig=AOvVaw2o2z0GxXBOfRJVQJusVrgI&ust=1631526858950000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCJD66qiV-fICFQAAAAAdAAAAABAn"
// }
// document.getElementById("name").innerHTML = user.name;
// document.getElementById("lastName").innerHTML = user.lastName;
// document.getElementById("age").innerHTML = user.age;
// document.getElementById("city").innerHTML = user.city;

// առաջադրանք 1
var name="Karen";
    surName = "Xukasyan";
    age = "tariq";
    gender = "boy"

    if ( name !== gender){
        console.log("txa")
    } else (
        console.log("akjik")
    )
console.log(name,surName,age)


var name="Hamo";
    surName = "Papoyan";
    gender = "boy"

    if ( name !== gender){
        console.log("txa")
    } else (
        console.log("akjik")
    )
console.log(name,surName,age);


let name1 = "Mane";
    surName = "Mianasyan";
    age = 36;
    gender =  "girl";
console.log(name1, surName, age, gender);

let name2 = "Narine"
    surname = "Sionyan"
    age = 24
    gender = "Girl"
console.log(name2, surName, age, gender);

const name3 = "Alik"
    surname = "Papyan"
    age = 56
    gender = "body"
console.log(name3, surName, age, gender);

const name4 = "Vrej"
    surname4 = "Sionya"
    age = 24
    gender = "body"
console.log(name4, surName, age, gender);

// առաջադրանք 2

let car = {
    name: "BMW",
    model: "X6 M Sports",
    year: 2016
};
console.log(car)

let car1 = {
    name: "Mercedes-benz",
    model:"C-Class Sedan",
    year: 2020
}
console.log(car1)

const car3 = {
    name:"Audi",
    model:"RS 3 sedan",
    year:2013
}
console.log(car3)

//առաջադրանք 3
let salary = 1000;
let z = 1000 + 150;
console.log(z)
let n = 1150 - 115;
console.log(n) 
let m = 1035-190;
console.log(m)
let h = 845 / 2
console.log(h)

// առաջադրանք 4
// let  x = prompt("Keep some number?")
// if (x > 0) {
//     alert(x * 2 + 7)
// }

// let y = prompt("Write the sum of the received value  you will get the number you remembered")
// if (y > 0) {
//     alert(x)
// }



//առաջադրանք 1
let i = 1 
while ( i < 100) {
    i++
    console.log(i, "xndir1")
}

//1-ի 2 մաս

for( let n = 11; n <= 33; n++) {
    console.log(n, "1.1")
}

// առաջադրանք 2
for ( let m =2; m < 100;){
    m= m + 2;
    console.log(m, "xndir2")
}

// առաջադրանք 3

let num = 0
  for(let b=1; b<=100; b++ ){
    num=num+b
  }
console.log( "1-ic 100 tveri gumar@ =", num)

//առաջադրանք 4
let g = [1, 2, 3, 4, 5]
for (y= 0; y < 1; y++){
    console.log(g, "xndir4")
}

//առաջադրանք 5
let numbers= [2, 5, 9, 15, 0, 4, 6]
let odd_numbers = [];
for (let d = 0; d < numbers.length; d++) {
 if(numbers[d] > 3 &&  numbers[d] < 10 ) {
    odd_numbers.push(numbers[d])
 }
}

console.log(odd_numbers,  "xndir5")

let k=10