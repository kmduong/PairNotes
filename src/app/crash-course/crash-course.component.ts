import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthGuard } from '../services/auth.guard';
import { HttpClientExt, IObservable, IObservableError, ResponseType, ErrorType } from 'angular-extended-http-client';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-crash-course',
  templateUrl: './crash-course.component.html',
  styleUrls: ['./crash-course.component.css']
})
export class CrashCourseComponent implements OnInit {
  lectureNumber = '';
  courseName = '';
constructor( private client: HttpClient, private readonly afs: AngularFirestore) { 
  
  }

  ngOnInit() {
  }
        onSubmit() {
          var stringToPost = "They entered the city with UNLF forces on 10 April, facing minimal resistance but hampered by their lack of maps. The fall of the city was announced the next day. The Tanzanians cleared out the remaining pockets of opposition, while jubilant civilians celebrated through indiscriminate, destructive looting. Amin was deposed, his forces were scattered, and a new government was installed. The battle marked the first time in the modern history of the continent that an African state seized the capital of another African country and deposed its government";
          var allDocs =  this.afs.collection("notes").get();
          
        //  allDocs.forEach(function (value) {
        // //for each doc check if name field matches and also if chapter field matches
        // //if so append to stringToPost

        //   }); 
           console.log(this.client.post<any>("http://api.smmry.com/&SM_API_KEY=6CF114201B", {"sm_api_content": stringToPost}));
           
      }

}
