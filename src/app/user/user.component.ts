import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../modele/user';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  @Input() username: string;
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subscription = this.userService.getUser(this.username).subscribe(
      (data: User) => {
        this.user = data;
      },
      err => {}
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
