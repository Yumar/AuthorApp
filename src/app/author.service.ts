import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private autors = []

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>('../assets/authors.json');
  }

  
}
