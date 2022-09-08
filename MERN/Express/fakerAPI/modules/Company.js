const company_id = (() => {
    let count = 0;
    return () => count++; 
})();

class Company {
    constructor(name, address){
        this._id = company_id();
        this.name = name;
        this.address = address;
    }
}

class Address {
    constructor(street, city, state, zipCode, country){
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.country = country;
    }
}

export { Company, Address };