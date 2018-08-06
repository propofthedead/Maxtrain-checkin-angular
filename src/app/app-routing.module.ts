import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { StudentsComponent } from './students/students.component';
import { TimeStampComponent } from './time-stamp/time-stamp.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'Full'},
  {path:'home', component: ClassesComponent},
  {path:'class/:id', component: StudentsComponent},
  {path: 'student/:id',component: TimeStampComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
