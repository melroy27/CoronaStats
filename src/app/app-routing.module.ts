import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CountrycounterComponent } from './countrycounter/countrycounter.component';
import { WorldcounterComponent } from './worldcounter/worldcounter.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'worldcounter', component: WorldcounterComponent },
  { path: 'countrycounter', component: CountrycounterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
