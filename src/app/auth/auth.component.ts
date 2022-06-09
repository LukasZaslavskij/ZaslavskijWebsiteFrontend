import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent{
    isLoginMode = true;

    constructor(private authService: AuthService){}

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode //zmeni logiku
    }

    onSubmit(form: NgForm){
        const email=form.value.email;
        const password = form.value.password;

            
            this.authService.login(email, password);
            console.log(email)
        }
    }
