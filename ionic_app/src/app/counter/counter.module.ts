import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CounterPage } from './counter.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CounterPageRoutingModule } from './counter-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CounterPageRoutingModule
  ],
  declarations: [CounterPage]
})
export class CounterPageModule {}
