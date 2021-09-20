import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() dataFromParent:string = '';
  @Input() objFromParent:any;

  name:string = '';

  constructor(private dataService:DataService) { 
  }
  
  ngOnInit(): void {
    console.log("Hello inside oninit");
    this.name = this.dataService.getFirstName();
  }

}
