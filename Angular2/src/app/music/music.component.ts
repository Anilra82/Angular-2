import {Component} from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent{


  constructor(private logger: AppService) {}

  logIt(){
    this.logger.log();
  }

}
