import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { Routes, RouterModule } from '@angular/router';
import { InformationComponent } from './pages/information/information.component';
import { FormationComponent } from './pages/formation/formation.component';
import { LicenseComponent } from './pages/license/license.component';
import { CompetitionComponent } from './pages/competition/competition.component';
import { ProjectComponent } from './pages/project/project.component';
import { ExperienceComponent } from "./pages/experience/experience.component";
import {HttpClientModule} from "@angular/common/http";
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  { path:'information', component:InformationComponent},
  { path:'experience', component:ExperienceComponent},
  { path:'formation', component:FormationComponent},
  { path:'license', component:LicenseComponent},
  { path:'competition', component:CompetitionComponent},
  { path:'project', component:ProjectComponent},
  { path:'menu', component:MenuComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    InformationComponent,
    FormationComponent,
    LicenseComponent,
    CompetitionComponent,
    ProjectComponent,
    ExperienceComponent,
    MenuComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
