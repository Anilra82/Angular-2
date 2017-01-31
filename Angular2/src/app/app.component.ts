import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  name = {
    fName:'RAJ',
    lName:'SINGH'
  }

  clickMe(e){
    alert("I AM CLICKED!!!")
    console.log("I am clicked!!!")
  }

  alertMe(e){
    alert("DANGER!!!")
    console.log("Danger!!!")

  }

}
