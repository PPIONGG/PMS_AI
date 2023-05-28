import { Component } from '@angular/core';
import { BtactiveService } from '../service/btactive.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private btactive : BtactiveService){
  }

  ngOnInit(): void {
      this.btactive.updateUsers()
  }
}
