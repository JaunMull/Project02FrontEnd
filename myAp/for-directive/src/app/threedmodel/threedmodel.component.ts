import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-threedmodel',
  templateUrl: './threedmodel.component.html',
  styleUrls: ['./threedmodel.component.css']
})
export class ThreedmodelComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  home(){
    this.router.navigate(['home'])
  }
}
