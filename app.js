const pokemonWriteElement = document.getElementById("pokemon-names");

class Pokemon {
  constructor(name) {
    this.name = name;
    this.health = 10000;
  }

  logName() {
    console.log(`This pokemon's name is: ${this.name}`);
  }

  appendNameToHtml(htmlElement) {
    htmlElement.innerHTML += `<p>${this.name}</p>`;
  }
}

// function createCharacter(charname, charclass, charpower) {
//   //console.log(charname, charclass, charpower)

//   if (charclass === "buyucu") {
//     let mage = new Mage(charname, charclass, charpower);
//     //console.log('büyücü olusturuldu... adı: ' + mage)
//     mage.tellYourName();
//     mage.castSpell();
//   } else if (charclass === "savascı") {
//     let warrior = new Warrior(charname, charclass, charpower);
//     //console.log('savascı olusturuldu... adı: ' + warrior)
//     warrior.tellYourName();
//     warrior.swingSword();
//   }

// function createCharacter(charname, charclass, charpower) {
//   //console.log(charname, charclass, charpower)

//   if (charclass === "buyucu") {
//     let mage = new Mage(charname, charclass, charpower);
//     //console.log('büyücü olusturuldu... adı: ' + mage)
//     mage.tellYourName();
//     mage.castSpell();
//   } else if (charclass === "savascı") {
//     let warrior = new Warrior(charname, charclass, charpower);
//     //console.log('savascı olusturuldu... adı: ' + warrior)
//     warrior.tellYourName();
//     warrior.swingSword();
//   }

//   // else (charclass === 'okcu') {
//   //    1
//   //    let archer = new Archer(charname, charclass, charpower)
//   //    //console.log('savascı olusturuldu... adı: ' + warrior)
//   //    archer.tellYourName()
//   //    archer.shootingarrows()
//   // }
//   else {
//     console.log("gecersiz giris");
//     document.querySelector(".hero-form").innerHTML +=
//       '<span style="color:red; font-size: 20px;" id="error">gecersiz giris</span>';
//     setTimeout(() => {
//       document.querySelector("#error").innerHTML = "";
//     }, 2000);
//   }
// }

// function getCharStats() {
//   let charName = document.getElementById("_name").value;
//   let charClass = document.getElementById("_class").value;
//   let charPower = document.getElementById("_power").value;

//   createCharacter(charName, charClass, charPower);
// }

async function fetchAllPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const json = await res.json();

  const pokemons = json.results;

  const pokemonClasses = [];

  pokemons.forEach((pokemon) => {
    pokemonClasses.push(new Pokemon(pokemon.name));
  });

  const randomPokemon =
    pokemonClasses[Math.floor(Math.random() * pokemonClasses.length)];
  randomPokemon.appendNameToHtml(pokemonWriteElement);
}

fetchAllPokemons();

const pokemonpowerWriteElement = document.getElementById("pokemon-power");

class pokemonPower {
  constructor(power) {
    this.power = power;
    this.health = 10000;
  }

  logName() {
    console.log(`This pokemon's power is: ${this.power}`);
  }

  appendNameToHtml(htmlElement) {
    htmlElement.innerHTML += `<p>${this.power}</p>`;
  }

}

let random = Math.floor(Math.random() * 500 + 1);
// let random =Math.floor(Math.random()  * health- 500 + 1);
const randomPower = ` ${random}`;
document.getElementById('h3').innerHTML = random;

// document.getElementById("pokemon-power").innerHTML = "pokemon power";
// document.getElementById(pokemonPower);

console.log(random);

// 1-Tek bir class oluşturup bütün karakterleri ordan çekmek.
// 2-
