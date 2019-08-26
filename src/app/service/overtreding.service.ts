import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OvertredingService {

  constructor() { }
  private plaatslist: Array<string> = [];

  zoekenOpnameplaats(plaats, lijstplaats): Array<string> {
    this.plaatslist = [];
    for (let pl of lijstplaats) {
      
      if (plaats == pl.opnameplaats_straat ) {

        this.plaatslist.push(pl);
        //let jsonstring = '{"name":' + pl.name + '; "type" :' + pl.type + '; "trainer" : ' + pok.trainer + '; "gender" : ' + pok.gender + '; "owned" : ' + pok.owned + '}';
      }
    }
    return this.plaatslist;
  }

  
}
