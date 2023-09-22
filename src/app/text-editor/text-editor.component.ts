import { Component , OnInit , ViewChild, ElementRef } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthGuard } from '../services/auth.guard';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged} from 'rxjs/operators';


import { AuthService} from '../services/auth.service'

import { NotesService} from '../services/notes.service'
import {  ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {
  value = '';
  test = '';
  disabledBoolean = true;
  public Editor = ClassicEditor;
  model = '';
  modelChanged: Subject<string> = new Subject<string>();
  mote : NotesService;

  
  constructor(public auth: AuthService, public notes: NotesService, private route: ActivatedRoute) { 
    console.log(this.route.snapshot.paramMap.get('docID'));    
    notes.getNote(this.route.snapshot.paramMap.get('docID'));


    this.modelChanged.pipe(
      debounceTime(1000), 
      distinctUntilChanged())
      .subscribe(model => {this.model = model;
        console.log(model);
        this.notes.updateNoteData(this.mote);
      });

    
   }

  ngOnInit() {

  }
  
  onReady(content){
  this.value = content;
  //setInterval(()=> { this.onLey(content) }, 5 * 1000);
  
  }

  onLey(note){
      this.notes.updateNoteData(note);
    }

  onKey(text, note){
      //note.content = this.value;
      //this.notes.updateNoteData(note);
      this.model = note.content;
      this.mote = note;
      this.modelChanged.next(text);
  }
  removeN(){
    this.notes.getNote("1");
  }

  check(){
    console.log("this is a test");
    console.log(this.value)
  }
  public readonly: boolean = true;

  setFalse(){
    this.disabledBoolean = false;
  }
  doNothing(){
  }


}
