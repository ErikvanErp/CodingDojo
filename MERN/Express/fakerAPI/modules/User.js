const user_id = (() => {
    let count = 0;
    return () => count++; 
})();

class User {
    constructor(firstName, lastName, email, phoneNumber, password){
        this._id = user_id();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }
}

export default User;