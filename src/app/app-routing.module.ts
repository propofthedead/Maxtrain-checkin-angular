import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'Full'},
  {path:'home', component: ClassesComponent},
  {path:'class/:id', component: StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
