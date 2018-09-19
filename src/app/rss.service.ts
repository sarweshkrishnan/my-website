import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RssService {

  constructor(private http: HttpClient) { }

  getBlogFeed = () => {
    return this.http.get('https://public-api.wordpress.com/rest/v1/sites/sarweshkrishnan.wordpress.com/posts');
  }
}
