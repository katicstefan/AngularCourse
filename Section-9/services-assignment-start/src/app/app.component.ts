import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  actionsCount: number = 0;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
      this.activeUsers = this.usersService.activeUsers;
      this.inactiveUsers = this.usersService.inactiveUsers;
      this.usersService.userChangedCounter.subscribe(
        (counter: number) => {
          this.actionsCount = counter;
        }
      );
  }
}
