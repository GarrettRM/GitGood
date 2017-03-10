import { Component } from '@angular/core';
import { AppServices } from '../service/app.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'login',
  templateUrl: 'login.component.html',
  providers: [AppServices]
})
export class LoginComponent{
    posts : Post[];

    constructor(private appService: AppServices) {

        this.appService.getJSON().subscribe( posts =>{
            this.posts = posts;
        });
    }
  }

interface Post{
      id: number,
      name: string,
      email: string,
      street: string,
      city: string,
      state: string,
      country: string,
      phone: string
    }
