import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Request {
  content: string;
  date: string;
}
interface RequestId extends Request {
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 	requestsCol: AngularFirestoreCollection<Request>;
  requests: any;

  date:string;
  content:string;

  requestDoc: AngularFirestoreDocument<Request>;
  request: Observable<Request>;
  
  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.requestsCol = this.afs.collection('requests');
    //this.posts = this.postsCol.valueChanges();
    this.requests = this.requestsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Request;
          const id = a.payload.doc.id;
          return { id, data };
        })
      })
  }

  addRequest() {
    this.afs.collection('requests').add({'date': new Date().toLocaleString(), 'content': this.content});
  }

  getRequest(requestId) {
    this.requestDoc = this.afs.doc('requests/'+requestId);
    this.request = this.requestDoc.valueChanges();
  }

  deleteRequest(requestId) {
    this.afs.doc('requests/'+requestId).delete();
  }
}