import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThrowerPage } from './thrower.page';

const routes: Routes = [
  {
    path: '',
    component: ThrowerPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThrowerPageRoutingModule {}
