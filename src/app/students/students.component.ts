import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Router } from '@angular/router';
import { Student } from './student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];

  constructor(private Stusvc: StudentService,private router:Router) { }

  ngOnInit() {
  }

}
