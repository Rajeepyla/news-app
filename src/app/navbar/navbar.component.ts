import { Component, OnInit } from '@angular/core';
import {NewsapiService} from '../service/newsapi.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private services:NewsapiService) { }
  navbarDisplay:any = [];
  searchText: any;
  ngOnInit(): void {
    this.services.navbar().subscribe((result)=>{ 
     console.log(result);
      this.navbarDisplay = result.articles;
      
    })
  }

}
