export class Advocate {
    id: number;
    firstName: string;
    lastName: string
    city: string;
    degree: string
    specialties: string[];
    yearsOfExperience: number
    phoneNumber: string;
    
    constructor(
        id: number,
        firstName: string,
        lastName: string,
        city: string,
        degree: string,
        specialties: string[],
        yearsOfExperience: number,
        phoneNumber: string
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.degree = degree;
        this.specialties = specialties;
        this.yearsOfExperience = yearsOfExperience;
        this.phoneNumber = phoneNumber;
    }
}