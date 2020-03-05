import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/model/Employee.model';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private shared: SharedService, private router: Router) { }
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

  ngOnInit() {
    this.emp = JSON.parse(sessionStorage.getItem("data"));
  }
  submitData(emp: Employee) {
    if (emp.id === null) {
      this.shared.submitData(emp).subscribe();
    } else {
      this.shared.editData(emp).subscribe();
    }
    this.resetData();
    sessionStorage.getItem('data');
    this.router.navigateByUrl("view");
  }

  resetData() {
    this.emp = Object.assign({}, null);
    sessionStorage.clear();
  }
}
