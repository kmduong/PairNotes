import { Component , OnInit , ViewChild, ElementRef } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthGuard } from './services/auth.guard';

import { AuthService} from './services/auth.service'

import { NotesService} from './services/notes.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  implements OnInit {
	@ViewChild('theWYSIWYG') iframe: ElementRef
	@ViewChild('fontSizeChanger') fontSize: ElementRef
	srcDocContent:string;
	note = 'All';
	master = 'Testing';
  title = 'pairnotesfinal';
  onLoad() { }
  constructor( public auth: AuthService, public notes: NotesService) {

				
  }
  ngOnInit(
 //this.router.navigate(['/login'])
  ) {
	  /*
	  var editor = this.iframe.nativeElement.contentDocument ;
	  editor.designMode = 'on';
	  for(var i = 10 ; i >= 1 ; i-- ) {
		  var dropdown = document.createElement('option');
		  dropdown.text = i.toString();
		  this.fontSize.nativeElement.add(dropdown, 0);
	  }
		*/
  }
	//+++++++++++++++++++++++++++++OLD EDITOR +++++++++++++++++++++++++++++++++++++++++
  receiveSearch($event) {
	  this.note = $event
  }
  
  setFields(change){
	  if (change.userScore){
	  }
	  else
	  {
		  console.log("inside the if statement");
		  change.userScore = 0;
		  change.numberOfRatings = 0;
		  this.auth.updateUserData(change);
	  }
  }
  /*
  handleBold(){
		let editor = this.iframe.nativeElement.contentDocument ;
		console.log(editor.body.innerHTML); // this is where the content document is stored
		editor.execCommand("Bold", false, null);
  }
  handleItalic(){
		let editor = this.iframe.nativeElement.contentDocument;
		editor.execCommand("Italic", false, null);
  }
  handleSup(){
		let editor = this.iframe.nativeElement.contentDocument;
		editor.execCommand("SuperScript", false, null);
  }
  handleSub(){
		let editor = this.iframe.nativeElement.contentDocument;
		editor.execCommand("Subscript", false, null);
  }
  handleStrike(){
		let editor = this.iframe.nativeElement.contentDocument;
		editor.execCommand("Strikethrough", false, null);
  }
  handleOrdered(){
		let editor = this.iframe.nativeElement.contentDocument;
		editor.execCommand("InsertOrderedList", false, "newOL" + Math.round(Math.random()* 1000));
  }
  handleUnordered(){
		let editor = this.iframe.nativeElement.contentDocument;
		editor.execCommand("InsertUnorderedList", false, "newOL" + Math.round(Math.random()* 1000));
  }
  handleColorM(event){
		let editor = this.iframe.nativeElement.contentDocument;
		editor.execCommand("ForeColor", false, event.target.value);
  }
  handleColorB(event){
		let editor = this.iframe.nativeElement.contentDocument;
		editor.execCommand("BackColor", false, event.target.value);
  }
  handleFontChange(event){
		let editor = this.iframe.nativeElement.contentDocument;
		editor.execCommand("FontName", false, event.target.value);
  }
  handleSize(event){
		let editor = this.iframe.nativeElement.contentDocument;
		editor.execCommand("FontSize", false, event.target.value);
  }
  handleLink(){ 
		let url = prompt("Enter a URL", "http://");
		let editor = this.iframe.nativeElement.contentDocument;
		editor.execCommand("CreateLink", false, url);
  }
  handleUnLink(){
		let editor = this.iframe.nativeElement.contentDocument;
		editor.execCommand("UnLink", false, null);
  }
  handleUndo(){
		let editor = this.iframe.nativeElement.contentDocument;
		editor.execCommand("undo", false, null);
  }
  handleRedo(){
		let editor = this.iframe.nativeElement.contentDocument;
		editor.execCommand("redo", false, null);
  } */
// +++++++++++++++++++++++++++++++++++++++Old editor END++++++++++++++++++++++++++
	
// -----------------------------------syncfusion editor
name='';
lecture='';
course='';
	onSubmit(form: NgForm): void {
	  alert(form.value.name);
	}
	onKey(form: NgForm) { // without type info
    alert(form.value.getText);
		}
		onSubmit2() {
			//console.log(this.name);
			//var id = this.afs.createId();
			//var temp = this.notes.createNote(this.name, this.lecture, this.course);

		}
	 public readonly: boolean = true;
  public value: string = `
    <p>The RichTextEditor triggers events based on its actions. </p>
	  <p> The events can be used as an extension point to perform custom operations.</p>
	  <p>https://www.syncfusion.com/kb/9864/how-to-get-started-easily-with-syncfusion-angular-7-rich-text-editor</p>`
}
