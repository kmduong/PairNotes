import { Component , OnInit , ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import { AngularFirestore } from '@angular/fire/firestore';


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
  title = 'pairnotesfinal';
  onLoad() { }
  ngOnInit() {
	  var editor = this.iframe.nativeElement.contentDocument ;
	  editor.designMode = 'on';
	  for(var i = 10 ; i >= 1 ; i-- ) {
		  var dropdown = document.createElement('option');
		  dropdown.text = i.toString();
		  this.fontSize.nativeElement.add(dropdown, 0);
	  }
		
  }
  receiveSearch($event) {
	  this.note = $event
  }
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
  }
  save(){
		let data = this.iframe.nativeElement.innerHTML;
		var url = 'swag.html';
		$.ajax({url: url,type:"POST",data: data});
  }
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
		this.items = db.collection('items').valueChanges();
  }
}
