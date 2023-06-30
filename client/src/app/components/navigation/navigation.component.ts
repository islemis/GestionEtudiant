import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor( private router: Router,private studentsService: StudentsService) {
 }
  ngOnInit() {
  }


}
