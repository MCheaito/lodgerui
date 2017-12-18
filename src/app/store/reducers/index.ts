import * as fromRouter from '@ngrx/router-store';
import { ActivatedRouteSnapshot, RouterStateSnapshot,Params } from '@angular/router';
import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';

export interface RouterStateUrl {
    url: string; 
    queryParams: Params; 
    params: Params;
}

//state : exposer RouterReducerState
export interface State {
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>; 
}

//reducers: exposer ActionReducerMap
export const  reducers:ActionReducerMap<State> = {
    routerReducer: fromRouter.routerReducer
};

//selectors
export const getRouterState = createFeatureSelector<
fromRouter.RouterReducerState<RouterStateUrl>
>('routerReducer');

export class CustomSerializer
implements fromRouter.RouterStateSerializer<RouterStateUrl> {

/*
 cette fonction sera appele à chaque fois on envoie l'action NAVIGATE ou si Anlgular envoie une action NAVIGATION , ou a chaque changement dans url, 
 par conséquence  return { url, queryParams, params }; nous retour une nouvelle version de STATE 

 */
serialize(routerState: RouterStateSnapshot): RouterStateUrl {
  const { url } = routerState; // est l'equivalent de : const url  = routerState.url see http://exploringjs.com/es6/ch_destructuring.html
  const { queryParams } = routerState.root;

  let state: ActivatedRouteSnapshot = routerState.root;

  while (state.firstChild) {
    state = state.firstChild;
  }
  const { params } = state;

  return { url, queryParams, params };
}
}