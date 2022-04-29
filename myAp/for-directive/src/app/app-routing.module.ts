import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { SlidesComponent } from './slides/slides.component';
import { SolarSystemComponent } from './solar-system/solar-system.component';


const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'signup', component:SignupComponent},
  {path:'dashboard', component:MemberDashboardComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path: 'app-solar-system', component:SolarSystemComponent},
  {path: 'slides', component:SlidesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
