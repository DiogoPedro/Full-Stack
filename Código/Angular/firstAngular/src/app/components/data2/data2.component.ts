import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data2',
  templateUrl: './data2.component.html',
  styleUrls: ['./data2.component.css']
})
export class Data2Component implements OnInit {
  //Para declarar um evento que vai ser compartilhado é necessario importar o Output, o EventEmitter se for o caso de um evento
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  @Input() name: String = "unknown";
  @Input() age: number = -1;
  @Input() objectExample = {name: "unknown", age: -1, email: "email@gmail.com"};

  show : boolean = true;

  peoples = [
    {name: "Diogo Pedro", age: 22},
    {name: "Pedro Diogo", age: 22},
    {name: "Pedrogo Dio", age: 22},
    {name: "Drope Diogo", age: 22}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  showEmail(): void {
    this.show = !this.show;
  }

  active(): void {
    this.changeNumber.emit();
  }
}
