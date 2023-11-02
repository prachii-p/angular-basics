import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


     
  @Output() newItemEvent = new EventEmitter<string>();
  getUserName(username: string) {
    this.newItemEvent.emit(username);
  }
}
