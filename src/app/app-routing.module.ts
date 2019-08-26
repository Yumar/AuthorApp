import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthorListComponent } from "./author-list/author-list.component";
import { AuthorDetailComponent } from "./author-detail/author-detail.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/list', pathMatch: 'full' },
      { path: 'list', component: AuthorListComponent },
      { path: 'list/:id', component: AuthorDetailComponent }
    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
