import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service'
import { Data } from "./data";

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private postUrl = 'https://cs251-outlab-6.herokuapp.com/add_new_feedback/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private messageService : MessageService
  ) { }

  postData(data: Data) : Observable<MessageService> {
    return this.http.post<MessageService>(this.postUrl,JSON.stringify(data),this.httpOptions).pipe(
      catchError(this.handleError<MessageService>('postData'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return(error: any) :Observable<T> => {
      console.error(error);
      this.log("Form updation unsucessful");
      return of(result as T);
      
    }
  }

  private log(message: string){
    this.messageService.add(`${message}`);
  }

}

