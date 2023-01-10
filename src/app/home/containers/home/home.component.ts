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
    if(this.classList) {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else {
        this.classList.add("active");
      }
    }
  }

  ngAfterViewChecked(): void {
    this.cards = document.querySelectorAll(".card");
    this.cards.forEach((card) => card.addEventListener("click", this.transition));
  }
  
  constructor() {

  }
  
  

}
