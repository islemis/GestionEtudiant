import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/students.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor( private router: Router, private activatedRoute: ActivatedRoute,private StudentsService :StudentsService ) { }

  ngOnInit() { 
   
  }
 
  pass: string = '';
  mail: string = '';
 
  test() {
   if(this.pass=="user" && this.mail=="user")
   {
 
    this.router.navigate(['/students']); 
    }
   

  }

  

}
