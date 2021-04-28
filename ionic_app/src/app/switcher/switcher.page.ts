import { Component } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'switcher.page.html',
  styleUrls: ['switcher.page.scss']
})
export class SwitcherPage {

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        let navigationExtras = this.router.getCurrentNavigation().extras;
        setTimeout(() => {
          this.router.navigate(['/tabs/counter'], navigationExtras);
        }, 30)
      }
    });
  }

  startSwitch() {
    let navigationExtras: NavigationExtras = {state: { shouldSwitch: true }}
    this.router.navigate(['/tabs/counter'], navigationExtras);
  }

}
