import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-joblistings',
  templateUrl: './joblistings.component.html',
  styleUrl: './joblistings.component.css',
})
export class JoblistingsComponent implements OnInit {
  str: any | string;
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  resultObj: any[] = [];

  ngOnInit(): void {
    this.http
      .get<any>('http://127.0.0.1:8000/api/joblistings/')
      .subscribe((data) => {
        this.resultObj.push(data);
      });
  }

  prevObj() {
    if (this.resultObj[0].previous !== null) {
      this.http.get<any>(`${this.resultObj[0].previous}`).subscribe((data) => {
        this.resultObj.pop();
        this.resultObj.push(data);
      });
    }
  }

  nextObj() {
    if (this.resultObj[0].next !== null) {
      this.http.get<any>(`${this.resultObj[0].next}`).subscribe((data) => {
        this.resultObj.pop();
        this.resultObj.push(data);
      });
    }
  }

  searchInputValue = new FormControl('');

  searchFilter() {
    this.http
      .get<any>(
        `http://127.0.0.1:8000/api/joblistings/?search=${this.searchInputValue.getRawValue()}`
      )
      .subscribe((data) => {
        if (this.resultObj.length > 0) {
          this.resultObj.pop();
        }
        this.resultObj.push(data);
      });
  }
}
