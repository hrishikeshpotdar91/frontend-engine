import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/containers/home/home.component';
import { MentoringComponent } from './mentoring/mentoring.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProductComponent } from './products/product.component';
import { TutoringComponent } from './tutoring/tutoring.component';
const routes: Routes = [
    
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'products', component: ProductComponent
  },
  { path: 'about', component: AboutComponent },

  { path: 'contact', component: ContactsComponent },

  { path: 'portfolio', component: PortfolioComponent },

  { path: 'tutoring', component: TutoringComponent },

  { path: 'mentoring', component: MentoringComponent },

  { path: '**', pathMatch: 'full', 
        component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
