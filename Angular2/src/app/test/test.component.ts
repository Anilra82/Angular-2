import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  title_test = 'test works!';
  nameList = [];

  constructor(private dataService:DataService) {}

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (data) => this.nameList = data);
  }
}
