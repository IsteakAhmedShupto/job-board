import { Component, OnInit } from '@angular/core';
// import { CookiesService } from 'ngx-universal-cookies';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent implements OnInit {
  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    // console.log(this.cookieService.get('access_token'));
  }
}
