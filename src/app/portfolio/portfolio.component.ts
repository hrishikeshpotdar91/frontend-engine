import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';


/**
 * @title Stepper animations
 */
@Component({
  selector: 'app-portfolio',
  templateUrl: 'portfolio.component.html',
  styleUrls: ['portfolio.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: {displayDefaultIndicatorType: false},
  }]
})
export class PortfolioComponent {
  
}