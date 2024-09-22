import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comp-four',
  templateUrl: './comp-four.component.html',
  styleUrl: './comp-four.component.css'
})
export class CompFourComponent {

// variable(var)           name : string
@ViewChild('paragraph') _paragraph:ElementRef;// elemenref  you can  access any element from the dom

  printMessage()
{
console.log(this._paragraph)

console.log(this._paragraph.nativeElement)
console.log(this._paragraph.nativeElement.innerText);


}
}

