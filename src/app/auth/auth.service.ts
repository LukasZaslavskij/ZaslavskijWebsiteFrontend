import { computeMsgId } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AuthGuard } from "./auth.guard";
import { User } from "./user.model";

@Injectable({providedIn: 'root'})
export class AuthService{
    constructor(private route:Router){}
    user = new Subject<User>();
    
    isUserLogin = false;
    userLoginInfo=false;
    hodnota = 'false';

    login(email: string, password:string){
        const user = new User(email, password);
        console.log(user);
        if(email==='lukas.zaslavskij@cgi.com'){
                this.isUserLogin=true;

                 
                
        }else
        this.isUserLogin=false;

        console.log( 'isUserLogin' + this.isUserLogin)

        const jsonData = JSON.stringify(this.isUserLogin)
                localStorage.setItem('myData', jsonData)
                let hodnota= localStorage.getItem("myData")
                console.log('hodnota je' + hodnota)
                
                if (hodnota==='true') {
                    this.userLoginInfo=true;  
                }else{
                    this.userLoginInfo=false;
                     }
                console.log('userloginOf v login' + this.userLoginInfo)
        
        
         this.route.navigate(['/skill-list'])
    }
    autoLogin (){
        let hodnota= localStorage.getItem('myData')
    if (hodnota==='true') {
        this.userLoginInfo=true;  
    }else{
        this.userLoginInfo=false;
         }
         console.log('userloginOf v autologin' + this.userLoginInfo)
    }
    
      
           

}