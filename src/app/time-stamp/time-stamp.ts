import { Student } from "./students/student";
import { Class } from "./classes/class";

export class TimeStamp {
    Id: number;
    FirstName: string;
    LastName: string;
    UserName: string;
    Pin: string;
    IsAdmin: boolean;
    Active: boolean;
    StudentId: number;
    Student: Student;

    ClassId: number;
    Class: Class;

    constructor(){
        this.IsAdmin=false;
        this.Active=true;
    }
}
