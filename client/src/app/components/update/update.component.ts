import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/students.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @HostBinding('class') clases = 'row';
  student: any = {
    id: 0,
    nom: '',
    prenom: '',
    classe: '',
    cin:'',
    
  };
  edit: boolean = false;
  constructor(private studentsService: StudentsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.studentsService.getStudent(params.id)
        .subscribe(
          res => {
            this.student = res[0];
            console.log(this.student);
            this.edit = true;
          },
          err => console.log(err)
        )
    }
    
  }
  createStudent() {

     this.studentsService.createStudent(this.student)
 
       .subscribe(
         res => {
           console.log(res);
           this.router.navigate(['/students']);
          
         },
         err => console.log(err)
     
       )
      
   }
   updateStudent() {
    const params = this.activatedRoute.snapshot.params;
    this.studentsService.updateStudent(this.student,params.id)
      .subscribe(
        
        res => {
          console.log(res);
          
        },
        err => console.log(err)
     )
     this.router.navigate(['/students']);

  }


}
