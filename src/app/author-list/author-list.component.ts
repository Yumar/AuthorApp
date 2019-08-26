import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorService } from '../commons/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  public authors: Observable<any>;

  constructor(private service: AuthorService ) { }

  ngOnInit() {
    this.service.getAll().subscribe(data => this.authors = data);
  }

  toggleStar(id:string, fav:boolean){
    this.service.toggleStar(id, fav);
  }

}
