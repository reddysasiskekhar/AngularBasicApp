import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-three',
  templateUrl: './comp-three.component.html',
  styleUrl: './comp-three.component.css'
})
export class CompThreeComponent {


  // redcolor:String ="red"; // this is also same syntax to down syntax
  redcolor ="red";
  yellowcolor = "yellow";

  isAdmin = true;

  studentName = ["sasi","ramu","sssr","ntru"]

}

