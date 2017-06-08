import { IAppState,INCREMENT } from '../_store/index';
import { Component, OnInit } from '@angular/core';
import {NgRedux }    from  'ng2-redux';
@Component({
  selector: 'app-demo-redux',
  templateUrl: './demo-redux.component.html',
  styleUrls: ['./demo-redux.component.css']
})
export class DemoReduxComponent implements OnInit {

  constructor(private _redux: NgRedux<IAppState>) { 
    
  }

  ngOnInit() {
  }

increment()
{
  this._redux.dispatch({type:INCREMENT});
}
}
