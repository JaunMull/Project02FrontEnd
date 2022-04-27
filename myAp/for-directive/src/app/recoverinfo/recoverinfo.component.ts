import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recoverinfo',
  templateUrl: './recoverinfo.component.html',
  styleUrls: ['./recoverinfo.component.css']
})
export class RecoverinfoComponent implements OnInit {

  public recoverForm!: FormGroup
  
  constructor(private formBuilder : FormBuilder,private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.recoverForm = this.formBuilder.group({
      email: [''],
      
    })

  }

  recoverinfo(){
    this.http.get<any>("http://localhost:9090/user/"+this.recoverForm.value.email).subscribe(res=>{
      const user = res.find((pwd:any)=>{
        alert(pwd.password);
          return pwd.password;
          
      });
      if(user){
        alert("User Found");
        this.recoverForm.reset();
        this.router.navigate(['login'])
      }else{
        alert("user not found");
      }},err=>{
        alert("Something went wrong!!")
      })
  }

}
