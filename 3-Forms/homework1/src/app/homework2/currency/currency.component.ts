import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpServiceService } from '../http-service.service'
import { info } from "./infoobjectInterface";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  data:any = {};
  inputFields:number[] = [0];
  inputParams:info[] = [];
  inputValues:number[] = [];

  equivalent:number | string = "";

  $firstOpt = new Subject<number>();
  $secondOpt = new Subject<number>();

  constructor(
    private httpData: HttpServiceService,
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

  onAdd(){
    this.inputFields.push(this.inputFields.length);
  }

  firstInput(value:any, num:number){
    this.inputParams[num] = {...this.inputParams[num], amount: value.target.value}
    this.checkAllFiedls()  
  }
 
  firstOption(value:any, num:number){
    this.inputParams[num] = {...this.inputParams[num], course: value.target.value}  
    this.checkAllFiedls()  
  }

  secondtOption(value:any){
    this.$secondOpt = value.target.value;
    this.checkAllFiedls()
  }

  private countMoney(){
    if(typeof this.$secondOpt == 'string'){
        this.inputParams.map((field,i)=>{
          if(Object.keys(field).length == 2){
            let course = Number(this.$secondOpt)/Number(field.course);
            let money =  Number(field.amount)*course;
            this.inputValues[i]=money;
          }
        })
        this.inputValues.length > 0 ? this.equivalent = this.inputValues.reduce((sum, i) => sum+i) : this.inputValues
    }
  }

  private checkAllFiedls(){
    if(this.inputParams.length>0){
      this.countMoney();
    }
  }
}