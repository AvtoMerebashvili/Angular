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
  $firstOpt = new Subject();
  $secondOpt = new Subject();

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
    let equiivalent = this.countMoney(value)
    this.$firstInput.next(equiivalent)
  }

  firstOption(value:any){
    this.$firstOpt = value.target.value;
  }

  secondtOption(value:any){
    this.$secondOpt = value.target.value;
  }

  countMoney(value:any){
    let course = ((Number(this.$secondOpt) / Number(this.$firstOpt)));
    let money = value.target.value*course
    return money
  }


}
