import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'', redirectTo: 'signup', pathMatch: 'full'},
  {path:'signup', component:SignupComponent},
  {path:'dashboard', component:MemberDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
