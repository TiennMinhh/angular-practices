import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  addBook(book: Book): Observable<Book>{

    if(book.id === "1"){
      const err = new Error('Error while adding a book');
      return throwError(() => err)
    }
    
    return of(book)
  }
}
