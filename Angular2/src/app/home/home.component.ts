import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title_home = 'Angular 2';

  constructor() { }

  ngOnInit() {
  }

  clickMe(){
    console.log("I am clicked!!!")
  }

  alertMe(){
    alert("DANGER!!!")
  }
}
