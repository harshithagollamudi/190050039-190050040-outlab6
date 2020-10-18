import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Data } from "./data";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Observable<Data>;
  Url: string = 'https://cs251-outlab-6.herokuapp.com/add_new_feedback/';

  //httpOptions= {
   // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //};
  constructor(
      private http: HttpClient,
     //private messageService: MessageService
    ) { }
   
  //getData(): Observable<Data>..>{
    //return this.http.get<Data>( this.dataUrl );

  //}
  //getData(){
   // return of[
     // {"name":"sourav","email":"nani@iitb.ac.in", "feedback":"Great", "comments":"This is not a comment"}
    //];
  //}
 
}
