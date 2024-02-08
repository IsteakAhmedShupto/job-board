import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  hide = true;

  formGroup!: FormGroup;

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  loginProcess() {
    if (this.formGroup.valid) {
      localStorage.setItem('username', this.formGroup.value.username);

      this.authService.login(this.formGroup.value).subscribe((result) => {
        // console.log(result);
        this.cookieService.set(
          'access_token',
          JSON.stringify(result),
          undefined,
          undefined,
          undefined,
          true,
          'Strict'
        );
        localStorage.setItem('refresh_token', result.refresh);
        this.router.navigate(['']);
        this.formGroup.reset();
      });
    }
  }
}
