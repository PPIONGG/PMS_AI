import { Component } from '@angular/core';
import { UsersapiService } from 'src/app/service/usersapi.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastService } from 'src/app/service/toast.service';
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
  genderselected = ''
  gender = ''
  firstname2: string | undefined;
  lastname2: string | undefined;
  email2: string | undefined;
  password2: string | undefined;

  constructor(private usersapi : UsersapiService,
    private dialogRef: MatDialogRef<CreateaccountComponent>,
    private toast : ToastService ) {
    console.log('usersapi ', this.usersapi.getUsersData());
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

  dialogRefclose(){
    this.dialogRef.close(true);
  }
  createAccount() {
    if (!this.firstname2 || !this.lastname2 || !this.email2 || !this.password2 || !this.dateselected || !this.monthselected || !this.yearselected || !this.genderselected) {
      this.toast.showError('กรอกข้อมูลไม่ครบถ้วน')
      return;
    }
    this.gender = '';
    if (this.genderselected === '1') {
      this.gender = 'หญิง';
    } else if (this.genderselected === '2') {
      this.gender = 'ชาย';
    } else {
      this.gender = 'กำหนดเอง';
    }
    const user = {
      firstname: this.firstname2,
      lastname: this.lastname2,
      email: this.email2,
      password: this.password2,
      date: this.dateselected,
      month: this.monthselected,
      years : this.yearselected,
      gender : this.gender
    };
    this.usersapi.CreateUsersData(user).subscribe(
      (response) => {
        console.log('User created:', response);
        this.dialogRef.close(true);
        this.toast.showSuccess('สมัครเสร็จสิ้น')
      },
      (error) => {
        console.error('Error creating user:', error);
      }
    );
  }
}
