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
    show2: boolean;
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
        this.show2= false;
      }
      else{
        this.show = false;
      }
    }

    onClick2(){
      if(this.show2==false){
        this.show2 = true;
        this.show= false;
      }
      else{
        this.show2 = false;
      }
    }

    delRow(i: number){
      this.posts.splice(i, 1)
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
