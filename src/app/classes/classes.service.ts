import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../json-response';
import { Class } from './class';




@Injectable({
  providedIn: 'root'
})
export class ClassesService {
 url="";
  list(): Observable<JsonResponse>{
    return this.http.get(this.url+"/list") as Observable<JsonResponse>
  }

  get(id): Observable<JsonResponse>{
    return this.http.get(this.url+"get/"+id) as Observable<JsonResponse>
  }

  create(c:Class): Observable<JsonResponse>{
    return this.http.post(this.url+"Create",c) as Observable<JsonResponse>
  }

  change(c:Class): Observable<JsonResponse>{
    return this.http.post(this.url+"Change",c) as Observable<JsonResponse>;
  }

  remove(c:Class): Observable<JsonResponse>{
    return this.http.post(this.url+"Remove",c) as Observable<JsonResponse>;
  }

  removeId(id): Observable<JsonResponse>{
    return this.http.post(this.url+"RemoveId",id) as Observable<JsonResponse>;
  }

  constructor(private http:HttpClient) { }
}
