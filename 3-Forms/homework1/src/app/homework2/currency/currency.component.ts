import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpServiceService } from '../http-service.service'

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  
  data:any = {};

  $firstInput = new Subject<number>()
  $secondInput = new Subject<number>()
  $firstOpt = new Subject<number>();
  $secondOpt = new Subject<number>();

  constructor(
    private httpData: HttpServiceService
  ) { }

  ngOnInit(): void {
    this.data = this.httpData.getData()
      .pipe(
        map(data=> data.rates), 
          map(data => Object.getOwnPropertyNames(data)
            .map(name=> ({currencyName: name, currencyValue: data[name]})
          )
        )
      )
  }

  firstInput(value:any){
    let equivalent = this.countMoney(value,1)
    this.$firstInput.next(equivalent)
  }
  secondInput(value:any){
    let equivalent = this.countMoney(value,2)
    this.$secondInput.next(equivalent)
  }

  firstOption(value:any){
    this.$firstOpt = value.target.value;
  }

  secondtOption(value:any){
    this.$secondOpt = value.target.value;
  }

  countMoney(value:any,n:number){
    let course;
    if(n==1){
      course = Number(this.$secondOpt) / Number(this.$firstOpt);
    }else{
      course = Number(this.$firstOpt)/ Number(this.$secondOpt);
    }
      let money = value.target.value*course
      return money
  }


}
