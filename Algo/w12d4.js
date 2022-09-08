
const friend1 = {
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    hasCovid: true,
};

const friend2 = {
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    hasCovid: true,
};

const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    hasCovid: false,
};

const people = [
    {
        firstName: "Person",
        lastName: "One",
        isSocialDistancing: false,
        friends: [friend2, friend3],
    },    
    {
        firstName: "Person",
        lastName: "Two",
        isSocialDistancing: true,
        friends: [friend2, friend1],
    },    
    {
        firstName: "Person",
        lastName: "Three",
        isSocialDistancing: false,
        friends: [friend2, friend1],
    },    
];    
const expected = ["Person One", "Person Three"];

/* Retrun an array of Person full names for those people who
 *    are at risk. A Person is at risk if both conditions are met:
 *    1. not practicing social distancing.
 *    2. have a friend who is not practicing social distancing and who hasCovid./* 
 */

function coronaVirusAtRisk(persons) {
    let atRisk = [];
    for (person of people) {
        if (! person.isSocialDistancing){
            for (friend of person.friends){
                if (! friend.isSocialDistancing){
                    atRisk.push(`${person.firstName} ${person.lastName}`);
                    break;
                }
            }
        }
    }
    return atRisk;
}

function coronaVirusAtRiskFunctional(persons) {
    const notDistancing = persons.filter( person => ! person.isSocialDistancing);
    const atRisk = notDistancing.filter( (person) => {
        let atRiskFriends = false;
        for (friend of person.friends){
            atRiskFriends = (atRiskFriends || (! friend.isSocialDistancing));
        }
        return atRiskFriends;
    });
    return atRisk;
}
function coronaVirusAtRiskFunctional(persons) {
    const notDistancing = persons.filter( person => ! person.isSocialDistancing);
    const atRisk = notDistancing.filter( (person) => 
                        person.friends.reduce((atRisk, friend) => atRisk || !friend.isSocialDistancing));
    return atRisk.map(person => `${person.firstName} ${person.lastName}`);
};


console.log(coronaVirusAtRisk(people));
console.log(coronaVirusAtRiskFunctional(people));
