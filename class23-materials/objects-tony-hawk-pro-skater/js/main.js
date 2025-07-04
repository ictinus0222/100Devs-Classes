//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonyHawkProSkater (name, ability, level, superMove, taunt) {
    this.name = name;
    this.ability = ability;
    this.level = level;
    this.superMove = superMove;
    this.taunt = taunt;

    this.jump = function() {
        console.log(`SMOOTHHHHH OPERATORRR`);
    }

    this.tauntGesture = function() {
        console.log(`${this.taunt}`);
    }

    this.specialMoveGo = function () {
        console.log(`Don't make me use my ${this.superMove}`);
    }
}

let Tiger = new TonyHawkProSkater('Tiger', 'Multiple flips', 30, 'KA-ME-HA-ME-HAAAA', 'fuck you nigga');
