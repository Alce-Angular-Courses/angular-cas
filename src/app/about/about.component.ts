import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  titulo: string;
  autor: string;
  constructor() { }

  ngOnInit() {
    this.titulo = 'Información del Curso de Angular';
    this.autor = 'Alejandro Cerezo';
  }

}
