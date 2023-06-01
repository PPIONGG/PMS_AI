import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeComponent } from '../dialog/login/home/home.component';
import { AboutComponent } from '../dialog/login/about/about.component';
import { ContactComponent } from '../dialog/login/contact/contact.component';
import { ForgotComponent } from '../dialog/login/forgot/forgot.component';
import { CreateaccountComponent } from '../dialog/login/createaccount/createaccount.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  hide = true;
  progressValue: number = 0;
  hideprogress: boolean = false
  constructor(
    private router: Router,
    private dialog: MatDialog
  ) { }



  openDialog(dialognumber: string) {
    if (dialognumber == 'home') {
      const dialogRef = this.dialog.open(HomeComponent, {
        width: '1000px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      })
    }
    else if (dialognumber == 'abount') {
      const dialogRef = this.dialog.open(AboutComponent, {
        width: '1000px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      })
    }
    else if (dialognumber == 'contact') {
      const dialogRef = this.dialog.open(ContactComponent, {
        width: '1000px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      })
    }
    else if (dialognumber == 'forgot') {
      const dialogRef = this.dialog.open(ForgotComponent, {
        width: '500px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      })
    }
    else if (dialognumber == 'createaccount') {
      const dialogRef = this.dialog.open(CreateaccountComponent, {
        width: '500px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      })
    }
  }

  login(): void {
    this.router.navigate(['/menu'], { queryParams: { fromLogin: true } });
  }
  onSubmit() {
    this.router.navigate(['/menu']);
  }
  reloadPage() {
    this.progressValue = 0; // เริ่มต้นค่าความคืบหน้าที่ 0
    this.hideprogress = true
    // กำหนดค่าความคืบหน้าให้เปลี่ยนแปลงเป็นเวลา 0.5 วินาที
    const intervalId = setInterval(() => {
      this.progressValue += 10; // เพิ่มค่าความคืบหน้าทีละ 10

      if (this.progressValue >= 100) {
        clearInterval(intervalId); // หยุดการเปลี่ยนค่าความคืบหน้าเมื่อค่าเป็น 100
        location.reload(); // รีโหลดหน้าเว็บ
        // this.hideprogress = false
      }
    }, 50); // เปลี่ยนค่าทุก 0.05 วินาที (0.5 วินาที = 500 milliseconds)
  }
}
