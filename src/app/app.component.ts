import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'angular-tour-of-heroes';
  firstName: string = "Prachi ";
  lastName:string = "Parhi";

}

