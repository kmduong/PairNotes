import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.css']
})
export class EditingComponent implements OnInit {

  constructor(public notesT : NotesService, public auth : AuthService) { }

  ngOnInit() {
  }
	public value: string = `
    <p>The RichTextEditor triggers events based on its actions. </p>
	  <p> The events can be used as an extension point to perform custom operations.</p>
	  <p>https://www.syncfusion.com/kb/9864/how-to-get-started-easily-with-syncfusion-angular-7-rich-text-editor</p>`
}
