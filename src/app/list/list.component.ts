import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { OvertredingService } from '../service/overtreding.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private httpService: HttpClient, private overtredingService: OvertredingService) { }
  list = [];
  ngOnInit() {
    this.httpService.get('./assets/overtred.json').subscribe(
      data => {
        this.list = data as string[];   //fill the array with data
        //console.log(this.opnamelist[1]);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
  lijstvanovertredingen(){
    this.list = this.overtredingService.lijstalleovertredingen(this.list);
  }
}
