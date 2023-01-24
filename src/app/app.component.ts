// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'output';
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'output';

  onomatopoeias : string[] = [];

  onReceiveNewOnomatopia(onomatopoeia : string) {
    this.onomatopoeias?.push(onomatopoeia);
  }
}