import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css','./nav-bar-queries.css']
})
export class NavBarComponent implements OnInit {
  buttonclick:boolean=false;
  constructor() { }
  
  ngOnInit(): void {
  }
  
  resFun()
  {
    this.buttonclick=true;
    console.log(this.buttonclick);
    
  }
  closeFun()
  {
    this.buttonclick=false;
  }
  

}
