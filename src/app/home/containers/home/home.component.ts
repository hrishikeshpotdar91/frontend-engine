import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewChecked {

  cards;
  classList: any;

  transition()
   {
    console.log('outside');

    if(this.classList) {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
  
        console.log('removed');
      } else {
        console.log('added');
        this.classList.add("active");
      }
    }
  }

  ngAfterViewChecked(): void {
    this.cards = document.querySelectorAll(".card");

    console.log(this.cards);
    this.cards.forEach((card) => card.addEventListener("click", this.transition));
  }
  
  constructor() {

  }
  
  

}
