import {Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {PostService} from './service/post.service';
import {Post} from './modele/post';
import {Subscription} from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  title = 'photo-review';
  posts: Post[];
  currentPost;
  currentIndex;
  clearIntervalInstance;

  constructor(private postService: PostService) {
    // pour changer de post toutes les 6s :
    // this.currentIndex = 0;
    // this.clearIntervalInstance = this.changePost();
  }

  ngOnInit() {
    this.subscription = this.postService.getPost().subscribe(
      (data: Post[]) => {
        this.posts = data;
      },
      err => {}
    );
  }

  changePost() {
    setInterval(() => {
      this.currentPost = this.posts[this.currentIndex++];
      }, 6000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    // clearInterval(this.clearIntervalInstance);
  }

  getDateDifference(date: string): number {
    const today = new Date();
    const createdDate = new Date(date);
    return moment(today).diff(moment(createdDate), 'days');
  }

  getDateDifferenceLabel(date: string): string {
    const diff = this.getDateDifference(date);
    if (diff === 0) {
      return 'Aujourd\'hui';
    } else {
      return 'Il y a ' + diff + ' jours';
    }
  }
}
