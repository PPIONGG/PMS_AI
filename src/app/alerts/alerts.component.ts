import { Component } from '@angular/core';
import { BtactiveService } from '../service/btactive.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent {
  constructor(private btactive : BtactiveService){
  }

  ngOnInit(): void {
    // this.btactive.updateAlerts()
  }
}
