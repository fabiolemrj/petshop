import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Security } from 'src/app/utils/security.utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  public user: 
  User;

  ngOnInit() {
    this.user = Security.getUser();
  }

  logout(){
    Security.clear();
    this.router.navigate(['/login']);
  }

}
