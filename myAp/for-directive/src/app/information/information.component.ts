import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Planet } from '../Planet';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  
  
  planet: Planet | any;
  public planetForm!: FormGroup;
  public guessForm !: FormGroup;
  
  
  //constructor() { }
  constructor(private formBuilder : FormBuilder,private http: HttpClient, private router:Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getPlanet():Observable<any>{
    return this.http.get<any>("http://localhost:9090/planet");
  }

  ngOnInit(): void {
    this.getPlanet().subscribe(data=>{this.planet=data;});
    this.guessForm = this.formBuilder.group({
      name: ['']
    })
  }
  
getName(n: any){
  this.planetForm.controls["name"].setValue(n);
}

display(){
  alert("It's working");
  this.http.get<any>("http://localhost:9090/planet")
  .subscribe(res=>{
    const plt = res.find((p:any)=>{
      this.getName(p.name);
      return p;
      
    })
  })

}
btn:boolean=false;
btnClick(){
  this.btn =! this.btn;
  return this.btn;
}

pClick(){
  alert("Picture")
}
plt: string | any;
checkName(){
  this.plt = this.guessForm.value.name;
  
}
}
