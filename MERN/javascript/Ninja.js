class Ninja {
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    
    sayName() {
        console.log(this.name);        
    }
    showStats(){
        console.log(`name: ${ this.name }, strength: ${ this.strength }, speed: ${ this.speed }, health: ${ this.health }.`);
    }
    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("You can't always get what you want.")
    }
}

const ninja1 = new Ninja("Hyabusa", 50);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "name: Master Splinter, strength: 10, speed: 10, health: 210."



