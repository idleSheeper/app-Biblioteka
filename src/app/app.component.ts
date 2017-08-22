import { Component } from '@angular/core';
import { BooksComponent } from './books.component'
import { BookDetailComponent } from "./book-detail.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Biblioteka';
  
}
