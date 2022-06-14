import { computeMsgId } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject } from "rxjs";
import { AuthGuard } from "./auth.guard";
import { User } from "./user.model";

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private route: Router) { this.user$.next((JSON.parse(localStorage.getItem('myData')!))) }
    user$: BehaviorSubject<User> = new BehaviorSubject<User>({ email: 'undefined', password: 'undefined' });

    login(email: string, password: string) {
        this.user$.next({ email, password });

        localStorage.setItem('myData', JSON.stringify(this.user$.value));

        this.route.navigate(['/skill-list']);
    }



}