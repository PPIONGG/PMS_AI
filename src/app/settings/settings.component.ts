import { Component } from '@angular/core';
import { BtactiveService } from '../btactive.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  constructor(private btactive : BtactiveService){
  }

  ngOnInit(): void {
      this.btactive.updateSettings()
  }
}
