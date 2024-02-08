import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrl: './candidate.component.css',
})
export class CandidateComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  resultObj: any[] = [];
  foundObj = false;

  ngOnInit(): void {
    this.http
      .post<any>(`http://127.0.0.1:8000/api/users/refresh`, {
        refresh: localStorage.getItem('refresh_token'),
      })
      .subscribe((data) => {
        this.http
          .get<any>(`http://127.0.0.1:8000/api/candidate`, {
            headers: new HttpHeaders({
              Authorization: `Bearer ${data.access}`,
            }),
          })
          .subscribe((data) => {
            // console.log(data);
            if (data.count == 0) {
              this.resultObj.push({ count: 0 });
            }
            for (let i = 0; i < data.results.length; i++) {
              const dataIndex = data.results[i];
              if (dataIndex.user == localStorage.getItem('username')) {
                if (this.resultObj.length > 0) this.resultObj.pop();
                this.resultObj.push(dataIndex);
                this.foundObj = true;
              } else {
                this.resultObj.push({ count: 0 });
              }
            }
          });
      });
  }

  formGroup = new FormGroup({
    user: new FormControl({
      value: localStorage.getItem('username'),
      disabled: true,
    }),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    about: new FormControl(''),
    portfolio: new FormControl(''),
    github: new FormControl(''),
    linkedin: new FormControl(''),
    x: new FormControl(''),
    hashnode: new FormControl(''),
    devto: new FormControl(''),
  });

  onSubmit() {
    this.http
      .post<any>(`http://127.0.0.1:8000/api/users/refresh`, {
        refresh: localStorage.getItem('refresh_token'),
      })
      .subscribe((data) => {
        this.http
          .post<any>(
            `http://127.0.0.1:8000/api/candidate/`,
            this.formGroup.value,
            {
              headers: new HttpHeaders({
                Authorization: `Bearer ${data.access}`,
              }).set('Content-Type', 'application/json'),
            }
          )
          .subscribe((data) => {
            this.resultObj.push(data);
            // console.log(data);
            this.router.navigate(['']);
          });
      });
  }
}
