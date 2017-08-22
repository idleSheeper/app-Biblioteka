import 'rxjs/add/operator/switchMap';
import { Component, Input } from '@angular/core';
import { Book } from './book'; 
import { BooksComponent } from "./books.component";
import { BooksService } from "./books.service";

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.html',
  styleUrls: ['./app.component.css'],
})
export class BookDetailComponent {
   private book: Book;

  constructor( private _booksService: BooksService,
    private route: ActivatedRoute,
    private location: Location) {}
    
  ngOnInit(): void {
    this.book = this._booksService.getSelectedBook();
  }

  goBack(): void {
    this.location.back();
  }
}
