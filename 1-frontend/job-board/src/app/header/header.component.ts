import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {}

  isLoggedIn() {
    // return this.cookieService.get('access_token') ? false : true;
    return localStorage.getItem('refresh_token') ? false : true;
  }

  logout() {
    // this.cookieService.deleteAll('access_token');
    localStorage.clear();
  }
}
