import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersapiService {

  dataAll: any[] = []

  constructor(private http: HttpClient) { }

  getUsersData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/users').pipe(
      map((response) => {
        return response;
      })
    );
  }
  CreateUsersData(userData: any) {
    return this.http.post<any>('http://localhost:3000/api/users', userData);
  }
  DeleteUsersData(id: string) {
    return this.http.delete<any>(`http://localhost:3000/api/users/${id}`);
  }
  EditUsersData(id: string,userData: any) {
    return this.http.put<any>(`http://localhost:3000/api/users/${id}`,userData)
   }
}
