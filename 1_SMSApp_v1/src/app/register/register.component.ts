import { Component, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Student } from '../../model/Student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(){
    // this.addStudent();
  }

//   @Input()
//   addedStudent=new Student(0,'',0,0,[]);

// //To send data from child to parent,we nedd to use @Output Decorator 
// @Output()  
// studentEmitter=new EventEmitter<Student>()  //1st step
//   performUpdate(){
//   this.studentEmitter.emit(this.addedStudent)  //2nd step
//   }
//   addStudent(){
//    this.service.isUserLogedIn=false;
//    this.r.navigate(['register']);
//   }
}
