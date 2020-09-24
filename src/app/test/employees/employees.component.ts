import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public  Employees=[];
  constructor(private _dataService:DataService,private router:Router) { }

  ngOnInit() {
    this._dataService.getEmployees()
    .subscribe(data=>this.Employees=data);
  }
  onSelect(employee){
   this.router.navigate(['/test/editEmployees',employee.id]);
    
  }
  onSelectDelete(employee){
    this.router.navigate(['/test/editEmployees',employee.id]);
     
   }

}
