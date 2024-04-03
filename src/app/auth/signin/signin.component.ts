import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  tittle="Sign In page"
  MobileNo:Number =124335353

  constructor(private userserve: UserapiService, private router:Router){ }


  login(Profileuser:any,user:String,pass:String){
    // alert('Sign in! '+ Profileuser + " " +user+" "+pass)

    this.userserve.Profileuserlogin(Profileuser).subscribe((data:any)=>{
      data.forEach((i:any)=>{
        if (i.Username.includes(user)){
          if(i.Username == user){
            if(i.Password == pass){
            localStorage.setItem('Loginuser',Profileuser)
            alert("login successful")
            this.router.navigate([""])
          }else{
            alert("invalid password")
          }
        }
          else{
            alert("invalid user")
          }
        }
      })

    })

  }




}
