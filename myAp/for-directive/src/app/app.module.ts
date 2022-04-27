import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RecoverinfoComponent } from './recoverinfo/recoverinfo.component';
import { TwodmodelComponent } from './twodmodel/twodmodel.component';
import { ThreedmodelComponent } from './threedmodel/threedmodel.component';
import { InformationComponent } from './information/information.component';
import { SolarSystemComponent } from './solar-system/solar-system.component';


@NgModule({
  declarations: [
    AppComponent,
    MemberDashboardComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    RecoverinfoComponent,
    TwodmodelComponent,
    ThreedmodelComponent,
    InformationComponent,
    SolarSystemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{

}

