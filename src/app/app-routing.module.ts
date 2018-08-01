import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './component/c1/c1.component';
import { C2Component } from './component/c2/c2.component';
import { InvalidComponent } from './component/invalid/invalid.component';
const routes: Routes = [
  { path: '', redirectTo: '/c1', pathMatch: 'full' },
  { path: 'c1', component: C1Component },
  { path: 'c2', component: C2Component },
  { path: 'invalid', component: InvalidComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
