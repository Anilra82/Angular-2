import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  log(){
    console.log("Logging service.")
  }

  constructor() { }

}
