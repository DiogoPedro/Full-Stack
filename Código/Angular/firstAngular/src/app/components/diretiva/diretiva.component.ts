import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  templateUrl: './diretiva.component.html',
  styleUrls: ['./diretiva.component.css']
})
export class DiretivaComponent implements OnInit {
  classes = ["classeA", "classeB"];
  size = 25;
  color = "purple";
  font = "Arial";

  constructor() { }

  ngOnInit(): void {
  }

}
