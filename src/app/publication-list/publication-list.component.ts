import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit { 
  @Input() publications: any[];
  displayedColumns: string[] = ['isbn', 'title', 'publicationDate'];

  constructor() { }

  ngOnInit() {
  }

}
