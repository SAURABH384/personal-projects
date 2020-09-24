import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employes';
import { Employe } from './employe';



@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  public _url:string='api/employees';//"/assets/data/data.json";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) { }
  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
  }
  
 
  getEmploye(Id:number):Observable<IEmployee[]>{
    const url='${this._url}/${Id}';
    return this.http.get<IEmployee[]>(url);
  }
  addEmployee(employee:{name:string,location:string,email:string,mobile:number}): Observable<IEmployee> {
    return this.http.post<IEmployee>(this._url,employee);
  
}
updateEmployee(employe:Employe,Id:number){
  const url='${this._url}/${Id}';
  return this.http.put(url,employe,this.httpOptions);
}
deleteEmployee(Id :number):Observable<IEmployee>{
  const url='${this._url}/${Id}';
  return this.http.delete<IEmployee>(url);
}
}