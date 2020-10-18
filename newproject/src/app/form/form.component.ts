import { Component, OnInit } from '@angular/core';
//import { Location } from '@angular/common'
import { DataService } from '../data.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms'
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GetService } from '../get.service'
import { Data } from '../data';
import { MessageService } from '../message.service'
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { PostService } from '../post.service';
//import { User } from '../user';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data : Data;
  form : FormGroup;
  constructor(
    
    public fb: FormBuilder,
    private dataService: DataService,
    private http: HttpClient,
    private getservice:GetService,
    private postservice:PostService,
    private messageService : MessageService
  ) { }
  ngOnInit(): void {
    this.getData();
    this.messageService.clear();

  }



  getData():void{
    
    this.getservice.getData()
      .subscribe(data => (this.data=data,
        // this.form = this.fb.group({
        //       name: this.data.name.trim(),
        //       comment: this.data.comment.trim(),
        //       email: this.data.email.trim(),
        //       feedback : this.data.feedback.trim(),
              
        //     })),
        this.form = new FormGroup({
          name: new FormControl(this.data.name.trim()),
          email: new FormControl(this.data.email.trim()),
          feedback: new FormControl(this.data.feedback.trim()),
          comment: new FormControl(this.data.comment.trim())
        }))
            // this.data.name = this.form.controls['name'].value
      );
     
  }
  onSubmit():void {

    this.messageService.clear();

    if((this.form.value["name"])==""){
      this.messageService.add("Please fill name");
      this.messageService.add("Form updation unsucessful");
      return;
    }
    if((this.form.value["email"])==""){
      this.messageService.add("Please fill email");
      this.messageService.add("Form updation unsucessful");
      return;
    }
    if((this.form.value["feedback"])==""){
      this.messageService.add("Please fill feedback");
      this.messageService.add("Form updation unsucessful");
      return;
    }
    this.data.name = this.form.value["name"];
    this.data.email = this.form.value["email"];
    this.data.feedback = this.form.value["feedback"];
    this.data.comment = this.form.value["comment"];

    this.postservice.postData(this.data).subscribe(messageService =>
      (this.messageService.messages = messageService.messages));

    if(this.messageService.messages.length==0){
      this.messageService.messages.push("Form updation sucessful");
    };
  }        
}
