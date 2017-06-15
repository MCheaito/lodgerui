import { Injectable } from '@angular/core';

@Injectable()
export class ShowMessageService {
  public message: string = null;
  public title: string = null;
  public visible = false;

  constructor() { }



}
