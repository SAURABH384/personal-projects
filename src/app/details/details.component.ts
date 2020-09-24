import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { IEmployee } from '../employes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public Employees=[];
  constructor(private route:ActivatedRoute,private _service:DataService) { }
  
  ngOnInit() {
   let id=parseInt(this.route.snapshot.paramMap.get('id'));
   this._service.getEmploye(id)
   .subscribe(data=>this.Employees=data);
  }
  
 

}
