import { Student } from "../students/student";
import { Class } from "../classes/class";

export class TimeStamp {
    Id: number;
    CheckIn: Date;
    CheckOut:Date;
    Active: boolean;
    StudentId: number;
    Student: Student;

    ClassId: number;
    Class: Class;

    constructor(){

        this.Active=true;
    }
}
