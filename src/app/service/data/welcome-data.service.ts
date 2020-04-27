import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public msg:string){ }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }
  executeHelloWorld(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/helloBean');
  }
}
