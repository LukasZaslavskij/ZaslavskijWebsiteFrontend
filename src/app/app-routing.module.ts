import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { MainPageComponent } from './main-page/main-page.component';
import { skillCreateComponent } from './skill-create/skill-create.component';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { SkillEditComponent } from './skill-edit/skill-edit.component';
import { SkillListComponent } from './skill-list/skill-list.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'skill-list' },
  { path: 'create-skill', component: skillCreateComponent },
  { path: 'skill-list', component: SkillListComponent },
  { path: 'skill-edit/:id', component: SkillEditComponent },
  { path: 'skill-detail/:id', component: SkillDetailComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: MainPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
