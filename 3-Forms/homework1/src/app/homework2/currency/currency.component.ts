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
  added:boolean = false;

  $firstOpt = new Subject<number>();
  $secondOpt = new Subject<number>();
  secondValue:number|string = "";
  
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
    this.secondValue = "";
    this.added = true
  }

  firstInput(value:any, num:number){
    this.inputParams[num] = {...this.inputParams[num], amount: value.target.value}
    this.checkAllFiedls() 
  }

  secondInput(value:any){
    if(!this.added){
      this.equivalent=0;
      this.inputFields = [0];
      this.inputParams = [];
      this.inputValues = [];
      this.countMoney(value)
    }
    

  }

  firstOption(value:any, num:number = 0){
    this.$firstOpt = value.target.value
    this.inputParams[num] = {...this.inputParams[num], course: value.target.value}  
    this.checkAllFiedls() 
  }

  secondtOption(value:any){
    this.$secondOpt = value.target.value;
    this.checkAllFiedls()
  }

  private countMoney(value:any = 0){
    if(value == 0){
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
    }else{
      if(typeof this.$firstOpt == 'string'){
        let course = (Number(this.$firstOpt) /(Number(this.$secondOpt) ));
        let money = value.target.value*course
        this.secondValue = money
        this.inputParams[0] = {course:  this.$firstOpt, amount: 0}

      }
      
    }
  }

  private checkAllFiedls(){
    if(this.inputParams.length>0){
      this.countMoney();
    }
  }
}