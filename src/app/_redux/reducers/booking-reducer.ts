import { createSelector } from 'reselect';
import { Booking } from '../../_models/booking.model';
import * as booking from '../actions/booking-action';


export interface State {
  ids: string[];
  entities: { [id: string]: Booking };
  selectedBookId: string | null;
};

export const initialState: State = {
  ids: [],
  entities: {},
  selectedBookId: null,
};

export function reducer(state = initialState, action: booking.Actions ): State {

  switch (action.type) {
    case booking.ActionTypes.SEARCH_COMPLETE: {
      const books = action.payload as Booking[];
      const newBooks = books.filter(book => !state.entities[book.bookingGuid]);

      const newBookIds = newBooks.map(book => book.bookingGuid);
      const newBookEntities = newBooks.reduce((entities: { [id: string]: Booking }, book: Booking) => {
        return Object.assign(entities, {
          [book.bookingGuid]: book
        });
      }, {});

      return {
        ids: [ ...state.ids, ...newBookIds ],
        entities: Object.assign({}, state.entities, newBookEntities),
        selectedBookId: state.selectedBookId
      };
    }

    case booking.ActionTypes.LOAD: {
      const book = action.payload as Booking;

      if (state.ids.indexOf(book.bookingGuid) > -1) {
        return state;
      }

      return {
        ids: [ ...state.ids, book.bookingGuid ],
        entities: Object.assign({}, state.entities, {
          [book.bookingGuid]: book
        }),
        selectedBookId: state.selectedBookId
      };
    }

    case booking.ActionTypes.SELECT: {
      return {
        ids: state.ids,
        entities: state.entities,
        selectedBookId: action.payload as string
      };
    }

    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedBookId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
