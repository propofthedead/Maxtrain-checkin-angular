import { Class } from "../classes/class";

export class Student {
    Id: number;
    FirstName:string;
    LastName: string;
    UserName: string;
    Pin: string;
    IsAdmin: boolean;
    Active: boolean;
    Classes: Class[];

    constructor(){
        this.IsAdmin=false;
        this.Active=true;
    }
}
