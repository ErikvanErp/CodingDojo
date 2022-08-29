class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
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

const ninja1 = new Ninja("Hyabusa", 50);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

