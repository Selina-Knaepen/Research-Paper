import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'thrower.page.html',
  styleUrls: ['thrower.page.scss']
})
export class ThrowerPage {

  constructor() {}

  throwException() {
    throw new Error('Something went wrong!');
  }

}
