class Character {
   constructor(name, role, power) {
      this.name = name
      this.role = role
      this.power = power
      this.health = 10000

      // console.log('karakter olusturuldu')
   }

   tellYourName() {
      console.log(`benim adım ${this.name}`)
   }
}

class Mage extends Character {
   constructor(name, role, power, magicPower) {
      super(name, role, power)
      this.magicPower = magicPower
   }

   castSpell() {
      let rand = Math.round(Math.random() * this.power);
      document.getElementById("h3").innerHTML=rand
      console.log(`${rand} kadar büyü hasarı attım`)
   }
}

class Warrior extends Character {
   constructor(name, role, power, battlePower) {
      super(name, role, power)
      this.battlePower = battlePower
   }

   swingSword() {
      let rand = Math.round(Math.random() * this.power);
       document.getElementById("h3").innerHTML=rand
      // document.getElementById("${rand}").innerHTML = " Merhaba JavaScript";
      console.log(`${rand} kadar fiziksel hasar attım`)

      // document.getElementById("this.power ").innerHTML="vurus";
   }
}

// class Archer extends Character {
//    constructor(name, role, power, shot) {
//       super(name, role, power)
//       this.shot = shot
//    }

//    shootingarrows() {
//       let rand = Math.round(Math.random() * this.power);
//       console.log(`${rand} kadar ok hasarı attım`)

//    }








function createCharacter(charname, charclass, charpower) {

   //console.log(charname, charclass, charpower)

   if (charclass === 'buyucu') {
      let mage = new Mage(charname, charclass, charpower)
      //console.log('büyücü olusturuldu... adı: ' + mage)
      mage.tellYourName()
      mage.castSpell()
   }
   else if (charclass === 'savascı') {
      let warrior = new Warrior(charname, charclass, charpower)
      //console.log('savascı olusturuldu... adı: ' + warrior)
      warrior.tellYourName()
      warrior.swingSword()
   }

   // else (charclass === 'okcu') {
   //    1
   //    let archer = new Archer(charname, charclass, charpower)
   //    //console.log('savascı olusturuldu... adı: ' + warrior)
   //    archer.tellYourName()
   //    archer.shootingarrows()
   // }

   else {
     console.log('gecersiz giris')
     document.querySelector('.hero-form').innerHTML += '<span style="color:red; font-size: 20px;" id="error">gecersiz giris</span>'
     setTimeout(()=> {
      document.querySelector('#error').innerHTML = ''
     }, 2000)
   }
}

function getCharStats() {
   let charName = document.getElementById('_name').value
   let charClass = document.getElementById('_class').value
   let charPower = document.getElementById('_power').value

   createCharacter(charName, charClass, charPower)
}

// document.getElementById("h3").innerHTML=${rand}


