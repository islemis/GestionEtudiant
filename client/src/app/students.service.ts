
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Student } from './models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
 
  API_URI = 'http://localhost:4000/student';
  constructor(private http:HttpClient) {
  }

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  getStudents(): Observable<Student>{
  
      return this.http.get(this.API_URI );
  }
  getStudent(id: string) {
    return this.http.get('http://localhost:4000/getstudent/'+id)
  }

  deleteStudent(Sid:string):Observable<any>{
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    console.log(Sid);
     return this.http.delete(this.API_URI +'/'+Sid);
  }
  createStudent(student :Student):Observable<any>
  {
    
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.post('http://localhost:4000/ajoutstudent/',student).pipe(
      catchError(this.handleError)
    );
  } 
  updateStudent( updateStudent: Student,id:string): Observable<any>{
   
    return this.http.put('http://localhost:4000/editstudent/'+id,updateStudent);
    
  
  }

   handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
