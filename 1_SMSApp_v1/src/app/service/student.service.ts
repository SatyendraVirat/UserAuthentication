import { Injectable } from '@angular/core';
import { Student } from '../../model/Student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students:Student[]=[]
  constructor() {
    let s1=new Student(1,"Ram",1,81,["DAA","Python","AI"])
    let s2=new Student(2,"Loki",2,89,["Java","DSA","C"])
    let s3=new Student(3,"Virat",4,91,["ML","Python","C"])
    let s4=new Student(4,"Yash",2,72,["Java","DAA","C"])
    let s5=new Student(5,"Lakshman",3,68,["C","C++"])
    this.students.push(s1);
    this.students.push(s2);
    this.students.push(s3);
    this.students.push(s4);
    this.students.push(s5);
   }
   findAllStudents(){
    return this.students;
   }
}
