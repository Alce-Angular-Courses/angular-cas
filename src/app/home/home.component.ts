import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: Array<string>;

  constructor() { }

  ngOnInit() {
    this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  }

}
