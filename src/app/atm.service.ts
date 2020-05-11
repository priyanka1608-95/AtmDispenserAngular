import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AtmService {

  constructor(public http:HttpClient) { }

  getMoney(amt)
  {
    return this.http.get("http://localhost:8082/atm/getAmountFromAtm/"+amt);
  }

}
