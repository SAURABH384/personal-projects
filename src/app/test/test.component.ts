import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  constructor(private Titleservices:Title,private router:Router ) {
    
   }
   public setTitle(newTitle : String){
    this.Titleservices.setTitle("Employees Management System");
   }

  ngOnInit() {
    this.setTitle("");
  }
  onSelect(){
    
  }

}
