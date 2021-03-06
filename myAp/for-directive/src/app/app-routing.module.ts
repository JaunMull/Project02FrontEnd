import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { LoginComponent } from './login/login.component';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { RecoverinfoComponent } from './recoverinfo/recoverinfo.component';
import { SignupComponent } from './signup/signup.component';

import { SlidesComponent } from './slides/slides.component';

import { ThreedmodelComponent } from './threedmodel/threedmodel.component';
import { TwodmodelComponent } from './twodmodel/twodmodel.component';

import { SolarSystemComponent } from './solar-system/solar-system.component';
import { SlidessComponent } from './slides2/slides.component';



const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'signup', component:SignupComponent},
  {path:'dashboard', component:MemberDashboardComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},

  {path:'recover', component:RecoverinfoComponent},
  {path:'information', component:InformationComponent},
  {path:'twodmodel', component:TwodmodelComponent},
  {path:'threedmodel', component:ThreedmodelComponent},
  {path: 'app-solar-system', component:SolarSystemComponent},
  {path: 'slides', component:SlidesComponent},
  {path: 'slidess', component:SlidessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
