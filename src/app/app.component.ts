import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ghada';
  initialize = true;
  isLiked: boolean;
  myMessage = 'you liked this post';
  initializationLikes = 100;


  onChangeStatus() {
    console.log('I m informed by my child');
    this.isLiked = !this.isLiked;

  }
}
