import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BtactiveService } from '../service/btactive.service';
import { ToastService } from '../service/toast.service';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

interface ButtonActiveMapping {
  [key: string]: boolean[];
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dashboardbt: boolean | undefined
  alertsbt: boolean | undefined
  userbt: boolean | undefined
  settingsbt: boolean | undefined
  isButtonActive1: boolean | undefined
  isButtonActive2: boolean | undefined
  isButtonActive3: boolean | undefined
  isButtonActive4: boolean | undefined

  constructor(
    private router: Router,
    private btactive: BtactiveService,
    private cdr: ChangeDetectorRef,
    private toast: ToastService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.updateservice()
    this.route.queryParams.subscribe(params => {
      if (params['fromLogin']) {
        this.toast.showSuccess()
        this.location.replaceState('/menu/dashboard');

      }
    });
    if (this.router.url === '/menu/dashboard') {
      this.btactive.updateDashboard()
      console.log('testdashboard');
    } else if (this.router.url === '/menu/alerts') {
      this.btactive.updateAlerts()
      console.log('testalerts');
    } else if (this.router.url === '/menu/users') {
      this.btactive.updateUsers()
      console.log('testusers');
    } else if (this.router.url === '/menu/setting') {
      this.btactive.updateSettings()
      console.log('testsettings');
    }
  }

  updateservice() {
    this.btactive.dashboardbt$.subscribe(value => {
      this.dashboardbt = value;
      this.cdr.detectChanges(); // เพิ่มบรรทัดนี้
    })
    this.btactive.alertsbt$.subscribe(value => {
      this.alertsbt = value;
      this.cdr.detectChanges(); // เพิ่มบรรทัดนี้
    })
    this.btactive.userbt$.subscribe(value => {
      this.userbt = value;
      this.cdr.detectChanges(); // เพิ่มบรรทัดนี้
    })
    this.btactive.settingsbt$.subscribe(value => {
      this.settingsbt = value;
      this.cdr.detectChanges(); // เพิ่มบรรทัดนี้
    })

    this.btactive.isButtonActive1$.subscribe(value => {
      this.isButtonActive1 = value;
      this.cdr.detectChanges(); // เพิ่มบรรทัดนี้
    })
    this.btactive.isButtonActive2$.subscribe(value => {
      this.isButtonActive2 = value;
      this.cdr.detectChanges(); // เพิ่มบรรทัดนี้
    })
    this.btactive.isButtonActive3$.subscribe(value => {
      this.isButtonActive3 = value;
      this.cdr.detectChanges(); // เพิ่มบรรทัดนี้
    })
    this.btactive.isButtonActive4$.subscribe(value => {
      this.isButtonActive4 = value;
      this.cdr.detectChanges(); // เพิ่มบรรทัดนี้
    })

    this.btactive.updateServicebtservice();
  }

  changeButtonImage(buttonName: string) {
    const buttonMapping: ButtonActiveMapping = {
      'dashboard': [false, true, true, true],
      'alerts': [true, false, true, true],
      'users': [true, true, false, true],
      'settings': [true, true, true, false]
    };

    const buttonActiveMapping: ButtonActiveMapping = {
      'dashboard': [true, false, false, false],
      'alerts': [false, true, false, false],
      'users': [false, false, true, false],
      'settings': [false, false, false, true]
    };

    [this.dashboardbt, this.alertsbt, this.userbt, this.settingsbt] = buttonMapping[buttonName];
    [this.isButtonActive1, this.isButtonActive2, this.isButtonActive3, this.isButtonActive4] = buttonActiveMapping[buttonName];
  }
}
