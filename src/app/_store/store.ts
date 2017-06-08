import {INCREMENT} from './actions';

export interface IAppState
{
    counter :number;
}

export function rootReducer(state:IAppState, action):IAppState
{
 switch(action)
 {
     case INCREMENT: return {counter: state.counter+1};
 }
    return state;
}

export const INITIAL_STATE:IAppState ={counter:0};
