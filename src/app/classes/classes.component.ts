import { Component, OnInit } from '@angular/core';
import { ClassesService } from './classes.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  constructor(private ClaSvc: ClassesService, private Router:Router) { }

  ngOnInit() {
  }

}
