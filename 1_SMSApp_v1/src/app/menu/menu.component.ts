import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { createInjectableType } from '@angular/compiler';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,RouterModule,MatSidenavModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {

  constructor(public service:UserService){
    
  }
}
