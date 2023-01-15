import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/shared/models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  @Input() public students: Student[] = [];
  @Output() public removeStudent = new EventEmitter<{student: Student, idx: number}>();

  public onRemoveStudent(student: Student, idx: number): void {
    this.removeStudent.emit({student: student, idx: idx});
  }

  public getGPAClassOf(gpa: number): string {
    if (gpa <= 50) { return 'low'; }
    if (gpa > 50 && gpa <= 80) { return 'medium'; }

    return 'high';
  }
}
