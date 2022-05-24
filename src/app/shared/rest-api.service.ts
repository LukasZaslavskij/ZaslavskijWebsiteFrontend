import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Skill } from '../shared/skill';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  // Define API
  apiURL = 'http://localhost:8080/skill';
  constructor(private http: HttpClient) {}
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
      .get<Skill>(this.apiURL + '/getList')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch Skill
  getSkill(id: any): Observable<Skill> {
    return this.http
      .get<Skill>(this.apiURL + '/getSkill/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method => Create employee
  createSkill(skill: Skill) {
    return this.http.post
    (
      this.apiURL + '/add',
      skill,{responseType: 'text'}
      )
        .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API put() method => Update Skill
  updateSkill(id: any, skill: any) {
    return this.http
      .put(
        this.apiURL + '/edit/' + id,
        skill,{responseType: 'text'}
      );
  }
  // HttpClient API delete() method => Delete Skill
  deleteSkill(id: any) {
    return this.http
      .delete(this.apiURL + '/delete/' + id, {responseType: 'text'})
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

