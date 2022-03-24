import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { Routes, RouterModule } from '@angular/router';
import { InformationPage } from './pages/informations/information.page';
import { EducationPage } from './pages/education/education.page';
import { SkillsPage } from './pages/skills/skills.page';
import { ProjectPage } from './pages/projects/project.page';
import { ExperiencePage } from "./pages/experiences/experience.page";
import {HttpClientModule} from "@angular/common/http";
import { MenuComponent } from './pages/menu/menu.page';
import { SkillComponent } from "./components/skill/skill.component";
import { LanguagesPage } from './pages/languages/languages.page';
import {GroupByPipeComponent} from "./groupBy/groupByPipe.component";
import { FormsModule } from "@angular/forms";
import { CollapseComponent } from './components/collapse/collapse.component';


const routes: Routes = [
  { path:'informations', component:InformationPage},
  { path:'experiences', component:ExperiencePage},
  { path:'education', component:EducationPage},
  { path:'skills', component:SkillsPage},
  { path:'projects', component:ProjectPage},
  { path:'menu', component:MenuComponent},
  { path: 'languages', component:LanguagesPage}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    InformationPage,
    EducationPage,
    SkillsPage,
    SkillComponent,
    ProjectPage,
    ExperiencePage,
    MenuComponent,
    LanguagesPage,
    GroupByPipeComponent,
    CollapseComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
