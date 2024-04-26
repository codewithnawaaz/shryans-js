// *******************THIS********************//

// globle me this ki value hoti hai window
console.log(this);
// function mai m bhi this ki value window hoti hai
const fnc = function () {
  console.log(this);
};
fnc();
//object m jo method hoga usme this ki value object hoga
const obj = {
  name: "adil",
  age: 18,
  fnc: function () {
    console.log(this.age);
  },
};
obj.fnc();
console.log(obj.age); // this obj ko refer ker rha hai,...is case mai

// fnc inside method in es5 is - window// samsya thi es5 me
const obj1 = {
  name: "adil",
  age: 18,
  sayName: function () {
    function childFnc() {
      console.log(this);
    }
    childFnc();
  },
};

obj1.sayName();
/////***************** */
// fnc inside method in es6 is - obj
const objES6 = {
  name: "adil",
  age: 18,
  sayName: function () {
    //arrow fnc use kare agar es6
    const child = () => {
      console.log(this.name); //"adil" ayega is case me
    };
    child();
  },
};
objES6.sayName();
//************** */
// constructor function m this ki value hoti hai blank obj

function add() {
  console.log(this);
}
const blankObj = new add(); // kisi bhi function ke aage new likhe se wo ek blank obj banata hai
// or this usi ko represent karta hai or new laga kar ek blank obj banane ko hi constructor function kehte hai

// event listner per this ki value jis per event listner laga ho
// document.querySelector("button").addEventListener("click", function () {
//   console.log(this);
// });

// *******************constructor function********************//
// agar aisa jo this ka upyog kar rha ho ho or naye naye baj bana kar deta hai to use ham condtructor function kehte hai.or ha wo new se invoke ho rha ho.
//

function fnc1(name, age) {
  this.name = name;
  this.age = age;
}

const objCreated1 = new fnc1("adil", 29);
console.log(objCreated1);
// jha bhi new word aa jaye to smjh lo ki ek naya obj ban gaya or wo this ko represent karta hai new=this
// ***************prototypel inheritence*********//
// parent constructor function ke prototype me kuch add karna or wo property ka instances sabhi child ko mil jana hai inheritance kehlata hai kul mila ke kuch method ko constructor m protoype ke saath rhkhe to memory bachegi..

function makeHuman(name, age) {
  this.name = name;
  this.age = age;
  //   this.printMyname = function () {
  //     this.name;
  //   };
}
makeHuman.prototype.printMyname = function () {
  console.log(this.name);
};
const human = new makeHuman("adil", 29);

//  call , applly ,  bind

// call apply or bind ka use this ki value change karne ke liye hota hai,
// CALL
const objj = {
  name: "adil",
  age: 12,
};

function koiBhi() {
  console.log(this); // abhi this ki value window hai by default lekin ham chate hai ki this ki value objj .call ka use karna hoga
}

koiBhi.call(objj);
//APPLY
// .apply me 2nd arg array hota hai

function sum(a, b) {
  console.log(a + b);
}
const arr = [1, 2];
sum.apply(null, arr); //null isliye pass kiya kyunki koi objnhi tha

//.bind call ki thrah kaam karta hai likin ye ek function return karta hai
const person = { name: "John" };
function greet() {
  console.log("Hello, " + this.name);
}
const greetPerson = greet.bind(person);
greetPerson(); // Output: Hello, John

// RETURN kya hota hai smjho
/*Ji haan, bilkul! Jab aap ek function ko call karte hain jo `return` statement ke saath hai, us function ke andar jo bhi value `return` statement ke baad di gayi hai, woh value function ke call ke jagah par pahunch jati hai. Jaise agar aap ek function likhte hain jo do numbers ko add karta hai:

```javascript
function add(a, b) {
  return a + b;
}
```

Aur phir is function ko call karte hain:

```javascript
var result = add(2, 3);
```

Toh `result` variable mein `2 + 3` ka result, yaani `5`, store ho jayega.*/

// closures

/*when a function return a function ans use a variable from its lexical scope called clouseres and holds its value*/

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
let a = counter(); // `a` now holds the returned inner function, forming a closure
a();
a();
//   event deligation

/*Event delegation ka matlab hai ki jab aapko bahut saare elements par events handle karne hote hain, toh aap un sabhi elements ke liye alag-alag event handlers attach karne ke bajaye un sabhi ke ek common parent element par ek hi event handler attach karte hain. Yeh technique performance improve karne mein madad karta hai aur dynamically create kiye gaye ya phir bahut saare elements ke liye event handling ko manage karne mein asaan banata hai.*/
const parent = document.querySelector("#parent");
parent.addEventListener("click", function (e) {
  //   if (e.target.id === "play") {
  //     console.log("songs play");
  //   } else if (e.target.id === "pause") {
  //     console.log("songs pause");
  //   }
});

// higher order function -- koi function agar kisi function ko as parameter accept karta hai higher order function kehltata hai
//  for each , set time out ... orignal array unchanged

const arr1 = [1, 2, 3, 4, 5, 6, 7];

arr1.forEach(function (val, i, arr) {
  console.log(`  ${i}. ${val * 2}  `);
});
// **********TRY AND CATH

function ab(a, b) {
  try {
    if (b === 0) {
      throw Error(" 0  cant divide a it is infinte");
    } else {
      console.log(a / b);
    }
  } catch (err) {
    console.error(err);
  }
}

ab(1, 0);
ab(1, 1);
