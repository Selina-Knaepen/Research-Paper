import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'counter',
        loadChildren: () => import('../counter/counter.module').then(m => m.CounterPageModule)
      },
      {
        path: 'switcher',
        loadChildren: () => import('../switcher/switcher.module').then(m => m.SwitcherPageModule)
      },
      {
        path: 'thrower',
        loadChildren: () => import('../thrower/thrower.module').then(m => m.ThrowerPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/counter',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/counter',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
