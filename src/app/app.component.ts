import { Component } from '@angular/core';
import { AtmService } from './atm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';

  amount: any;
  result: any;
  status: string;
  errmsg: string;
  errCode: string

  constructor(public service: AtmService) { }

  clearResp()
  {
    this.status=undefined;
  }




  getMoney(FormData) {
    this.amount = FormData.form.value;
    if (this.amount.amt == "" || this.amount.amt == null || this.amount.amt == undefined) {
      this.errmsg = "Please Enter amount";
      this.status = "FAILED";
    }
    else {
      console.log(this.amount);
      this.service.getMoney(this.amount.amt).subscribe((response) => {
        console.log(response);
        this.result = response['noteMap'];
        this.status = response['status'];
        this.errmsg = response['message'];
        console.log(this.result);
        console.log(this.status);
        console.log(this.errmsg);

      },
        (err) => {
          let error = err.error;
          this.status = error.status;
          this.errmsg = error.message;
          this.errCode = error.errorCode;

          console.log(error);
        });
    }
  }
}
