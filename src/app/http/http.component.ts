import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
  SOMEDATA:string = 'hello';
  myurl ='http://media.mw.metropolia.fi/wbma/uploads/';
  constructor(private http: HttpClient) { }
  getJSON() {
    this.http.get('assets/package.json').subscribe((data) => {
      console.log(data);
      //this.SOMEDATA = data.license;
    });
  }
  getMEDIA () {
    this.http.get(' http://media.mw.metropolia.fi/wbma/media').subscribe((img) => {
      this.myurl += img[0].filename;
    });
  }
  ngOnInit() {
    this.getMEDIA();
  }

}
