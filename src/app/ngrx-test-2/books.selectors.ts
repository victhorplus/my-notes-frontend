import { createSelector, createFeatureSelector, createFeature } from '@ngrx/store';
import { Book } from './books.model';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');
export const selectCollection = createFeatureSelector<ReadonlyArray<string>>('collection');
export const selectBookCollection = createSelector(
    selectBooks, 
    selectCollection, 
    (books, collection) => {
        console.log("selection books: ", books)
        console.log("selection collection: ", collection)
        return collection.map(id => books.find(book => book.id === id))
    }
);