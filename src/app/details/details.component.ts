import { Component, OnInit } from '@angular/core';
import { RssService } from '../rss.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  blogs = [];

  constructor(private rssService: RssService) { 
    this.rssService.getBlogFeed()
    .subscribe( res => {
      let i = 0;
      while(i < res["found"])
      {

        let excerpt= res["posts"][i]["excerpt"];
        let title = res["posts"][i]["title"];
        let link = res["posts"][i]["URL"];

        this.blogs.push({link, title, excerpt});
        i++;
      }
      
    });
  }
}
