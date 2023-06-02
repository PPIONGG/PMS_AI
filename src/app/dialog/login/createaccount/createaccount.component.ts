import { Component } from '@angular/core';

interface date {
  value: string;
  viewValue: string;
}
interface month {
  value: string;
  viewValue: string;
}
interface year {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {
  dates: date[] = [];
  years: year[] =[]
  dateselected = '1'
  monthselected = '1'
  yearselected = '2023'

  constructor() {
    for (let i = 1; i <= 31; i++) {
      this.dates.push({ value: i.toString(), viewValue: i.toString() });
    }
    for (let i = 2023; i >= 1905; i--){
      this.years.push({value:i.toString(),viewValue:i.toString()})
    }
  }
  months: month[] = [
    { value: '1', viewValue: 'ม.ค.' },
    { value: '2', viewValue: 'ก.พ.' },
    { value: '3', viewValue: 'มี.ค.' },
    { value: '4', viewValue: 'เม.ษ.' },
    { value: '5', viewValue: 'พ.ค.' },
    { value: '6', viewValue: 'มิ.ย.' },
    { value: '7', viewValue: 'ก.ค.' },
    { value: '8', viewValue: 'ส.ค.' },
    { value: '9', viewValue: 'ก.ย.' },
    { value: '10', viewValue: 'ต.ค.' },
    { value: '11', viewValue: 'พ.ย.' },
    { value: '12', viewValue: 'ธ.ค.' },
  ]
}
