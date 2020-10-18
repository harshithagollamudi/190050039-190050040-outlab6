import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service'
import { Data } from "./data";

@Injectable({
  providedIn: 'root'
})
export class GetService {

  private getUrl = 'https://cs251-outlab-6.herokuapp.com/initial_values/'
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private messageService : MessageService
  ) { }

  getData(): Observable<Data> {
    return this.http.get<Data>(this.getUrl).
    pipe(
    catchError(this.handleError<Data>('getData',{name :'',email:'',feedback:'',comment:''}))
    );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return(error: any) :Observable<T> => {
      console.error(error);
      return of(result as T);
      
    }
  }
}
