import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OvertredingService {

  constructor() { }
  private plaatslist: Array<string> = [];
  private snelheidlist: Array<string> = [];

  zoekenOpnameplaats(plaats, lijstplaats): Array<string> {
    this.plaatslist = [];
    for (let pl of lijstplaats) {
      if (plaats == pl.opnameplaats_straat ) {
        this.plaatslist.push(pl);
      }
    }
    return this.plaatslist;
  }

  zoekenovertredingsnelheid(snelheid, lijstsnelheid): Array<string>{

    this.snelheidlist = [];
    for(let snel of lijstsnelheid){
      if (snelheid <= snel.aantal_overtredingen_snelheid){
        this.snelheidlist.push(snel);
        //console.log(snel);
      }
    }
    return this.snelheidlist;
  }

}
