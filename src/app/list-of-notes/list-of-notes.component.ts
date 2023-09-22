import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { AuthService} from '../services/auth.service'

import { NotesService} from '../services/notes.service'
import {  ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ShareService} from '../services/share.service';

import { Note } from '../services/note.model'; 


@Component({
  selector: 'app-list-of-notes',
  templateUrl: './list-of-notes.component.html',
  styleUrls: ['./list-of-notes.component.css']
})
export class ListOfNotesComponent implements OnInit, OnDestroy {
  
  note = '';
  filter = '';
  private itemsCollection: AngularFirestoreCollection<Note>;
  noteC: Observable<Note[]>;
  navigationSubscription;


  constructor(public auth: AuthService, public notes: NotesService,
     private afs: AngularFirestore, public share : ShareService, private route: ActivatedRoute, private router: Router) { 
      this.itemsCollection = this.afs.collection<Note>(`notes`);
      this.noteC = this.itemsCollection.valueChanges();


      this.navigationSubscription = this.router.events.subscribe((e: any) => {

        if (e instanceof NavigationEnd) {
          this.initialiseInvites();
        }
      });
  }
  initialiseInvites() {
    this.filter=this.route.snapshot.paramMap.get('courseFilter');
  }
  ngOnInit() {
    this.share.currentMessage.subscribe(message => this.note = message);
  }
  ngOnDestroy() {
    if (this.navigationSubscription) {  
       this.navigationSubscription.unsubscribe();
    }
  }

}
