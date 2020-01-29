import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReelTestComponent } from './reelTest/reelTest.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ReelTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
