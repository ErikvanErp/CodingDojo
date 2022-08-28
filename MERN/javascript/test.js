const person = { 
        firstName: 'Bob', 
        lastName: 'Marley', 
        email: 'bob@marley.com', 
        password: 'sekureP@ssw0rd9', 
        username: 'barley', 
        createdAt: 1543945177623
    };
    const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

    // AFTER ES6
const { email, password } = person;
const [firstAnimal,,thirdAnimal] = animals;
console.log(email, password);
// => bob@marley.com
console.log(firstAnimal, thirdAnimal);
// => horse
