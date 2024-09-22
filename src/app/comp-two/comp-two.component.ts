import { Component } from '@angular/core';
import { getSymbolIterator } from 'rxjs/internal/symbol/iterator';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrl: './comp-two.component.css'
})
export class CompTwoComponent {
  studentName = "sasi";


  getstudentName(){
    return "reddy";

  }

  studentName_1 = "dharshi";

  inputtype = "date";


  printMessage(){
    // window.alert("click button")
    console.log("click buton")
  }


  printMessagebyTextBox(){
    console.log("Textbox Keypressed")


  }
  mouseOverChangeName(){
    this.studentName = "sekhar";
    return this.studentName;
  }
  
mouseLeaveChangeName(){
  this.studentName = "sasi";
  return this.studentName;
}
  
// here we have to pass element as parmeter($event) to the method

getValueFromTheTextBox(event:KeyboardEvent){
  // console.log(event); // get wha kind of event

  // console.log(event.target); // traget element

  let inputtypeelement = event.target as HTMLInputElement;
  console.log(inputtypeelement.value);
}


}
