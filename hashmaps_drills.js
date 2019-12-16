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
// Maiar => Sauron, Hobbit => Frodo
// #1-2
// The capacity is at 24 because we have initial capacity of 8 and hashmap resized by multiplying that
// initial capacity by SIZE_RATIO of 3. So, I get 24 total.
main();


// #2
const WhatDoesThisDo = function(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1,10);
  map1.set(str2,20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3,20);
  map2.set(str4,10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
}

WhatDoesThisDo();

// I think this function will get: 
// map1 = 20 because value was overwritten by map2.set(str3, 20)
// map2 = 10 because value was overwritten by map2.set(str4, 10)


// #3
