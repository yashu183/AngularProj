import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp1';
  dataToChild = "Hello child";
  userDetails = {
    name : "Yashu",
    age : 20,
    email : "cyashu2000@gmail.com"
  };
}
