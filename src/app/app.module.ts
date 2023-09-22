import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainNavComponent } from './main-nav/main-nav.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'; 
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { EditingComponent } from './editing/editing.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { NotesComponent } from './notes/notes.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CrashCourseComponent } from './crash-course/crash-course.component';
import { HomeComponent } from './home/home.component';
import { DisplaysummaryComponent } from './displaysummary/displaysummary.component';
import { HttpClientModule } from '@angular/common/http';
import { ListOfNotesComponent } from './list-of-notes/list-of-notes.component'; 
//import { NoteComponent } from './service/note/note.component';



@NgModule({
  declarations: [
  AppComponent,
	MainNavComponent,
	EditingComponent,
	UserProfileComponent,
	LoginComponent,
	AccountComponent,
	NotesComponent,
	TextEditorComponent,
	CrashCourseComponent,
	HomeComponent,
	DisplaysummaryComponent,
	ListOfNotesComponent,
//	NoteComponent
  ],
  imports: [
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  MatMenuModule,
	MatFormFieldModule,
	MatInputModule,
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
  AppRoutingModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireDatabaseModule,
	AngularFirestoreModule,
	AngularFireAuthModule,
  RichTextEditorAllModule,
	RouterModule,
	CKEditorModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }