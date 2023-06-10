import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersapiService {

  dataAll: any[] = []

  constructor(private http: HttpClient) { }

  getUsersData() {
    this.http.get<any[]>('http://localhost:3000/api/users').subscribe(
      (response) => {
        this.dataAll = response;
        console.log('this.data', this.dataAll);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  CreateUsersData(userData: any) {
    return this.http.post<any>('http://localhost:3000/api/users', userData);
  }
  DeleteUsersData(id: string) {
    return this.http.delete<any>(`http://localhost:3000/api/users/${id}`);
  }
  EditUsersData() { }
}
