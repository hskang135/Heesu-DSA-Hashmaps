const HashMap = require('./hashmap');

function main() {
  const lotr = new HashMap();
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Ganbdolf");
  lotr.set("Human", "Aragon");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");

  //console.log(lotr.length); // 9
  //console.log(lotr._capacity); // 24
  //console.log(lotr.get('Maiar')); // Sauron
  //console.log(lotr.get('Hobbit')); // Frodo

};

// #1-1
// Maiar -> Sauron, Hobbit -> Frodo

// #1-2
// The capacity is at 24 because we have initial capacity of 8 and hashmap resized by multiplying that
// initial capacity by SIZE_RATIO of 3. So, I get 24 total.

main();


// #2
const WhatDoesThisDo = function(){
  let str1 = 'Hello World.'; // set str1 to 'Hello World'
  let str2 = 'Hello World.'; // set str2 to 'Hello World'
  let map1 = new HashMap(); // create new map1 hashmap
  map1.set(str1,10); // set key, value pair ('Hello World', 10)
  map1.set(str2,20); // set key, value pair ('Hello World', 20)
  let map2 = new HashMap(); // create another hashmap
  let str3 = str1; // set str3 to 'Hello World'
  let str4 = str2; // set str4 to 'Hello World'
  map2.set(str3,20); // set map2 value of 'Hello World'(str3) to 20
  map2.set(str4,10); // set map2 value of 'Hello World'(str4) to 10

  //console.log(map1.get(str1)); // 20
  //console.log(map2.get(str3)); // 10
}

WhatDoesThisDo();

// I think this function will get: 
// map1 = 20 because value was overwritten by map2.set(str3, 20)
// map2 = 10 because value was overwritten by map2.set(str4, 10)


// #3-1 Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length 11 using open addressing and 
// a hash function k mod m, where k is the key and m is the length.
// -> [22, 31, 4, 15, 28, 17, 88, 59, 10]

// #3-2 Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map with collisions resolved by separate chaining. 
// Let the hash table have a length m = 9, and let the hash function be k mod m.
// -> [null, 28, 19, 10, 20, 12, null, 5, 15, 33, 17, null]     (not sure??)


// #4
function removeDup(str) {
  const map = new Map();
  let newStr = '';

  for(let i=0; i<str.length; i++) {
    if(!map.has(str[i])) {
      newStr += str[i];
      map.set(str[i]);
    }
  }
  return newStr;
}

//console.log(removeDup('google')); // gole
//console.log(removeDup('google all that you think can think of')); // gole athyuinkcf


// #5


