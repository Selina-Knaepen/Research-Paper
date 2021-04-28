import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwitcherPage } from './switcher.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SwitcherPageRoutingModule } from './switcherrouting.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SwitcherPageRoutingModule
  ],
  declarations: [SwitcherPage]
})
export class SwitcherPageModule {}
