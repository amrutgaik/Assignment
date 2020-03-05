import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/model/Employee.model';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {

  constructor(private shared: SharedService, private router: Router) { }
  empDetails: Employee[];
  emp: Employee;
  ngOnInit() 
  {
    
     this.shared.getData().subscribe
     (
       (data) =>this.empDetails = data
      )
  }
 
  delete(emp: Employee) {
    this.shared.deleteData(emp).subscribe();
    this.shared.getData().subscribe
    (
      (data) =>this.empDetails = data
     )
  }

  editData(emp: Employee) {
    sessionStorage.setItem("data", JSON.stringify(emp));
    this.router.navigateByUrl("register");
    // this.emp = Object.assign({}, emp);
    // this.shared.isHidden=false;
    this.shared.resetHide = true;
    this.shared.btnName = "Update";
  }
}
