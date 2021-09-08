import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {


  constructor(private _http: HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4ea69ef411c644e8bc474a1642469d2e";
  healthnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=4ea69ef411c644e8bc474a1642469d2e";
  
  navbar(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  healthNews():Observable<any>{
    return this._http.get(this.healthnewsApiUrl);
  }
}
