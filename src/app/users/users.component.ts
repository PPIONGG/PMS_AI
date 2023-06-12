import { Component, OnInit } from '@angular/core';
import { UsersapiService } from '../service/usersapi.service';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dataAll: any[] = [];
  editingRow: any = null; // เพิ่มตัวแปร editingRow

  constructor(private usersApiService: UsersapiService, private toast: ToastService) {}

  ngOnInit() {
    this.getUsersData();
    console.log('reload this page');
  }

  getUsersData() {
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
        this.dataAll = this.dataAll.filter((item) => item._id !== id);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editItem(id: string, updatedProduct: any) {
    const { firstname, lastname, email, password } = updatedProduct;

    if (firstname === "" || lastname === "" || email === "" || password === "") {
      this.toast.showError("กรอกข้อมูลไม่ครบถ้วน");
      return;
    }

    const userData = {
      firstname,
      lastname,
      email,
      password
    };

    this.usersApiService.EditUsersData(id, userData).subscribe(
      (response) => {
        console.log('Item updated successfully');
        this.editingRow = null; // เมื่อแก้ไขสำเร็จ ให้เคลียร์ค่า editingRow
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancelEdit() {
    this.editingRow = null; // เมื่อยกเลิกแก้ไข ให้เคลียร์ค่า editingRow
    this.getUsersData();
  }

  onRowEditInit(product: any) {
    this.editingRow = product; // เรียกใช้เมื่อเริ่มแก้ไขแถว
  }
}
