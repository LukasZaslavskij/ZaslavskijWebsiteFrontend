import { computeMsgId } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject } from "rxjs";
import { AuthGuard } from "./auth.guard";
import { User } from "./user.model";

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private route: Router) { }
    user: BehaviorSubject<any> = new BehaviorSubject<any>({ email: 'dadaa', password: 'bbbbbbbb' });


    login(email: string, password: string) {
        this.user.next({ email, password });

        localStorage.setItem('myData', this.user.getValue().email)

        this.route.navigate(['/skill-list'])
    }
}