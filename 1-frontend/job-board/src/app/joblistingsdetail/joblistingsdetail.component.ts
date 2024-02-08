import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-joblistingsdetail',
  templateUrl: './joblistingsdetail.component.html',
  styleUrl: './joblistingsdetail.component.css',
})
export class JoblistingsdetailComponent implements OnInit {
  id!: number;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cookieService: CookieService
  ) {}

  resultObj: any[] = [];
  date: any;

  ngOnInit(): void {
    // http://127.0.0.1:8000/api/users/refresh - post request using the refresh token you have

    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];

      this.http
        .post<any>(`http://127.0.0.1:8000/api/users/refresh`, {
          refresh: localStorage.getItem('refresh_token'),
        })
        .subscribe((data) => {
          this.http
            .get<any>(`http://127.0.0.1:8000/api/joblistings/${this.id}`, {
              headers: new HttpHeaders({
                Authorization: `Bearer ${data.access}`,
              }),
            })
            .subscribe((data) => {
              this.resultObj.push(data);
              localStorage.setItem('clickedjobid', this.resultObj[0].id);
              this.date = new Date(this.resultObj[0].listing_date);
            });
        });

      // this.http
      //   .get<any>(`http://127.0.0.1:8000/api/joblistings/${this.id}`, {
      //     headers: new HttpHeaders({
      //       Authorization: `Bearer ${
      //         JSON.parse(this.cookieService.get('access_token')).access
      //       }`,
      //     }),
      //   })
      //   .subscribe((data) => {
      //     this.resultObj.push(data);
      //     // console.log(this.resultObj[0]);
      //     this.date = new Date(this.resultObj[0].listing_date);
      //   });
    });
  }
}
