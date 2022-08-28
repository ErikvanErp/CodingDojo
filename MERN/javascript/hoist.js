// rewrite the code to show the effect of hoisting
// predict the output

// console.log(hello);                                   
// var hello = 'world';                                 

var hello;
console.log(hello);
hello = 'world';

// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test();

// output: magnet

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// output: super cool

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

var food = 'chicken';
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
console.log(food);
eat();

//output: chicken, half-chicken

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// error: mean not a function; called before it is assigned

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

var genre;
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);

// output: undefined, rock, r&b, disco

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";  // <== tricky!!!
//     console.log(dojo);
// }
// console.log(dojo);

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// output: san jose, seattle, burbank, san jose

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

function makeDojo(name, students){
    const dojo = {};
    dojo.name = name; // this is allowed; the address of dojo does not change
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // this is not allowed; dojo is const
    }
    return dojo;
}
// the above assignment error is a runtime error; 
// therefore the first line below runs without problems
console.log(makeDojo("Chicago", 65));
// this call fails once line 145 executes
console.log(makeDojo("Berkeley", 0));