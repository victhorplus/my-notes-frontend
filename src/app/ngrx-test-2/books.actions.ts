import { createActionGroup, props } from "@ngrx/store";
import { Book } from "./books.model";

export const BooksActions = createActionGroup({
    source: 'Books',
    events: {
        'Add book': props<{ bookId: string }>(),
        'Remove book': props<{ bookId: string }>(),
    }
});

export const BooksApiActions =  createActionGroup({
    source: 'Books API',
    events: {
        'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
    }
})