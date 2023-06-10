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
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancelEdit() {
    this.getUsersData();
  }

}
