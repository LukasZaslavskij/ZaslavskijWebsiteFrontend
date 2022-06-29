import { computeMsgId } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject } from "rxjs";
import { AuthGuard } from "./auth.guard";
import { User } from "./user.model";

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private route: Router) {
        const initUser = localStorage.getItem(AuthService.userData);
        if (initUser !== undefined) {
            this.user$.next(JSON.parse(initUser!))
        }
    }
    static userData: string = 'userData';
    user$: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);

    login(email: string, password: string) {
        this.user$.next(new User(email, password));
        localStorage.setItem(AuthService.userData, JSON.stringify(this.user$.value));
        this.route.navigate(['/main']);
    }

    logout() {
        this.user$.next(undefined);
        localStorage.removeItem(AuthService.userData);
        this.route.navigate(['/auth']);

    }

    accessGranted() {
        if ('lukas.zaslavskij@cgi.com' == this.user$.value?.email) {
            return true;
        } else {
            return false;
        }
    }

}

