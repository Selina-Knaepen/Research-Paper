import { Component } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.page.html',
  styleUrls: ['counter.page.scss']
})
export class CounterPage {
  count = 0;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        let navigationExtras = this.router.getCurrentNavigation().extras;
        setTimeout(() => {
          this.router.navigate(['/tabs/switcher'], navigationExtras);
        }, 30)
      }
    });
  }

  add() {
    this.count += 1;
  }

  substract() {
    this.count -= 1;
  }

}
