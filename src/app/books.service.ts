import { Book } from './book';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()

export class BooksService {
    private _url: string = "assets/books.json";
    private selectedBook: Book;
    constructor(private _http: Http) { }

    getBooks(){
        return this._http.get(this._url)
                .map((response:Response) => response.json() as Book[]);                
    }

    saveSelectedBook(book){
        this.selectedBook = book;
    }

    getSelectedBook(){
        return this.selectedBook;
    }

}
