import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../../shared/models/student.model';

@Injectable({ providedIn: 'root' })
export class StudentAPIService {

  private STUDENT_URL: string;

  public constructor( private http: HttpClient, @Inject('BASE_URL') private baseUrl: string)  {
    this.STUDENT_URL = this.baseUrl + 'students';
  }

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.STUDENT_URL);
  }

  public addStudent(student: Student): Observable<boolean> {
    return this.http.post<boolean>(this.STUDENT_URL, student);
  }

  public removeStudent(id: string): Observable<boolean>  {
    return this.http.delete<boolean>(`${this.STUDENT_URL}/${id}`);
  }
}
