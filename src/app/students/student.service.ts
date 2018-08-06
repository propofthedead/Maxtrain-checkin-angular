import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../json-response';
import { Student } from './student';
import { JsonpCallbackContext } from '@angular/common/http/src/jsonp';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url="";

  list(): Observable<JsonResponse>{
    return this.http.get(this.url+"List") as Observable<JsonResponse>;
  }

  get(id): Observable<JsonResponse>{
    return this.http.get(this.url+"Get/"+id) as Observable<JsonResponse>;
  }

  create(student:Student): Observable<JsonResponse>{
    return this.http.post(this.url+"Create", student) as Observable<JsonResponse>;
  }

  change(student:Student) : Observable<JsonResponse>{
    return this.http.post(this.url+"Change", student) as Observable<JsonResponse>;
  }

  remove(student: Student) : Observable<JsonResponse>{
    return this.http.post(this.url+"Remove",student) as Observable<JsonResponse>;
  }

  removeId(id) : Observable<JsonResponse>{
    return this.http.post(this.url+"RemoveId",id) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
