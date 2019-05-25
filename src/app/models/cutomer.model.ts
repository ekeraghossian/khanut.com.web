export class Customer {
    customerId: number;
    name: string;
    lastName: string;
    email: string;
    password: string;

    constructor(name: string, lastName: string, email: string, password: string) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}