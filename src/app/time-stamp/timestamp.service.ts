import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { JsonResponse } from '../json-response';
import { TimeStamp } from './time-stamp';

@Injectable({
  providedIn: 'root'
})
export class TimestampService {
  url= "";

  list(): Observable<JsonResponse>{
    return this.http.get(this.url+"List") as Observable<JsonResponse>;
  }

  get(id):Observable<JsonResponse>{
    return this.http.get(this.url+"Get/"+id) as Observable<JsonResponse>;
  }

  create(timestamp: TimeStamp) : Observable<JsonResponse>{
    return this.http.post(this.url+"Create",timestamp) as Observable<JsonResponse>;
  }

  change(time: TimeStamp): Observable<JsonResponse>{
    return this.http.post(this.url+"Change",time) as Observable<JsonResponse>;
  }

  remove(time:TimeStamp) : Observable<JsonResponse>{
    return this.http.post(this.url+"Remove",time) as Observable<JsonResponse>;
  }

  removeId(time:TimeStamp): Observable<JsonResponse>{
    return this.http.post(this.url+"RemoveId",time) as Observable<JsonResponse>;
  }

  TimeStamp(time:TimeStamp) : Observable<JsonResponse>{
    return this.http.post(this.url+"TimeStamp",time) as Observable<JsonResponse>;
  }


  constructor(private http: HttpClient) { }
}
