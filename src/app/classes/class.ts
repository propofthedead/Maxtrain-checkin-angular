import { Student } from "../students/student";

export class Class {
    Id : number;
    Name : string;
    Startdate: Date;
    Enddate: Date;

    Location: string;
    Active: boolean;
    Students: Student[];
}
