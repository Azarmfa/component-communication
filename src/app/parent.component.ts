import { Component } from '@angular/core';

@Component({
  selector: 'parent-component',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  toChild: string;
  childToParentValue: string;
  constructor() {
    this.toChild = 'Value to child';
  }

  childToParent(e: any) {
    this.childToParentValue = e;
  }
}
