import { computeMsgId } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject } from "rxjs";
import { AuthGuard } from "./auth.guard";
import { User } from "./user.model";

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private route: Router) {
        const initUser = (JSON.parse(localStorage.getItem('userData')!))
        this.user$.next(initUser)
        if (this.user$.value.email === 'undefined') {
            this.status = false;
        } else
            this.status = true;
    }
    user$: BehaviorSubject<User> = new BehaviorSubject<User>({ email: 'undefined', password: 'undefined' });
    status: boolean = false
    login(email: string, password: string) {
        this.user$.next({ email, password });

        localStorage.setItem('userData', JSON.stringify(this.user$.value));

        this.route.navigate(['/main']);
        this.status = true;
    }
    logout() {
        this.login('undefined', 'undefined');
        this.route.navigate(['/auth']);
        this.status = false;
    }
    accessGranted() {
        if ('lukas.zaslavskij@cgi.com' === this.user$.value.email) {
            return true;
        } else {
            return false;
        }
    }



}

