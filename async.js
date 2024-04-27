/* sync or async 
-sync -  all task go on main stack
           
       event loop check all task finished in mains stack so it can
       moved async task from queue to main stack..


- async -  all async task go in call back queue(side stack) and working behind the scene,  jis code ko chlne me time lagta hai use async task kehte hai. jaise settimeOut , set interval, promises fetch , api, url etc...
*/

// settimout

setTimeout(() => {
  console.log("i m a async");
}, 2000);

let count = 0;
const clearIntervall = setInterval(() => {
  count++;
  console.log("hi me 5 baar print hounga");
  if (count == 5) {
    clearInterval(clearIntervall);
  }
}, 3000);
//  -fetch api -  ye ya to hamare pass se se data lekar jayega ya data lekar aayega ye to aisa hai jasie kisi kabootar ko bhja ja beta chitti lekar aa.

fetch(`https://randomuser.me/api/`)
  .then((raw) => raw.json()) // ye data ko layega raw formate me or readable form me bana dega
  .then((res) => console.log(res.results[0].gender)); // yha is data per ham kaam kar skte hai

// - axios (or other http libararies ) - same work karta hai jaise fetch api , bas ye thora developer freindly hai isko use karne ke liye iska cdn axios ka cdn copy karo or script html m jake paste kar do then use karo  ek then bach jayaga use nahi karna padega
axios
  .get(`https://randomuser.me/api/`)
  .then((res) => console.log(res.data.results[0].email));

// - promises - ye janab ke anddar jo bhi code likhoge ye usko khud side stack yani call back que me lakar chle jayega or jab code resolve hoga is wo main stack me lakee aa jayega or chlega. ye aise hai jaise mene arslan ne mujse kha bhai khana manga lo mene kha thik hai or ek parcchi arslan ko de di or us per likh diya pending , pr rihan ko bjj diya khana lene ke liye ab rihan aakar kheta hai bhai khana nahi milea hai mene arslan se ki parci per update kar diya noo food (rejected )or mil jata to (resolved)
/*
  const parchi = new Promise(function (resolve, reject) {
    fetch(`https://randomuser.me/api/`)
      .then((raw) => raw.json())
      .then((res) => {
        if (res.results[0].gender === "male") resolve();
        else reject();
      });
  });
  parchi
    .then(() => console.log(`resolve aaaya`))
    .catch(() => console.log(`reject ho gaya`));*/

//   Callback function:- jab kisi function me koi function pss  kiya gaya ho pass kiya hua function hi callback function hai. ye sync or async dono per kaam kerta hai ......

function getData(url, callback) {
  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      callback(result);
    });
}

getData("https://randomuser.me/api/", function (result) {
  console.log(result.results[0].gender, result.results[0].email);
});
/*
  async aur await keywords JavaScript mein asynchronous programming ke liye istemal kiye jaate hain. Inka istemal tab hota hai jab kisi function ke andar ek ya multiple asynchronous operations ko handle karna hota hai. Yeh operations ho sakte hain jaise ki network requests, file operations, ya timers.
  
  async keyword ek function ko mark karta hai jo ek Promise ko return karta hai. Iska matlab hai ki agar function kuch asynchronous kaam karta hai, toh woh async keyword ke saath define kiya gaya hai. async keyword function ko yeh batata hai ki ismein await keyword istemal kiya ja sakta hai.
  
  await keyword ek asynchronous operation ka wait karta hai aur uske result ko return karta hai. await keyword sirf async functions ke andar hi istemal kiya ja sakta hai. Jab aap await ka istemal karte hain, toh aapka code execution us point tak ruk jata hai jab tak ki awaited operation complete nahi hoti.
  
  Jaise ki ye example dikhata hai:
  
  javascript
  Copy code
  async function fetchData() {
    // Asynchronous operation ko await karna
    const response = await fetch('https://api.example.com/data');
    // Await ke baad ke code execution tab tak wait karta hai jab tak response complete nahi hota
    const data = await response.json();
    // Response milne ke baad data ko process karna
    console.log(data);
  }
  
  fetchData();
  Is example mein fetchData() ek async function hai jo fetch() ko call karta hai. await keyword se fetch() ka response wait kiya jata hai. Jab response mil jata hai, uska JSON parse kiya jata hai. Fir data ko process kiya jata hai.*/
