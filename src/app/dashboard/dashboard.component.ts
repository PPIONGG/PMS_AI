import { Component, OnInit } from '@angular/core';
import { BtactiveService } from '../service/btactive.service';
import { FormControl } from '@angular/forms';

interface Interval {
  value: boolean;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

constructor(private btactive : BtactiveService){
}

lineStylesData: any;
basicOptions: any;
rangeDates: Date[] | undefined;
selectedValue: boolean | undefined
IntervalSelector: Interval[] = [
  { value: false, viewValue: 'All data' },
  { value: false, viewValue: '6 Months data' },
  { value: true, viewValue: 'custom' },
];
ngOnInit(): void {
this.btactive.updateDashboard()
this.viewtest()
this.data_chart()
}
viewtest() { }
toppings = new FormControl('');
toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
divs: number[] = [1, 2, 3, 4, 5, 6];
data_chart() {
  this.lineStylesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        tension: .4,
        borderColor: '#42A5F5'
      },
      {
        label: 'Second Dataset',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderDash: [5, 5],
        tension: .4,
        borderColor: '#66BB6A'
      },
      {
        label: 'Third Dataset',
        data: [12, 51, 62, 33, 21, 62, 45],
        fill: true,
        borderColor: '#FFA726',
        tension: .4,
        backgroundColor: 'rgba(255,167,38,0.2)'
      }
    ]
  };
  this.basicOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#ebedef'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#ebedef'
        },
        grid: {
          color: 'rgba(255,255,255,0.2)'
        }
      },
      y: {
        ticks: {
          color: '#ebedef'
        },
        grid: {
          color: 'rgba(255,255,255,0.2)'
        }
      }
    }
  };
}
}
