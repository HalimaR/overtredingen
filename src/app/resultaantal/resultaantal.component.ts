import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { OvertredingService } from '../service/overtreding.service';

@Component({
  selector: 'app-resultaantal',
  templateUrl: './resultaantal.component.html',
  styleUrls: ['./resultaantal.component.css']
})
export class ResultaantalComponent implements OnInit {

  constructor(private httpService: HttpClient, private overtredingService: OvertredingService) { }

  snelheidFormGroup: FormGroup;
  snelheidlist = [];
  zoeken = [];
  snel;
  ngOnInit() {
    this.httpService.get('./assets/overtred.json').subscribe(
      data => {
        this.snelheidlist = data as string[];   //fill the array with data
        //console.log(this.opnamelist[1]);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
    this.snelheidFormGroup = new FormGroup({
      snelheid: new FormControl(''),
    });
  }
  gevondensnelheid() {
    this.snel = this.snelheidFormGroup.value.snelheid;
    this.zoeken = this.overtredingService.zoekenovertredingsnelheid(this.snel, this.snelheidlist);
    console.log(this.zoeken);
  }

}
