import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OvertredingService } from '../service/overtreding.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-zoeken',
  templateUrl: './zoeken.component.html',
  styleUrls: ['./zoeken.component.css']
})
export class ZoekenComponent implements OnInit {

  constructor(private httpService: HttpClient,private overtredingService: OvertredingService) { }

  opnameplaatsFormGroup: FormGroup;
  opnamelist = [];
  zoeken = [];
  plaats;
  
  ngOnInit() {
    this.httpService.get('./assets/overtred.json').subscribe(
      data => {
        this.opnamelist = data as string[];   //fill the array with data
        //console.log(this.opnamelist[1]);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
    this.opnameplaatsFormGroup = new FormGroup({
      opnameplaats: new FormControl(''),
    });
  }
  gevondenopnameplaats(){
    this.plaats = this.opnameplaatsFormGroup.value.opnameplaats;
    this.zoeken = this.overtredingService.zoekenOpnameplaats(this.plaats,this.opnamelist);
    //console.log(this.zoeken);
  }
}
