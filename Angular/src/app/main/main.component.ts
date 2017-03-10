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

    alertUser(){
      alert("User Creation has been cancelled!")
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
      if(name=='' || email=='' || phone== '' || street=='' || city=='' || state=='' || country==''){
        alert("Please fill all the fields");
      }
      else{
        let post = {
          id: this.posts.length, name:name,
          email:email,
          phone:phone,
          street:street,
          city:city,
          state:state,
          country:country
        };
        this.posts.push(post);
        this.show3=false;
      }
    }
    sortAsc(userInput:String){
      this.posts.sort(function(a,b) {
        if(userInput =="id"){
          if (a.id < b.id)
            return -1;
          if (a.id > b.id)
            return 1
          return 0;
        }
        if(userInput =="name"){
          if (a.name < b.name)
            return -1;
          if (a.name > b.name)
            return 1
          return 0;
        }
        if(userInput =="street"){
          if (a.street < b.street)
            return -1;
          if (a.street > b.street)
            return 1
          return 0;
        }

        if(userInput =="state"){
          if (a.state < b.state)
            return -1;
          if (a.state > b.state)
            return 1
          return 0;
        }
        if(userInput =="country"){
          if (a.country < b.country)
            return -1;
          if (a.country > b.country)
            return 1
          return 0;
        }
        if(userInput =="city"){
          if (a.city < b.city)
            return -1;
          if (a.city > b.city)
            return 1
          return 0;
        }

        });

        }
    findItem(userInput: string){
      this.posts.filter( function(a){
        if( a.name == userInput){
          return a
        }
        if( a.email == userInput){
          return a
        }
        if( a.street == userInput){
          return a
        }
        if( a.country == userInput){
          return a
        }
        if( a.state == userInput){
          return a
        }
        if( a.phone == userInput){
          return a
        }
        if( a.id.toString() == userInput){
          return a
        }

      })

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
