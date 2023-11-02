import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  data: any;
  constructor(private userService : UserServiceService)
  {

  }
  ngOnInit(): void {
    this.userService.fetchData().subscribe((result)=>{
      this.data=result;
    });
  }

}
