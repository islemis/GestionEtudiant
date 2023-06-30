import { Component, OnInit, HostBinding } from '@angular/core';
import { StudentsService } from 'src/app/students.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  @HostBinding('class') classes ='row';
  students: any =[];

  constructor( private router: Router,private studentsService: StudentsService) {
  }
  ngOnInit() {

    this. getStudents();
  }
  getStudents(){
    this.studentsService.getStudents().subscribe(
      res => {
        this.students = res;
      },

      err => console.error(err)
    );
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate([currentUrl]);
    });
}

  deleteStudent(id:string) {
    if (window.confirm('Are you sure you want to delete '  + ' '  + ' ?')) {
      this.studentsService.deleteStudent(id).subscribe(
        res => {
       console.log(res);
     this.reloadCurrentRoute()
        },
        
        err => console.error(err)
      );;
    }

  }

}