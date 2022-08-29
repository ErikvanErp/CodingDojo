class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target){
        if(target instanceof Unit){
            target.resilience -= this.power;
        } else {
            console.log("Target is not a Unit")
        }
        return this;
    }
}

class Effect extends Card{
    constructor(name, cost, stat, magnitude){
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
        this.text = (this.magnitude >= 0 ? "increase" : "decrease") 
                    + " target's " +  this.stat + " by " 
                    + (this.magnitude >= 0 ? this.magnitude : - this.magnitude);
    }

    play(target){
        if(! target instanceof Unit){
            console.log("Target is not a Unit");
            return this;
        }
        if (this.stat == "resilience") {
            target.resilience += this.magnitude;
        }
        else if (this.stat == "power") {
            target.power += this.magnitude;
        } 
        else {
            console.log(`Effect has an invalid stat: ${ this.stat }`)
        }
        return this;
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const hardAlgo = new Effect("Hard Algorithm", 2, "resilience", 3);
const unHandledPromiseRejection = new Effect("New Unhandled Promise Rejection", 1, "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "power", 2);

hardAlgo.play(redBeltNinja);
unHandledPromiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);