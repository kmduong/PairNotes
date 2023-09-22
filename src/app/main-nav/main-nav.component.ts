import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { NotesService} from '../services/notes.service';
import { ShareService} from '../services/share.service';
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})


export class MainNavComponent {
	editName = '';
	tags = '';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    setFields(change){
	  if (change.userScore != null){
		  console.log("True");
	  }
	  else
	  {
		  console.log("inside the if statement");
		  change.userScore = 0;
		  change.numberOfRatings = 0;
		  change.canEdit = [];
			change.courses = [];
			change.voted = [];
		  this.auth.updateUserData(change);
	  }
  }
	constructor(private breakpointObserver: BreakpointObserver, public auth: AuthService 
		, public notes: NotesService, public share : ShareService) {
			//this.share.getLan().subscribe(lan => console.log(lan));
	}


   noteSearch  = ''
   @Output() searchEvent = new EventEmitter<string>();
   
   sendSearch(newValue) {
		 this.noteSearch = newValue;
		 this.share.changeMessage(this.noteSearch)
		 //this.share.updateLan(newValue);
	   if ( newValue)
	   {
			this.searchEvent.emit(this.noteSearch)
	   }
	   else
	   {
		   this.searchEvent.emit('All')
	   }
	 }
	 addUser(change, user){
		if (this.editName != '' && this.editName != user.email && 
		change.canEdit.indexOf(this.editName) === -1){
			change.canEdit.push(this.editName);
			this.notes.updateNoteData(change);
		}
	}
		removeUser(change, user){
			if(this.editName != user.email){
	    const index: number = change.canEdit.indexOf(this.editName);
		 if (index !== -1) {
				 change.canEdit.splice(index, 1);
		 this.notes.updateNoteData(change);
		 }
		 }
		}

		addTag(change){
			console.log(change.tags);
			if (this.tags != '' && change.tags.indexOf(this.tags) === -1){
				change.tags.push(this.tags);
				this.notes.updateNoteData(change);
			}
		}

		removeTag(change){
	    const index: number = change.tags.indexOf(this.tags);
		 if (index !== -1) {
				 change.tags.splice(index, 1);
		 this.notes.updateNoteData(change);
		 }
		}
		refresh(): void {
			window.location.reload();
	}
		upVote(user, note){
			if (note.voted == undefined){
				note.voted = [];
			}
			if (note.downVoted == undefined){
				note.downVoted = [];
			}

			if (note.downVoted.indexOf(user.uid) !== -1){
				note.downVoted.splice(note.downVoted.indexOf(user.uid), 1);
				note.upvotes += 1;
				this.notes.updateNoteData(note);
			} else if (note.voted.indexOf(user.uid) === -1) { 
				note.voted.push(user.uid);
				note.upvotes += 1;
				this.notes.updateNoteData(note);
			}
		}
		downVote(user, note){
			if (note.voted == undefined){
				note.voted = [];
			}
			if (note.downVoted == undefined){
				note.downVoted = [];
			}


			if (note.voted.indexOf(user.uid) !== -1){
			note.voted.splice(note.voted.indexOf(user.uid), 1);
			note.upvotes -= 1;
			this.notes.updateNoteData(note);
			} else if (note.downVoted.indexOf(user.uid) === -1) { 
				note.downVoted.push(user.uid);
				note.upvotes -= 1;
				this.notes.updateNoteData(note);
			}
		}
}
