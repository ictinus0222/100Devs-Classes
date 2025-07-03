//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighterChar (charName, charStrength, charAbility, charLevel, powerMove) {
this.name = charName,
this.strength = charStrength,
this.ability = charAbility,
this.level = charLevel,
this.powerMove = powerMove,

this.evolve = function() {
    console.log('UPGRADED TO SUPER SAIYAAN!!!');
}

this.sleep = function () {
    console.log('RESTING..........');
}
this.taunt = function( ) {
    console.log(`YOU CAN'T HANDLE MY ${powerMove}!!!`);
}
}

let Goku = new StreetFighterChar('Goku', 10000, 'Super-Dash', 20, 'Ka-me-ha-me-ha');