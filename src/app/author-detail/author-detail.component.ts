import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../commons/author.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  private authorId:string;
  public editMode: boolean = false;
  public author: any = {};

  constructor(private route: ActivatedRoute, private router:Router, private service: AuthorService ) {
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.authorId = params.get('id');
      this.service.getAll().subscribe(data => this.author = data[0]);
    });
  }

  enableEditing(){
    this.editMode = true;
  }

  deleteAuthor(){
    this.service.delete(this.authorId).subscribe(() => this.router.navigateByUrl("/list"));
  }

  saveAuthor(){
    this.editMode = false;
    this.service.createOrUpdate(this.author);
  }

  toggleStar(){
    this.author.favorite = !this.author.favorite;
    this.service.toggleStar(this.author.id, this.author.favorite);
  }

}
