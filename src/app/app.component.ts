import { Component } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { TaskserviceService } from './taskservice.service';
import { switchMap } from 'rxjs/operators';
import { Subscription, timer } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eid;
  firstname;
  lastname;
  email;
  data: object;
  subscription: Subscription;
  statusText: string;
 
  constructor(private ser:TaskserviceService) { }

  ngOnInit() {
    this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.ser.getdata())
    ).subscribe(resp=>this.data=resp);
   
  }


  fun(i){
    console.log(i,"i value")
    this.eid=i.id;
    this.firstname=i.firstname;
   this. lastname=i.lastname
   this. email=i.email
  }

}
