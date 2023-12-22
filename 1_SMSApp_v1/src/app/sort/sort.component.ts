import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/Student';
import { MatRadioModule } from '@angular/material/radio';
import { StudentsComponent } from '../students/students.component';


@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [CommonModule, MatRadioModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css'
})
export class SortComponent {

  criteria: string = '';
  @Output()
  criteriaemitter = new EventEmitter<string>();

  constructor() {
  }

  sortByPercentage() {
    this.criteria = 'percentage'
    this.criteriaemitter.emit(this.criteria);
  }

  sortByAttempts() {
    this.criteria = 'attempts'
    this.criteriaemitter.emit(this.criteria);
  }

  sortBySubjects() {
    this.criteria = 'subjects'
    this.criteriaemitter.emit(this.criteria);
  }

}
