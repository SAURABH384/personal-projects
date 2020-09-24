import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { Employe } from 'src/app/employe';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  
  @ViewChild('userform',{static :false}) signupForm:NgForm;
  constructor(private _service:DataService) { }

  ngOnInit() {
    
  }
     onSubmit(form:NgForm){
         console.log(form);
        }
    //onSubmit(){
    ///this._service.addEmployee(this.signupForm.value.name,this.signupForm.value.location,this.signupForm.email,this.signupForm.value.mobile);
   // }

}
