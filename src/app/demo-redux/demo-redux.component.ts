import { State } from "../_redux/state/main-state";
import { INCREMENT, DECREMENT } from "../_redux/actions/main-action-creator";
import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-demo-redux',
  templateUrl: './demo-redux.component.html',
  styleUrls: ['./demo-redux.component.css']
})


export class DemoReduxComponent implements OnInit {
counter:number;

  constructor(private store:Store<State>) { 
     store.select('mainStoreReducer')
      .subscribe( (data:State )=> {
        this.counter = data.counter;
      });
  }

  ngOnInit() {
  }

  increment(){
    this.store.dispatch({ type: INCREMENT , payload:{innerObject:{text:'Hellooooo!!!'}
    }});
  }

  decrement(){
    this.store.dispatch({ type: DECREMENT , payload:{innerObject:{text:'Hellooooo!!!'}
    }});
  }

}
