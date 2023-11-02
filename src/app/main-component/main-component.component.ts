import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit{

  
  constructor(public userService : UserServiceService)
  {
  }
  ngOnInit(): void {
    this.userService.setUserValue("Accolite");
  }

  getUserName(username : string)
  {
    console.log(username);
  }

}


