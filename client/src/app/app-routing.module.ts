
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { UpdateComponent } from './components/update/update.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    {
      path: 'students',
      component: StudentsListComponent
    },
    {
      path: 'students/add',
      component: UpdateComponent 
    },
    {
      path: 'students/edit/:id',
      component: UpdateComponent 
    },
    {
      path: 'login',
      component: LoginComponent    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
