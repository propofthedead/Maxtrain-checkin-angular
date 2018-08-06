import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { StudentService } from '../students/student.service';
import { TimestampService } from './timestamp.service';
import { Student } from '../students/student';
import { TimeStamp } from './time-stamp';
import { ClassholdService } from '../students/classhold.service';
import { Class } from '../classes/class';

@Component({
  selector: 'app-time-stamp',
  templateUrl: './time-stamp.component.html',
  styleUrls: ['./time-stamp.component.css']
})
export class TimeStampComponent implements OnInit {

  student: Student;
  stamp: TimeStamp;
  pin:string;
  c: Class;
  checkIn(): void{
    if(this.pin== this.student.Pin){
      this.stamp.StudentId=this.student.Id;
      this.stamp.ClassId=this.c.Id;
      this.Timesvc.TimeStamp(this.stamp);
      this.router.navigateByUrl('/home')
    }
  }

  constructor(private Routed: ActivatedRoute, private Stusvc: StudentService, private Timesvc: TimestampService, private Clashol: ClassholdService, private router: Router) { }

  ngOnInit() {
  let id= this.Routed.snapshot.params.id;
  this.Stusvc.get(id)
  .subscribe(resp=>{
    console.log(resp);
    this.student=resp.Data;
  })
  this.c=this.Clashol.getClass();
  }

}
