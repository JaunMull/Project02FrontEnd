import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidessComponent implements OnInit {
  slideContainer: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  home(){
    this.router.navigate(['home'])
  }
}
