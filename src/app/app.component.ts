import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  downloadData = [];

  constructor() {
    this.downloadData.push('a');
    this.test(this.downloadData, this.name);
    console.log(this.downloadData, 'data', this.name);
  }
  test(downloadData, names) {
    downloadData = [];
    names = '';
    console.log(downloadData, names);
  }
}
let a = [2, 6, 3, 5];
outside(a);
console.log(a, 'after');
function outside(a) {
  a.pop();
  console.log(a);
}
