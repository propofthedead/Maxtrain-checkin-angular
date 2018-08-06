import { Injectable } from '@angular/core';
import { Class } from '../classes/class';

@Injectable({
  providedIn: 'root'
})
export class ClassholdService {

  checkClass: Class

  setClass(c:Class):void{
    this.checkClass=c;
  }
  clearClass():void{
    this.checkClass=null;
  }

  getClass():Class{
    return this.checkClass;
  }

  constructor() { }
}
