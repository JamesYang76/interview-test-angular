import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/models/student.model';
import { StudentAPIService } from '../shared/api/student-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public students: Student[];
  public message: string;

  public constructor(private studentAPIService: StudentAPIService) {}

  public ngOnInit(): void {
    this.setMessage('Loading...');
    this.studentAPIService.getStudents().subscribe(result => {
      this.students = result;
      this.setMessage('');
    }, error => {
      console.error(error);
      this.setMessage('Loading Error Happens');
    });
  }

  public onRemoveStudent(param: {student: Student, idx: number}): void {
    this.setMessage('Deleting...');
    this.studentAPIService.removeStudent(param.student.id).subscribe(result => {

      if (result === true ) {
        this.students.splice(param.idx, 1);
        this.setMessage('Delete Successfully');
      } else {
        this.setMessage('Delete Failed');
      }

    }, error => {
      console.error(error);
      this.setMessage('Error from Server');
    });
  }

  private setMessage(newMessage: string) {
    this.message = newMessage;
  }
}
