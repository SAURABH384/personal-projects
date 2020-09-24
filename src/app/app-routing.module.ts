import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AddemployeeComponent } from "./test/addemployee/addemployee.component";
import { DetailsComponent } from './details/details.component';
import { EmployeesComponent } from './test/employees/employees.component';
import { EditEmployeeComponent } from './test/editemployees/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/test',pathMatch:'full',},
  {path:'test',component:TestComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'test/employees',component:EmployeesComponent},
  {path:'test/editEmployees',component:EditEmployeeComponent},
  {path:'test/editEmployees/:id',component:EditEmployeeComponent},
  {path:'test/addEmployees',component:AddemployeeComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  export const routingComponent=[TestComponent,
                              EmployeeListComponent,
                               DetailsComponent,
                               AddemployeeComponent,
                               EditEmployeeComponent,
                               EmployeesComponent];

