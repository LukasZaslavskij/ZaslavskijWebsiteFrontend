import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillCreateComponent } from './skill-create/skill-create.component';
import { SkillEditComponent } from './skill-edit/skill-edit.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginInfoComponent } from './header/login-info/login-info.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DropdownDirective } from './shared/appDropdown.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilterPipe } from './shared/search-filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    SkillCreateComponent,
    SkillEditComponent,
    SkillListComponent,
    SkillDetailComponent,
    AuthComponent,
    LoginInfoComponent,
    MainPageComponent,
    DropdownDirective,
    DialogComponent,
    SearchFilterPipe



  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    NgbModule,
    MatDialogModule,
    Ng2SearchPipeModule
  ],
  providers: [AuthGuard, SkillListComponent, SkillCreateComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
