import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    debugger;
    this.homeService.getData()
      .subscribe((res: any) => {
        debugger;
        console.log(res);
      });
  }
}
