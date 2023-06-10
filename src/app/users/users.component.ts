import { Component, OnInit } from '@angular/core';
import { UsersapiService } from '../service/usersapi.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dataAll: any[] = [];

  constructor(private usersApiService: UsersapiService) {}

  ngOnInit() {
    this.getUsersData();
    console.log('reload this page');

  }

  getUsersData() {
    // this.usersApiService.getUsersData();
    // this.dataAll = this.usersApiService.dataAll;
    // console.log('this.dataAll',this.dataAll);
    this.usersApiService.getUsersData().subscribe(
      (response: any[]) => {
        this.dataAll = response;
        console.log('this.dataAll', this.dataAll);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteItem(id: string) {
    this.usersApiService.DeleteUsersData(id).subscribe(
      (response) => {
        console.log('Item deleted successfully');
        this.dataAll = this.dataAll.filter((item) => item._id !== id); // ลบข้อมูลออกจากอาร์เรย์
        // this.getUsersData(); // ดึงข้อมูลใหม่หลังจากลบ
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editItem(id: string) {
    const userData = {
        "firstname": "มะขาม"
    };

    this.usersApiService.EditUsersData(id, userData).subscribe(
      (response) => {
        console.log('Item updated successfully');
        const index = this.dataAll.findIndex((item) => item._id === id);
        if (index !== -1) {
          this.dataAll[index] = response; // อัปเดตข้อมูลที่ถูกแก้ไขในอาร์เรย์
        }
        // this.getUsersData(); // ดึงข้อมูลใหม่หลังจากอัปเดต
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
