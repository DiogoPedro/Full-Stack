import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstAngular';
  name: string = "Diogo Pedro";
  age = 22;
  objExample = {
    name: "Diogo Pedro",
    age: 22,
    email: "dpfs@cin.ufpe.br"
  }
}
