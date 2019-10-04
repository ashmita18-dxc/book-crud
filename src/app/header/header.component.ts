import { Component, OnInit } from '@angular/core';
import { User } from './header.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  contacts:User[]=[];

  userName:string="";
  email:string="";
  phone:string="";

  newUser: User;

  constructor() { }

  ngOnInit() {
  }

  createContact(){
    this.newUser=new User(this.userName, this.email, this.phone);
    this.contacts.push(this.newUser);
    console.log("There are"+this.contacts.length+ "contacts")
  }

  processForm(){
    console.log("Processing....");
    console.log(this.userName+" "+this.email+" "+this.phone);
  }
}
