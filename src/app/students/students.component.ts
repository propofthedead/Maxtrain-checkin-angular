import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from './student';
import { ClassesService } from '../classes/classes.service';
import { Class } from '../classes/class';
import { forEach } from '../../../node_modules/@angular/router/src/utils/collection';
import { ClassholdService } from './classhold.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  dummy:Student[];
  students: Student[];
  c: Class;
  constructor(private Stusvc: StudentService,private router:Router, private Routed: ActivatedRoute, private Clasvc:ClassesService, private Clahol:ClassholdService) { }

  ngOnInit() {
    let id= this.Routed.snapshot.params.id;
    this.Clasvc.get(id)
    .subscribe(resp=>{
      console.log(resp);
      this.c=resp.Data;
    })
    this.Clahol.setClass(this.c);
    this.Stusvc.list()
    .subscribe(resp=>{
      this.dummy=resp.Data;
      console.log(resp);
    })
    for(let student of this.c.Students){
      for(let dumb of this.dummy){
        if(student.Id==dumb.Id){
          this.students.push(dumb);
        }
      }
    }
  }

}
