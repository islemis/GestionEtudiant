import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from  '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
 import { NavigationComponent } from './components/navigation/navigation.component';
import { AppComponent } from './app.component';
import { StudentsService } from './students.service';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { UpdateComponent } from './components/update/update.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({

  declarations: [
    AppComponent,
    NavigationComponent,
    StudentsListComponent,
    UpdateComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    StudentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
