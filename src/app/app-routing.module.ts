import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { skillCreateComponent } from './skill-create/skill-create.component';
import { SkillEditComponent } from './skill-edit/skill-edit.component';
import { SkillListComponent } from './skill-list/skill-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-skill' },
  { path: 'create-skill', component: skillCreateComponent },
  { path: 'skill-list', component: SkillListComponent },
  { path: 'skill-edit/:id', component: SkillEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
