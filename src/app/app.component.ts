import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'unitTesting';
  isToggle: Boolean = true;

  constructor() {}

  getSum(a: any, b: any) {
    return a + b;
  }

  toggleState() {
    this.isToggle = !this.isToggle;
  }
}
