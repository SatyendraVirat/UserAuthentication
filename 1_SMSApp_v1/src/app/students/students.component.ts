import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Student } from '../../model/Student';
import { StudentUpdateComponent } from '../student-update/student-update.component';
import { MatRadioModule } from '@angular/material/radio';
import { SortComponent } from '../sort/sort.component';
import { StudentService } from '../service/student.service';
import { StudentRestService } from '../service/student-rest.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, StudentUpdateComponent, MatRadioModule, SortComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students: Student[] = []
  message: string = '';
  colorClass: string = '';

  selectedStudent!: Student
  updatedClicked: boolean = false;

  constructor(private service: StudentRestService) {
    service.findAllStudents().subscribe(
      response => this.students = response
    );
  }
  showStudents() {
    this.service.findAllStudents().subscribe(
      response => { console.log(Response); this.students = response }
    );
  }
  deleteStudents(rollno: number) {
    const result = confirm("Want to Delete")
    if (result) {
      this.service.deleteByRollNo(rollno).subscribe(
        succes => {
          this.students = this.students.filter(s => s.rollno != rollno);
          this.message = 'Record Deleted';
          this.colorClass = 'success';
        }
      )
    } else {
      this.message = 'Deletion Cancel!!';
      this.colorClass = 'error';
    }

  }
  updateStudent(s: Student) {
    this.updatedClicked = true;
    this.selectedStudent = s;

  }
  doUpdate(updatedStudent: Student) {
    //map is a built-in  function of javaScript that transform every elemnt of the array 
    //which is exaclty similar to lamda function and return new array.
    let modifiedstudents = this.students.map(s => {  //
      if (s.rollno == updatedStudent.rollno) {
        // following line make use of spread opearator
        // spread opearator was added in ES6
        // Using following line we are changing the value of noOfAttempts field. 
        return { ...s, numberOfAttempts: updatedStudent.numberOfAttempts }
      } else {
        return s;
      }
    })
    this.students = modifiedstudents;
    this.updatedClicked = false;
  }

  sort(criteria:string){
    if(criteria=='percentage'){
      this.sortByPercentage();
    }else if(criteria=='attempts'){
         this.sortByAttempts();
    }else{
        this.sortBySubjects();
    }
  }

  sortByPercentage() {
    this.students.sort((a, b) => b.percentage - a.percentage);
  }
  sortByAttempts() {
    this.students.sort((a, b) => a.numberOfAttempts - b.numberOfAttempts);
  }
  sortBySubjects() {
    this.students.sort((a, b) => a.subjectsLearning.length - b.subjectsLearning.length);
  }

}

