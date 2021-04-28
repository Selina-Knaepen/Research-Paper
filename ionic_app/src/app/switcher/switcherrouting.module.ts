import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwitcherPage } from './switcher.page';

const routes: Routes = [
  {
    path: '',
    component: SwitcherPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitcherPageRoutingModule {}
