import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../admin/adminShared/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userEmail = localStorage.getItem('User');

  constructor() { }

  ngOnInit() {

  }

}
