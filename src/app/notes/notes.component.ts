import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthGuard } from '../services/auth.guard';

import { AuthService} from '../services/auth.service'

import { NotesService} from '../services/notes.service'



//This component is to create a new note and add it
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  
  constructor( public auth: AuthService, public notes: NotesService, 
    private readonly afs: AngularFirestore) { 
  }

  ngOnInit() {
  }
  name='';
  lecture='';
  course='';
    onSubmit(form: NgForm): void {
      alert(form.value.name);
    }
    onKey(form: NgForm) { // without type info
      alert(form.value.getText);
      }
      onSubmit2(display, displayID, email) {
        //console.log(display);
        var id = this.afs.createId();
        var temp = this.notes.createNote(this.name, this.lecture, this.course, id, display, displayID , email);
  
      }

     public readonly: boolean = true;
    public value: string = `
      <p>The RichTextEditor triggers events based on its actions. </p>
      <p> The events can be used as an extension point to perform custom operations.</p>
      <p>https://www.syncfusion.com/kb/9864/how-to-get-started-easily-with-syncfusion-angular-7-rich-text-editor</p>`
  
}
