import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BooksService } from "./books.service";

@Component({
  selector: 'books',
  templateUrl: './books.html',
  styleUrls: ['./app.component.css'],
})
export class BooksComponent implements OnInit{
  title = 'Biblioteka';
  books: Book[];

  constructor(private _booksService: BooksService) {}
    
  ngOnInit(){
       this._booksService.getBooks()
         .subscribe(resBooks => this.books = resBooks); 
  }

  deleteBook(idToRemove){
    this.books = this.books.filter(item => item.id !== idToRemove);
  }

  selectBook(book){
    this._booksService.saveSelectedBook(book);
  }
}
