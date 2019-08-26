import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, empty } from 'rxjs';
import { AuthorService } from '../commons/author.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  private authorId:string;
  public author: Observable<any> = empty();

  constructor(private route: ActivatedRoute, private service: AuthorService ) {
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.authorId = params.get('id');
      this.service.getAll().subscribe(data => this.author = data[0]);
    });
  }

}
