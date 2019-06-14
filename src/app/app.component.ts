import { Component } from "@angular/core";
import { AvailabilityService } from './availability.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items = ['first', 'second'];
  title = 'production'; 
  isActive: boolean = true;
  todo;
  surname;

  constructor(private service: AvailabilityService, private http: HttpClient) {
  }

  clicked(item) {
    console.log('clicked');
    var isclicked = true;

  }

  getPrivileges() {
    this.service.getPrivileges().subscribe(p => {
      this.surname = p[0].surname;
    });
  }

  getTodos() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((result: any) => {
      this.todo = result.something;
    })
  }
}