import { Component, OnInit } from '@angular/core';

const DATA: any[] = [
  {isbn: '978-1542040518', title: 'Lying Next to Me', publicationDate: 'May 21, 2019'},
  {isbn: '978-1542040518', title: 'Lying Next to Me', publicationDate: 'May 21, 2019'},
  {isbn: '978-1542040518', title: 'Lying Next to Me', publicationDate: 'May 21, 2019'},
  {isbn: '978-1542040518', title: 'Lying Next to Me', publicationDate: 'May 21, 2019'},
  {isbn: '978-1542040518', title: 'Lying Next to Me', publicationDate: 'May 21, 2019'},
  {isbn: '978-1542040518', title: 'Lying Next to Me', publicationDate: 'May 21, 2019'},
  {isbn: '978-1542040518', title: 'Lying Next to Me', publicationDate: 'May 21, 2019'},
  {isbn: '978-1542040518', title: 'Lying Next to Me', publicationDate: 'May 21, 2019'},
  {isbn: '978-1542040518', title: 'Lying Next to Me', publicationDate: 'May 21, 2019'},
];

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit { 
  displayedColumns: string[] = ['isbn', 'title', 'publicationDate'];
  dataSource = DATA;

  constructor() { }

  ngOnInit() {
  }

}
