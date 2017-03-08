import { Component } from '@angular/core';
import { AppServices } from './service/app.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [AppServices]
})
export class AppComponent{
    posts : Post[];
    show: boolean;
    name: string;
    constructor(private appService: AppServices) {
        this.name = "Admin";
        this.show = false;
        this.appService.getJSON().subscribe( posts =>{
            this.posts = posts;
        });
    }
    onClick(){
      if(this.show==false){
        this.show = true;
      }
      else{
        this.show = false;
      }
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
