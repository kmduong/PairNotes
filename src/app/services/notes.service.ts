import { Injectable } from '@angular/core';
import { Note } from './note.model'; // optional
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';


import { switchMap } from 'rxjs/operators';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
private itemsCollection: AngularFirestoreDocument<Note>;
note$: Observable<Note>;
noteID = this.afs.createId();
  constructor( private afs: AngularFirestore, private router: Router,  private afAuth: AngularFireAuth) { 

 }
    public updateNoteData(note) {
      const noteRef: AngularFirestoreDocument<Note> = this.afs.doc(`notes/${note.id}`);
      if (note.voted == undefined) {
        note.voted = [];
        note.downVoted = [];
      }

      const data = {
      id: note.id,
      content: note.content,
      upvotes: note.upvotes, 
      voted: note.voted,
      downVoted: note.downVoted,
      tags: note.tags,
      name: note.name,
      course: note.course,
      lecture: note.lecture,
      ownedBy: note.ownedBy,
      ownedByID: note.ownedByID,
      canEdit: note.canEdit,
      } 
      this.itemsCollection = this.afs.doc<Note>(`notes/${note.noteId}`);
    	//this.note$ = this.itemsCollection.valueChanges();
	    return noteRef.set(data, { merge: true })
  }

  public createNote( nameC, lectureC, courseC, idC, display, displayID,  email ) {
    const noteRef: AngularFirestoreDocument<Note> = this.afs.doc(`notes/${idC}`);
    const list: any[] =  [email];
    const data = {
    id: idC,
    content: '',
    upvotes: 0,//note.upvotes, 
    voted: [],
    downVoted: [],
    tags: [],//note.tags,
    name: nameC,//name,
    course: courseC,//subject,
    lecture: lectureC,
    ownedBy: display,
    ownedByID: displayID,
    canEdit: list,
    } 
	this.itemsCollection = this.afs.doc<Note>(`notes/${idC}`);
	this.note$ = this.itemsCollection.valueChanges();
  noteRef.set(data, { merge: true })
}

public getNote(id: string){
  console.log(`notes/${id}`);
  this.itemsCollection = this.afs.doc<Note>(`notes/${id}`);
  this.note$ = this.itemsCollection.valueChanges();
}

setContent(id: string, contentC: string){
  this.itemsCollection = this.afs.doc<Note>(`notes/${id}`);
  const data = {
    content: contentC
  }
  
  this.itemsCollection.set(  data  );
}
 getContent(id){
  
 }
  getNotes(){
    return this.note$;
  }
}
