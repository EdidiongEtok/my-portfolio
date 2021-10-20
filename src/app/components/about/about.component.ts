import { Component, Inject, OnInit } from '@angular/core';
import { UserModel } from 'src/app/Models/userModel';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
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