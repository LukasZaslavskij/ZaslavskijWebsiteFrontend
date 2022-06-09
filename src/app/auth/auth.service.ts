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

    login(email: string, password:string){
        const user = new User(email, password);
        console.log(user);
        if(email==='lukas.zaslavskij@cgi.com'){
                this.isUserLogin=true;
                
        }else
        this.isUserLogin=false;
        ;
        console.log(this.isUserLogin)
        this.route.navigate(['/create-skill'])
        
    }
}