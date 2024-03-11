import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

interface Response{
  id:number,
  name:string
}

@Injectable({
  providedIn: 'root'
})
export class CreateService<T> {

  constructor(private http:HttpClient) { }
  add(request:any):Promise<T>{
    return lastValueFrom ( this.http.post<T>("http://localhost:3000",request));
  }
}

export interface ISpinner{
  error(message:string):void,
  on():void,
  off():void
}