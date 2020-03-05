import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/model/Employee.model';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
  }

  login(emp) {
    console.log(emp);
    this.shared.login(emp).subscribe((data) => {
      console.log(data);
      this.emp = data;
      if (this.emp.empcode === '') {
        this.router.navigateByUrl('');
      }
      else {

        if (this.emp.username === 'admin' && this.emp.password === 'admin') {
          console.log('else if admin');

          this.router.navigateByUrl('view');
        } else {
          console.log('else else admin');
          sessionStorage.setItem('data', JSON.stringify(this.emp));
          this.router.navigateByUrl('singleview');
        }

      }
    })
  }
}
