import { Component, OnInit } from '@angular/core';
import { ClassesService } from './classes.service';
import { Router } from '@angular/router';
import { Class } from './class';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  classes:Class[];
  

  


  constructor(private ClaSvc: ClassesService, private Router:Router) { }

  ngOnInit() {
    this.ClaSvc.list()
    .subscribe(resp=>{
      console.log(resp);
      this.classes=resp.Data;
    })
  }

}
