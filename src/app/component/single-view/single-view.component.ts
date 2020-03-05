import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/model/Employee.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {

  constructor(private shared: SharedService) { }
  emp: Employee =
    {
      id: null,
      name: '',
      address: '',
      username: '',
      password: '',
      empcode: '',
      role: ''
    }
  ngOnInit() 
  {
    this.emp=JSON.parse(sessionStorage.getItem('data'));
  }

  delete(emp: Employee) {
    this.shared.deleteData(emp).subscribe();
      
  }
}
