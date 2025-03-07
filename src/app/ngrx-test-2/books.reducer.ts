import { createReducer, on } from '@ngrx/store';

import { Book } from './books.model';
import { BooksApiActions } from './books.actions';

const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
    initialState,
    on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
)