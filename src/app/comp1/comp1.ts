import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  standalone: false,
  templateUrl: './comp1.html',
  styleUrl: './comp1.css',
})
export class Comp1 {
username: string='';
password: any;

message: any;
login(){
  console.log("username:", this.username)
  console.log("password:", this.password)

  if('qwerty'==this.username && '12345678'==this.password){
    console.log("Login Success")
    this.message = 'Login Success';
    
  } else {
    console.log("Login Failed")
    this.message='Login Error'
  }
}
}
