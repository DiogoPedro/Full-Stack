import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  /*Fazendo a importacoes do componente pai para o componente filho */
  //O uso de ! apos, o nome da propriedade da classe, afimar para TypeScript que ele vai ser inicializado;
  
  @Input() name: String = "unknown";
  @Input() age: number = -1;
  @Input() objectExample = {name: "unknown", age: -1, email: "email@gmail.com"};

  /*Caracteristicas da classe, como constructor e metodos */
  constructor() { }

  ngOnInit(): void {
  }

}
