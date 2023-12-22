import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LogoutComponent } from './logout/logout.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path:'students',component:StudentsComponent,
        canActivate:[authGuard]

    },
    {path:'login',component:LoginComponent},
    {path:'logout',component:LogoutComponent},
    {path:'aboutus',component:AboutUsComponent},
    {path:'contactus',component:ContactUsComponent}
];
