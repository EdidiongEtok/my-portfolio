import { Component, Inject, OnInit } from '@angular/core';
import { UserModel } from './Models/userModel';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-portfolio';
  name?: string;
  apiUrl1?: string;
  userInfo?: UserModel;
  constructor(@Inject('API_BASE_URL') apiUrl: string, public _userService?: UserService) {
    this.apiUrl1 = apiUrl;
  }
  ngOnInit(): void {
    this._userService?.getUserData().subscribe((data: any) => {
      this.userInfo = {
        firstName: data.data.firstName,
        lastName: data.data.lastName,
        address: data.data.address, email: data.data.email,
        phoneNumber: data.data.phoneNumber, skills: data.data.skills,
        projects: data.data.projects, workHistory: data.data.workHistory,
        educationHistory: data.data.educationHistory
      }
    }, (error: any) => {
      console.log(error);
    }, () => {
      console.log("Completed.");
    });
  }
}

