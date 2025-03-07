import { createReducer, on } from "@ngrx/store";

import { BooksActions } from "./books.actions";
import { Book } from "./books.model";

const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
    initialState,
    on(BooksActions.addBook, (_state, { bookId }) => {
        if(_state.indexOf(bookId) > -1) return _state;
        return [..._state, bookId]
    }),
    on(BooksActions.removeBook, (_state, { bookId }) => 
        _state.filter(id => id !== bookId 
    ))
)