import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postajob',
  templateUrl: './postajob.component.html',
  styleUrl: './postajob.component.css',
})
export class PostajobComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  resultObj: any[] = [];
  ngOnInit(): void {}

  formGroup = new FormGroup({
    employer: new FormControl({
      value: localStorage.getItem('username'),
      disabled: true,
    }),
    title: new FormControl(''),
    location: new FormControl(''),
    description: new FormControl(''),
    requirements: new FormControl(''),
    salary: new FormControl(''),
    company_email: new FormControl(''),
  });

  onSubmit() {
    this.http
      .post<any>(`http://127.0.0.1:8000/api/users/refresh`, {
        refresh: localStorage.getItem('refresh_token'),
      })
      .subscribe((data) => {
        this.http
          .post<any>(
            `http://127.0.0.1:8000/api/joblistings/`,
            this.formGroup.value,
            {
              headers: new HttpHeaders({
                Authorization: `Bearer ${data.access}`,
              }).set('Content-Type', 'application/json'),
            }
          )
          .subscribe((data) => {
            this.resultObj.push(data);
            this.router.navigate(['/joblistings']);
          });
      });
  }
}
