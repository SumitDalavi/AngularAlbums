import { Component, OnInit } from '@angular/core';
import { Users } from '../shared/models/users';
import { SharedService } from '../shared/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userDetails: Users[];
  constructor(
    public sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sharedService.getUsers().subscribe(res => {
      this.userDetails = res;
    });
  }

  getUserAlbum(id) {
    this.router.navigate(['/albums', id]);
  }

}
