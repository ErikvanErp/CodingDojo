import express from "express";
import { faker } from '@faker-js/faker'; 
import User from "./modules/User.js";
import { Company, Address } from "./modules/Company.js";

const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/users/new", (req, res) => {
    const newUser = new User();
    newUser.firstName = faker.name.firstName();
    newUser.lastName = faker.name.lastName();
    newUser.email = faker.internet.email();
    newUser.phoneNumber = faker.phone.phoneNumber();
    newUser.password = faker.internet.password();

    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newAddress = new Address();
    newAddress.street = faker.address.street();
    newAddress.city = faker.address.city();
    newAddress.state =faker.address.state();
    newAddress.zipCode = faker.address.zipCode();
    newAddress.country = faker.address.country();

    const newCompany = new Company();
    newCompany.name = faker.company.name();
    newCompany.address = newAddress;

    res.json(newCompany);
})

app.get("/api/user/company", (req, res) => {
     const newUser = new User();
    newUser.firstName = faker.name.firstName();
    newUser.lastName = faker.name.lastName();
    newUser.email = faker.internet.email();
    newUser.phoneNumber = faker.phone.phoneNumber();
    newUser.password = faker.internet.password();

    const newAddress = new Address();
    newAddress.street = faker.address.street();
    newAddress.city = faker.address.city();
    newAddress.state =faker.address.state();
    newAddress.zipCode = faker.address.zipCode();
    newAddress.country = faker.address.country();

    const newCompany = new Company();
    newCompany.name = faker.company.name();
    newCompany.address = newAddress;
    
    res.json([newUser, newCompany]);
});

const server = app.listen(8000, () =>
    console.log(`Express is listening on port ${server.address().port}!`)
);
