import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentAPIService } from '../../shared/api/student-api';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})

export class StudentFormComponent implements OnInit {
  public studentForm: FormGroup;
  public errorMsg: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentAPIService: StudentAPIService
  ) {}

  public ngOnInit(): void {
    this.studentForm =  new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      major: new FormControl('', [Validators.required]),
      gpa: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)])
    });
  }

  public onSubmit(): void {
    this.studentAPIService.addStudent(this.studentForm.value).subscribe(result => {
      if (result === true) {
        this.router.navigate(['/'], { relativeTo: this.route });
      } else {
        this.errorMessage('Failed Add a new Student');
      }
    }, error => {
      console.error(error);
      this.errorMessage('Error from Server');
    });
  }

  private errorMessage(msg: string) {
    this.errorMsg = msg;
  }
}
