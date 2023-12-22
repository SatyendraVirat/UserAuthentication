import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLogedIn :boolean = false;
  constructor() { this.isValidSession() }
  perform_login(username: string,password: string) {
    if (username == 'admin' && password == 'admin') {
      this.isUserLogedIn = true;
    } else {
      this.isUserLogedIn = false;
    }
    return this.isUserLogedIn;
  }

//following methods are mentationing the session of the user
  public createSessionAndStoreValue(username:string,isUserLogedIn:boolean){
    sessionStorage.setItem('isUserLogedIn',isUserLogedIn+'')
    sessionStorage.setItem('username',username)
  }
  public isValidSession(){
    let username=sessionStorage.getItem('username')
    if(username=='guest'|| username==null){
    this.isUserLogedIn=false
    }else{
      this.isUserLogedIn=true
    }
  }
  public logout(){
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('isUserLogedIn')
    this.isUserLogedIn=false;
  }
}
