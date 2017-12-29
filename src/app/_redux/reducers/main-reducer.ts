import {ActionReducer, Action} from "@ngrx/store";
import {State, intitialState} from "../state/main-state";
import {INCREMENT,DECREMENT, EVENT_FROM_EFFECT} from "../actions/main-action-creator";

export const mainStoreReducer: ActionReducer<State> =
  (state = intitialState, action: Action) => {
  console.log('Action came in! ' + action.type);
    switch (action.type) {
      case INCREMENT: {
        // console.log('Increment action being handled!');
        return {
          counter: state.counter + 1
        }
      }
    case DECREMENT: {
        // console.log('Decrement action being handled!');
        return {
          counter: state.counter - 1
        }
      }
      case EVENT_FROM_EFFECT: {
        // console.log('we cheesin in the reducer over here!');
        return {
          counter: 4
        }
      }
      default: {
        return state;
      }
    }
  };