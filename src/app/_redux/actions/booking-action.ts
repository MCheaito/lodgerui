import { Action } from '@ngrx/store';
import { Booking } from '../../_models/booking.model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
/*export const ActionTypes = {
  SEARCH:           type('[Booking] Search'),
  SEARCH_COMPLETE:  type('[Booking] Search Complete'),
  LOAD:             type('[Booking] Load'),
  SELECT:           type('[Booking] Select'),
};*/

export const ActionTypes = {
  SEARCH:           '[Booking] Search',
  SEARCH_COMPLETE:  '[Booking] Search Complete',
  LOAD:             '[Booking] Load',
  SELECT:           '[Booking] Select',
};


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class SearchAction implements Action {
  public readonly type = ActionTypes.SEARCH;

  constructor(public payload: string) {
  }
}

export class SearchCompleteAction implements Action {
  public readonly type = ActionTypes.SEARCH_COMPLETE;

  constructor(public payload: Booking[]) {
   }
}

export class LoadAction implements Action {
  public readonly type = ActionTypes.LOAD;

  constructor(public payload: Booking) {
   }
}

export class SelectAction implements Action {
  public readonly type = ActionTypes.SELECT;

  constructor(public payload: string) {
   }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = SearchAction
  | SearchCompleteAction
  | LoadAction
  | SelectAction;
