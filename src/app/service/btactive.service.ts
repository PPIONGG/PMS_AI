import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BtactiveService {
  constructor() { }
  private dashboardbtSubject = new BehaviorSubject<boolean>(false);
  private alertsbtSubject = new BehaviorSubject<boolean>(true);
  private userbtSubject = new BehaviorSubject<boolean>(true);
  private settingsbtSubject = new BehaviorSubject<boolean>(true);

  private isButtonActive1Subject = new BehaviorSubject<boolean>(false);
  private isButtonActive2Subject = new BehaviorSubject<boolean>(false);
  private isButtonActive3Subject = new BehaviorSubject<boolean>(false);
  private isButtonActive4Subject = new BehaviorSubject<boolean>(false);

  dashboardbt$ = this.dashboardbtSubject.asObservable();
  alertsbt$ = this.alertsbtSubject.asObservable();
  userbt$ = this.userbtSubject.asObservable();
  settingsbt$ = this.settingsbtSubject.asObservable();

  isButtonActive1$ = this.isButtonActive1Subject.asObservable();
  isButtonActive2$ = this.isButtonActive2Subject.asObservable();
  isButtonActive3$ = this.isButtonActive3Subject.asObservable();
  isButtonActive4$ = this.isButtonActive4Subject.asObservable();

  updateServicebtservice(){
    this.updateValues(true, true, true, true, false, false, false, false);
  }

  updateDashboard() {
    this.updateValues(false, true, true, true, true, false, false, false);
  }

  updateAlerts() {
    this.updateValues(true, false, true, true, false, true, false, false);
  }

  updateUsers() {
    this.updateValues(true, true, false, true, false, false, true, false);
  }

  updateSettings() {
    this.updateValues(true, true, true, false, false, false, false, true);
  }

  private updateValues(
    dashboardbt: boolean,
    alertsbt: boolean,
    userbt: boolean,
    settingsbt: boolean,
    isButtonActive1: boolean,
    isButtonActive2: boolean,
    isButtonActive3: boolean,
    isButtonActive4: boolean
  ) {
    this.dashboardbtSubject.next(dashboardbt);
    this.alertsbtSubject.next(alertsbt);
    this.userbtSubject.next(userbt);
    this.settingsbtSubject.next(settingsbt);
    this.isButtonActive1Subject.next(isButtonActive1);
    this.isButtonActive2Subject.next(isButtonActive2);
    this.isButtonActive3Subject.next(isButtonActive3);
    this.isButtonActive4Subject.next(isButtonActive4);
  }
}
