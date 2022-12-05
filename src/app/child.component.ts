import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() toChild: string;
  val: string;
  @Output() eventChild: EventEmitter<string> = new EventEmitter<string>();

  keyupfunctionality(ev: any) {
    this.eventChild.emit(ev.target.value);
  }
}
