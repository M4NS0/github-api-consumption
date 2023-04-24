import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  userDetails: any;
  userRepositories!: any[];

  constructor(private http: HttpClient) { }

  getUserDetails(username: string): Observable<any> {
    return this.http.get<any>(`https://api.github.com/users/${username}`).pipe(
      tap((user: any) => this.userDetails = user),
      catchError(() => of(null))
    );
  }

  getUserRepositories(username: string): Observable<any[]> {
    return this.http.get<any[]>(`https://api.github.com/users/${username}/repos`).pipe(
      tap((repos: any[]) => this.userRepositories = repos),
      catchError(() => of([]))
    );
  }
}
