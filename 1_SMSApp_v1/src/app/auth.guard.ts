import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './service/user.service';


export const authGuard: CanActivateFn = (route, state) => {
  const service=inject(UserService);
  const r=inject(Router)  //inject is used to dependency injection
  console.log(service.isUserLogedIn)
  service.isValidSession();
  if(service.isUserLogedIn){
    return true;
  }else{
    r.navigate(['login'])
    return false;
  }
  
};
