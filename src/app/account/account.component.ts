import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  nameChange = '';
  courseName = '';
  constructor( public auth: AuthService ) { }

  ngOnInit() {
  }
 updateName(change){
	 change.displayName = this.nameChange;
	 this.auth.updateUserData(change);
 }
 updatePicture(change){
	 //change.displayName = this.nameChange;
	 //this.auth.updateUserData(change);
 }
 addCourse(change){
	 if (this.courseName != '' && change.courses.indexOf(this.courseName) === -1){
		 change.courses.push(this.courseName);
		 this.auth.updateUserData(change);
	 }
 }
 removeCourse(change){
  const index: number = change.courses.indexOf(this.courseName);
    if (index !== -1) {
        change.courses.splice(index, 1);
		this.auth.updateUserData(change);
    }
 }
}
