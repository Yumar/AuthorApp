import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private LAMBDA_URL = "";
  private autors = []

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>('../assets/authors.json');
  }

  getById(authorId:string):any {
    return this.http.get<any>('../assets/authors.json').pipe(first(a => a.id === authorId));
  }

  toggleStar(authorId:string, value:boolean): Observable<any>{
    const param:any = {id:authorId, favorite:value}

    return this.http.put(this.LAMBDA_URL, param);
  }

  
}
