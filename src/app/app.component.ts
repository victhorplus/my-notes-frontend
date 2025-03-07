import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './containers';
import { GerenciaTaskComponent } from './ngrx-test/gerencia-task/gerencia-task.component';
import { ListaTaskComponent } from './ngrx-test/lista-task/lista-task.component';
import { Store, StoreModule } from '@ngrx/store';
import { taskReducer, taskReducer2 } from './ngrx-test/task.reducer';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './ngrx-test-2/book-list/book-list.component';
import { BookCollectionComponent } from './ngrx-test-2/book-collection/book-collection.component';
import { selectBookCollection, selectBooks } from './ngrx-test-2/books.selectors';
import { BooksActions, BooksApiActions } from './ngrx-test-2/books.actions';
import { GoogleBooksService } from './ngrx-test-2/books.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, GerenciaTaskComponent, ListaTaskComponent, BookListComponent, BookCollectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  enable: boolean = false;

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select((a1) => {
    console.log("A1: ", a1)
    return selectBookCollection(a1)
  });

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        {
          this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
          console.log("books: ", books)
        }
      );
  }
}
