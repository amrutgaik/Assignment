import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from 'src/model/Employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  // url: string = "http://localhost:3000/Employee";

  // isHidden: boolean = true;
  btnName: string = "Submit";
  resetHide: boolean = false;
   emp:Employee[];

  mockurl = "http://localhost:8087";
 

  getData():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.mockurl + '/' +'employees');
  }

  login(emp: Employee): Observable<Employee> {
    return this.http.get<Employee>(this.mockurl + '/' + 'log' + '/' + emp.username + '/' + emp.password);
  }

  deleteData(emp: Employee) {
    console.log(this.http.delete(this.mockurl + "/" + 'delete' +"/" + emp.id));
    return this.http.delete(this.mockurl + "/" + 'delete' + "/" + emp.id);
    

  }

  submitData(emp1: Employee) {
    return this.http.post(this.mockurl, emp1);
  }

  editData(emp: Employee) {
    console.log(emp);
    return this.http.put(this.mockurl + "/" +'update', emp);
  }
}
