import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-uploadresume',
  templateUrl: './uploadresume.component.html',
  styleUrl: './uploadresume.component.css',
})
export class UploadresumeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  confirm = false;

  fileurl!: string;
  file_submitted_for = localStorage.getItem('clickedjobid') || 0;
  candidate_email!: string;

  submitResume() {
    this.http
      .post<any>(`http://127.0.0.1:8000/api/users/refresh`, {
        refresh: localStorage.getItem('refresh_token'),
      })
      .subscribe((data) => {
        this.http
          .post<any>(
            `http://127.0.0.1:8000/api/resumeupload/`,
            JSON.stringify({
              file: 'https://shupto.com',
              file_submitted_for: this.file_submitted_for.toString(),
              candidate_email: this.candidate_email,
            }),
            {
              headers: new HttpHeaders({
                Authorization: `Bearer ${data.access}`,
              }).set('Content-Type', 'application/json'),
            }
          )
          .subscribe((data) => {
            console.log(data);
            this.confirm = true;
          });
      });
  }
}
