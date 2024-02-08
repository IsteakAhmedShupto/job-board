import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeredit',
  templateUrl: './employeredit.component.html',
  styleUrl: './employeredit.component.css',
})
export class EmployereditComponent {
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
          .get<any>(`http://127.0.0.1:8000/api/employer`, {
            headers: new HttpHeaders({
              Authorization: `Bearer ${data.access}`,
            }),
          })
          .subscribe((data) => {
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

    // console.log(this.resultObj);
  }

  formGroup = new FormGroup({
    user: new FormControl({
      value: localStorage.getItem('username'),
      disabled: true,
    }),
    name: new FormControl(''),
    about: new FormControl(''),
    email: new FormControl(''),
    website: new FormControl(''),
  });

  onSubmit() {
    // console.log(this.formGroup.getRawValue());
    this.http
      .post<any>(`http://127.0.0.1:8000/api/users/refresh`, {
        refresh: localStorage.getItem('refresh_token'),
      })
      .subscribe((data) => {
        this.http
          .put<any>(
            `http://127.0.0.1:8000/api/employer/${this.resultObj[0].id}`,
            this.formGroup.value,
            {
              headers: new HttpHeaders({
                Authorization: `Bearer ${data.access}`,
              }).set('Content-Type', 'application/json'),
            }
          )
          .subscribe((data) => {
            this.resultObj.push(data);
            this.router.navigate(['/employer']);
          });
      });
  }
}
