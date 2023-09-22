import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditingComponent } from './editing/editing.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './services/auth.guard';
import { NotesService } from './services/notes.service';
import { NotesComponent } from './notes/notes.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { CrashCourseComponent } from './crash-course/crash-course.component';
import { HomeComponent } from './home/home.component';
import { ListOfNotesComponent } from './list-of-notes/list-of-notes.component'; 


const routes: Routes = [
  {
    path: 'editing',
    component: EditingComponent,
    data: { title: 'Note Taking' },
	canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'account',
    component: AccountComponent,
    data: { title: 'Details' },
	canActivate: [AuthGuard]
  },
  {
    path: 'notes',
    component: NotesComponent,
    data: { title: 'Details' },
	canActivate: [AuthGuard]
  },
  {
    path: 'text-editor',
    component: TextEditorComponent,
    data: { title: 'Details' },
	canActivate: [AuthGuard]
  }, {
    path: 'crash-course',
    component: CrashCourseComponent,
    data: { title: 'Details' },
	canActivate: [AuthGuard]
  },
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Details' },
	canActivate: [AuthGuard]
  },
  {
    path: 'note-list',
    component: ListOfNotesComponent,
    data: { title: 'Details' },
  canActivate: [AuthGuard],
  runGuardsAndResolvers: 'always',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }