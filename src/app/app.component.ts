import { AppService } from './app.service';
import { Component } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  height: number;
  weight: number;

  bmi: number;

  constructor(private appService: AppService) {}

  onClickSubmit() {
    let data = {height: this.height, weight: this.weight};
    this.appService.getBMI889(data)
      .subscribe(res => this.bmi = res.bmi);
  }
}
