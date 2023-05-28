import { Component } from '@angular/core';
import { BtactiveService } from '../service/btactive.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
constructor(private btactive : BtactiveService){
}

ngOnInit(): void {
this.btactive.updateDashboard()
}
}
