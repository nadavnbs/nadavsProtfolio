import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToProjects(){
    this.router.navigate(['projects'])
  }
  goToHome(){
    this.router.navigate([''])
  }
  goToSkills(){
    this.router.navigate(['skills'])
  }
  goToContect(){
    this.router.navigate(['sendEmail'])
  }

}
