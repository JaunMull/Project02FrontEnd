import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Planet } from '../Planet';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {
  slideContainer: any;
  planet: Planet | any;
  name: string | any;

  planets: any ={};
  


  constructor(private formBuilder : FormBuilder,private http: HttpClient, private router:Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getaPlanet():Observable<any>{
    return this.http.get<any>("http://localhost:9090/planet/");
  }
  getPlanet():Observable<any>{
    return this.http.get<any>("http://localhost:9090/planet/");
  }

  ngOnInit(): void {
  }

  planetInfo(tt: any){
    alert(tt);
   // this.getaPlanet(this.name).subscribe(data=>{this.planet=data;});
  }

  home(){
    this.router.navigate(['home'])
  }

  btn:boolean=false;
btnClick(name: any){
  alert("Picture Clicked");
  this.btn =! this.btn;
 // this.getPlanet().subscribe(data=>{this.planet=data;});
 this.http.get<any>("http://localhost:9090/planet/"+name)
 .subscribe(data=>{this.planet=data;});
}

plt: string | any;

mercury(){
  this.plt = "Mercury";
  this.btnClick("Mercury");
  

}

earth(){
  this.plt = "Earth";
  this.btnClick("Earth");
}

venus(){
  this.plt = "Venus";
  this.btnClick(this.plt);
}

mars(){
  this.plt = "Mars";
  this.btnClick(this.plt);
}

jupiter(){
  this.plt = "Jupiter";
  this.btnClick(this.plt);
}

saturn(){
  this.plt = "Saturn";
  this.btnClick(this.plt);
}

uranus(){
  this.plt = "Uranus";
  this.btnClick(this.plt);
}

neptune(){
  this.plt = "Neptune";
  this.btnClick(this.plt);
}
}


