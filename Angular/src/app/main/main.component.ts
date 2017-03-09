import { Component } from '@angular/core';
import { AppServices } from '../service/app.service';

@Component({
  moduleId: module.id,
  selector: 'main',
  templateUrl: 'main.component.html',
  providers: [AppServices]
})
export class MainComponent{
    posts : Post[];
    show: boolean;
    show2: boolean;
    show3: boolean;
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
        this.show3 = false;
      }
      else{
        this.show = false;
      }
    }

    onClick2(){
      if(this.show2==false){
        this.show2 = true;
        this.show= false;
        this.show3 = false;
      }
      else{
        this.show2 = false;
      }
    }

    onClick3(){
      if(this.show3==false){
        this.show3 = true;
        this.show2 = false;
        this.show = false;
      }
      else{
        this.show3 = false;
      }
    }

    delRow(i: number){
      this.posts.splice(i, 1);

    }
    addRow(name:string,email:string,phone:string,street:string,city:string,state:string,country:string){
      let post = {id: this.posts.length, name:name,
      email:email,
      phone:phone,
      street:street,
    city:city,
    state:state,
    country:country};
      this.posts.push(post);
      this.show3=false;

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
