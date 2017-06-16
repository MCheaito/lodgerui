import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

//https://coryrylan.com/blog/build-a-angular-modal-dialog-with-angular-animate

@Component({
  selector: 'app-dialog',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class ShowMessageComponent implements OnInit {
  @Input() message:string ='';
  @Input() title:string='';
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
