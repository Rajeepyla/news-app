import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';


@Component({
  selector: 'app-healthnews',
  templateUrl: './healthnews.component.html',
  styleUrls: ['./healthnews.component.css']
})
export class HealthnewsComponent implements OnInit {
  healthnewsDisplay:any = [];

  constructor(private _services:NewsapiService) { }
  searchText: any;
  ngOnInit(): void {
    this._services.healthNews().subscribe((result)=>{ 
      this.healthnewsDisplay = result.articles;
      
    })
  }

}
