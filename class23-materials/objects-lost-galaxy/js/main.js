//Create a dog object that has four properties and three methods
let dog = {}

dog.breed = 'German Shepherd';
dog.color = 'Brown';
dog.legs = 4;
dog.speed = 'fast';
dog.name = 'Cooper'

dog.bark = function() {
    console.log('WOOOF!');
}

dog.fetch = function() {
    console.log('Woooosh!');
}

dog.bite = function() {
    console.log('Attack!!!');
}
