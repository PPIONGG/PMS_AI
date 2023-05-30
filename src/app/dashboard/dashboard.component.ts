import { Component, OnInit } from '@angular/core';
import { BtactiveService } from '../service/btactive.service';

interface Interval {
  name: string;
  value: boolean;
}

interface City {
  name: string,
  code: string,
  value?: boolean
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private btactive: BtactiveService) {
  }
  rangeDates: Date[] | undefined;
  selectedInterval: Interval | undefined;
  // selectedCities: City | undefined;
  data: any;
  options: any;

  Intervalvalue: Interval[] = [
    { name: 'All Data', value: false },
    { name: '6 Months Data', value: false },
    { name: 'Custom', value: true },
  ];
  cities: City[] = [
    { name: 'Abnormality graph', code: 'ABG' },
    { name: '%PR graph', code: 'PRG' },
    { name: 'Waranty Meter graph', code: 'WMG' },
    { name: 'Radiant graph', code: 'RG' },
    { name: 'Module Temperature graph', code: 'MTG' },
    { name: 'Ambient Temperature graph', code: 'ATG' }
  ];
  selectedCodes:any[] =[]
  ngOnInit(): void {
    this.btactive.updateDashboard()
    this.datatestchart()
    this.onSelectionChange()
  }
  selectedCities: City[] = [];

  onSelectionChange() {

    this.selectedCodes = this.selectedCities.map(city => city.code);
    console.log(this.selectedCodes);
  }

  datatestchart(){
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              type: 'line',
              label: 'Dataset 1',
              // borderColor: ,
              borderWidth: 2,
              fill: false,
              tension: 0.4,
              data: [50, 25, 12, 48, 56, 76, 42]
          },
          {
              type: 'bar',
              label: 'Dataset 2',
              // backgroundColor:,
              data: [21, 84, 24, 75, 37, 65, 34],
              borderColor: 'white',
              borderWidth: 2
          },
          {
              type: 'bar',
              label: 'Dataset 3',
              // backgroundColor: ,
              data: [41, 52, 24, 74, 23, 21, 32]
          }
      ]
  };
  }
}
