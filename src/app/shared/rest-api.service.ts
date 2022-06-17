import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Skill } from '../shared/skill';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RestApiService {

  constructor(private http: HttpClient) { }
  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // HttpClient API get() method => Fetch Skill list
  getSkills(): Observable<Skill> {
    return this.http
      .get<Skill>(environment.apiURL + '/getList')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch Skill
  getSkill(id: number): Observable<Skill> {
    return this.http
      .get<Skill>(environment.apiURL + '/getSkill/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method => Create skill
  createSkill(skill: Skill) {
    return this.http.post
      (
        environment.apiURL + '/add',
        skill, { responseType: 'text' }
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API put() method => Update Skill
  updateSkill(id: number, skill: string) {
    return this.http
      .put(
        environment.apiURL + '/edit/' + id,
        skill, { responseType: 'text' }
      );
  }
  // HttpClient API delete() method => Delete Skill
  deleteSkill(id: number) {
    return this.http
      .delete(environment.apiURL + '/delete/' + id, { responseType: 'text' })
      .pipe(retry(1), catchError(this.handleError));
  }
  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}


