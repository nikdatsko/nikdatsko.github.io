import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'portfolio',
    loadChildren: './portfolio/portfolio.module#PortfolioModule'
  },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
